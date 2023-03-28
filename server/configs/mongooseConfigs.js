const mongoose = require('mongoose');



mongoose.set('strictQuery', true)
// mongoose.connect('mongodb://127.0.0.1:27017/MERNPROJECT', {
mongoose.connect('mongodb+srv://root:root@cluster0.fzssz8m.mongodb.net/real_talk?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => {
        console.log(err)
    })


