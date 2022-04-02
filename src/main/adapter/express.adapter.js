export const adapRoute = (controller) => async (req, res) => {
    const httpRequest = {
        body: req.body,
        params: req.params,
        userId: req.userId,
        headers: req.headers,
    };

    const httpResponse = await controller.handle(httpRequest);

    if (httpResponse.status >= 200 && httpResponse.status <= 299) {
        res.status(httpResponse.status).json(httpResponse.data);
    } else if (httpResponse.status >= 300 && httpResponse.status <= 499) {
        res.status(httpResponse.status).json({
            error: `${httpResponse.data.error}`,
        });
    } else {
        res.status(httpResponse.status).json({
            error: `${httpResponse.data}`,
        });
    }
};
