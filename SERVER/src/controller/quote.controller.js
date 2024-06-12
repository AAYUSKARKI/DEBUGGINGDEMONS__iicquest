import { Quote } from "../models/quote.model.js";
import { Apierror } from "../utils/apierror.js";
import { asynchandler } from "../utils/asynchandler.js";
import { Apiresponse } from "../utils/apiresponse.js";


export const getallquotes = asynchandler(async (req, res) => {
    const quotes = await Quote.find();
    if(!quotes){
        throw new Apierror(404, "Quotes not found");
    }
    
    return res.status(200).json(new Apiresponse(200, quotes, "Quotes fetched successfully"));
});


  