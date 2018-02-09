let solarHappenings = [];
let entryID = 0;
let sampleEntry = [{
    lat: '36.154612',
    long: '-85.505950',
    sunrise: '12:38:44 PM',
    sunset: '11:13:22 PM',
    entry: 'Sample journal entry',
    id: 13
}];

module.exports = {
    create: function (req, res) {
        console.log('got here');
        if (req.params.addEntry === 'addEntry'){
            let obj = Object.assign({},req.body,{id:entryID});
            console.log(obj);
            solarHappenings.push(obj);
            entryID++
            res.status(200).send(solarHappenings);
        }
    },
    
    read: function (req, res) {
        res.status(200).send(solarHappenings);
    },

    display: function (req, res) {
        res.status(200).send(sampleEntry);
        console.log("display controller", sampleEntry);
    },

    update: function (req, res) {
        if (req.params.updateEntry === 'updateEntry') {
            const {entry} = req.body;
            const {id} = req.body.id; 
            const updateID = req.body.id;
            const index = solarHappenings.findIndex((e) => e.id == updateID);

            solarHappenings[index] = {
                lat: req.body.lat,
                long: req.body.long,
                sunrise: req.body.sunrise,
                sunset: req.body.sunset,
                id: req.body.id,
                entry: entry || solarHappenings.entry
            }
            
            res.status(200).send(solarHappenings);
            console.log("update controller", solarHappenings);
        }
    },

    delete: function (req, res) {
        if (req.params.deleteEntry === 'deleteEntry') {
            const deleteID = req.body.id;
            let entryIndex = solarHappenings.findIndex((entry) => entry.id === deleteID);
            solarHappenings.splice(entryIndex, 1);
            res.status(200).send(solarHappenings);
        }
    }
}
