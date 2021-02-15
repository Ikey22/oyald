const $self = self;

$self.onmessage = ({ data }) => fetch(data)// || '/country-stats-city.jon')
           .then(res => res.json())
           .then(json => {
               const retVal = {
                   status: 'success',
                   payload: json
               };

               const jsonVal = JSON.stringify(retVal)
               
               $self.postMessage(jsonVal);
           })
           .catch(err => {
               const payload = `Unable to get list of countries, states and cities:  ${JSON.stringify(err)}`;

               $self.postMessage({
                   status: 'error',
                   payload
               });

               console.trace(err);

               });
