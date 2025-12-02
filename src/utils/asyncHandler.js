const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err));
    }
}

                        //both in use this one or the commented one below

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 400).json({
//             success: false,
//             message: error.message || "Something went wrong"
//         })
//     }
// }


export default asyncHandler;