const Response = {
    success: function (data) {
        return {
            status: 200,
            data: data
        }
    },

    error: function (reason) {
        return {
            status: 400,
            error: reason
        }
    }
}

export default Response;