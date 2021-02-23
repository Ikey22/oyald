const $self = self;

$self.onmessage = ({ data }) => fetch(data)// || '/country-stats-city.jon')
           .then(res => res.json())
           .then(json => {

               const payload = JSON.parse(JSON.stringify(json));

               const retVal = {
                   status: 'success',
                   payload
               };
               
               console.trace("Ready to post");
               $self.postMessage(retVal);
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
