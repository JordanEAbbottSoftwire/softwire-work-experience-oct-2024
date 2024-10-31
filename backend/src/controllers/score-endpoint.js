export const Score_return = (req) => 
    {console.log(`Request: ${JSON.stringify(req.score)}`);
return { endpoint_score:req.score,endpoint_username:req.username};

}