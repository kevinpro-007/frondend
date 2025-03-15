export const addAtokenInterceptor = (req, next) => {
    const token = localStorage.getItem("mytoken");
    const newRequest = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
    return next(newRequest);
};
