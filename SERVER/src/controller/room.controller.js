import { Room } from "../models/room.model";
import { User } from "../models/user.model";
// import {io} from '../index.js'
import { Apierror } from "../utils/apierror.js";

const roomHandler = (socket) => {

    socket.on('create-room', async ({ userId, roomname, meetType, meetDate, meetTime }) => {
        const newRoom = new Room({
            host: userId,
            roomname,
            meetType,
            meetDate,
            meetTime,
            participants: [],
            currentParticipants: []
        });

        const room = await newRoom.save();

        if (!room) {
            throw new Apierror(400, "Room not created");
        }

        await socket.emit('room-created', { roomId: room._id, meetType: room.meetType });
    });

    socket.on('user-code-join', async ({ roomId }) => {
        const room = await Room.findById(roomId);

        if (room) {
            await socket.emit('room-exists', { roomId });
        } else {
            await socket.emit('room-not-exists');
        }
    });

    socket.on('request-to-join-room', async ({ roomId, userId }) => {
        const room = await Room.findById(roomId);

        if (userId === room.host) {
            socket.emit('join-room', { roomId, userId });
        } else {
            socket.emit('requesting-host', { userId });
            socket.broadcast.to(roomId).emit('user-requested-to-join', { participantId: userId, hostId: room.host });
        }
    });

    socket.on('join-room', async ({ roomId, userId }) => {
        await Room.updateOne({ _id: roomId }, { $addToSet: { participants: userId } });
        await Room.updateOne({ _id: roomId }, { $addToSet: { currentParticipants: userId } });
        await socket.join(roomId);
        console.log(`user : ${userId} joined room : ${roomId}`);
        await socket.broadcast.to(roomId).emit('user-joined', { userId });
    });

    socket.on('get-participants', async ({ roomId }) => {
        const room = await Room.findById(roomId);
        const roomname = room.roomname;
        const participants = room.participants;
        const usernames = {};

        const users = await User.find({ _id: { $in: participants } }, { _id: 1, username: 1 }).exec();

        users.forEach((user) => {
            const { _id, username } = user;
            usernames[_id.valueOf().toString()] = username;
        });

        socket.emit('participants-list', { roomname, usernames });
    });

    socket.on('fetch-my-meets', async ({ userId }) => {
        const meets = await Room.find({ host: userId }, { _id: 1, roomname: 1, meetType: 1, meetDate: 1, meetTime: 1 });
        await socket.emit('meets-fetched', { myMeets: meets });
    });

    socket.on('delete-meet', async ({ roomId }) => {
        await Room.findByIdAndDelete(roomId);
        socket.emit('meet-deleted');
    });

    socket.on('update-meet-details', async ({ roomId, roomname, meetType, meetDate, meetTime }) => {
        await Room.updateOne({ _id: roomId }, { roomname, meetType, meetDate, meetTime });
        socket.emit('meet-details-updated');
    });

    socket.on('user-left-room', async ({ userId,roomId }) => {
        await Room.updateOne({ _id: roomId }, { $pull: { participants: userId } });
    await socket.leave(roomId)
});


socket.on('user-disconnected', async ({ userId, roomId }) => {
    console.log(`user : ${userId} left room : ${roomId}`);
})


};

export { roomHandler };
