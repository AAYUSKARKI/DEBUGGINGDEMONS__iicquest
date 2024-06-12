import {io} from '../index.js'
import {Chat} from '../models/chat.model.js'

const createchat = asynchandler(async (req, res) => {
    const { sender, receiver, message } = req.body;

    if (!sender || !receiver || !message) {
        throw new Apierror(400, "All fields are required");
    }

    const chat = await Chat.create({
        senderid: sender,
        receiver: receiver,
        message
    });

    if(!chat){
        throw new Apierror(400, "Chat not created");
    }

    io.emit("chat", chat)
    return res.status(200).json(new Apiresponse(200, chat, "Chat created successfully"));

})

const getchat = asynchandler(async (req, res) => {
    const senderid = req.user?._id;
    const receiverid = req.params.id;

    if (!senderid || !receiverid) {
        throw new Apierror(400, "All fields are required");
    }

    const chat = await Chat.find({ $or: [{ senderid, receiverid }, { senderid: receiverid, receiverid: senderid }] });
    if(!chat){  
        throw new Apierror(400, "Chat not found");
    }

    return res.status(200).json(new Apiresponse(200, chat, "Chat fetched successfully"));

})


export { createchat, getchat }