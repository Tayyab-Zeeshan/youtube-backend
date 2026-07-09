class ApiResponse {
    constructor(statusCode, data, message="Success") {
        this.statusCode = statusCode
        this.data = data
        this.message = true
        this.success = statusCode < 400
    }

}