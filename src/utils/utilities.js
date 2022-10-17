export const handleError = (...pros) => {
    console.log(pros)
    const [error, setError = null, setEmptyFields = []] = pros
    setError(error.response.data.error)

    if (error.response.data.emptyFields) {
        setEmptyFields(error.response.data.emptyFields)
    }
}
