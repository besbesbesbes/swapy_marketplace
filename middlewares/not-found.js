export const notFoundHdl = (req,res)=>{
    res.status(400).json({message:'Path not found on this server'})
}