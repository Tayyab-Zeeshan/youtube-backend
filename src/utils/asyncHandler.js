const aynchandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err));
    }
}


export {ayncHandler}

// const asyncHandler = (fn) => aync () =>

// const ayncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {  
//         res.status(error.statusCode || 500).json({
//       success: false,
//       message: error.message || "Internal Server Error"
//     }
// }