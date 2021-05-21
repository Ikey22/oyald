const $self = self;

$self.onmessage = ({
        data
    }) => fetch(data) // || '/country-stats-city.jon')
    .then(res => res.json())
    .then(async json => {

        const payload = JSON.parse(JSON.stringify(json));

        const retVal = {
            status: 'success',
            payload
        };

        console.trace("Ready to post");
        // $self.postMessage(retVal);
        $self.postMessage({
            status: "starting"
        });
        
        for (const country of retVal.payload) {

            $self.postMessage({
                status: "success",
                value: country
            })

            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        $self.postMessage({
            status: "ended"
        });
        console.trace("after post message");
        //console.trace(retVal);
    })
    .catch(err => {
        const payload = `Unable to get list of countries, states and cities:  ${JSON.stringify(err)}`;

        $self.postMessage({
            status: 'error',
            payload
        });

        console.trace(err);

    });