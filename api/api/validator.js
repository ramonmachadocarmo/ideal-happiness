module.exports = app => {

    function existOrError(value, message) {
        if(!value) throw message
        if(Array.isArray(value) && value.length === 0) throw message
        if(typeof value === 'string' && !value.trim()) throw message
    }
    
    function notExistOrError(value, message){
        try{
            existOrError(value, message)
        }catch(message){
            return
        }
        throw message
    }
    
    function equalOrError(value1, value2, message) {
        if(value1 !== value2) throw message
    }
    return {
        existOrError,
        notExistOrError,
        equalOrError
    }
}