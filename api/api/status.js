module.exports = app => {
    
    const get = (req, res) => {
        
        res.sendStatus(200)
    }

    return {
        get
    }
}