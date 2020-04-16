# Thallus API
* Thallus API returns seed sowing and gardening information used by the Gibber app (currently under development). The database holds information for gardening in zone 8 and is intended to be used by gardeners in Portland, Oregon. 
* Built with NodeJs, Express, and Mongooose. 
## Thallus API is deployed at https://thallus-api.herokuapp.com/api/crops. 
* GET all crops: https://thallus-api.herokuapp.com/api/crops
* GET crop by id: https://thallus-api.herokuapp.com/api/crops/:id
 Return all crops with common name: https://thallus-api.herokuapp.com/api/crops?common_name=<common>
* Return all crops with scientific name: https://thallus-api.herokuapp.com/api/crops?common_name=<scientific name>
* Other CRUD functionality is unavailable to public. 

### Thallus means "a green shoot" in greek and is used in biology to refer to the undifferentiated vegetative tissue in fungi, algae, slime molds, lichens, and liverwarts.
