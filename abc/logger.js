export const type_info = "info"
export const type_error ="error"

function logger  (log , type ) {
        console[type](log)
}
export default logger
