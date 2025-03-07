const axios = require('axios');


/**
 * scaleway-api-client Client Constructor
 * @constructor
 * @param {String} auth_token - Scaleway Authentication Token
 */
function Client(auth_token){
  this.base_url = 'https://api.scaleway.com';
  this.auth_token = auth_token;
}

/**
 * List bootscripts
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListBootscripts = function ListBootscripts(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/bootscripts".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get bootscripts
 * @description Get details of a bootscript with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} bootscript_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.GetBootscript = function GetBootscript(zone, bootscript_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/bootscripts/{bootscript_id}".replace('{zone}', zone).replace('{bootscript_id}', bootscript_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * undefined
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.GetDashboard = function GetDashboard(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/dashboard".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List instance images
 * @description List all images available in an account.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListImages = function ListImages(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/images".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create an instance image
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Name of the image
 * @param {string} body.root_volume - UUID of the snapshot
 * @param {string} body.arch - Architecture of the image
 * @param {string} body.default_bootscript - Default bootscript of the image
 * @param {object} body.extra_volumes - Additional volumes of the image
 * @param {string} body.organization - Organization ID of the image
 * @param {string} body.project - Project ID of the image
 * @param {boolean} body.public - True to create a public image
 * @param {object?} options axios http request options
 */
Client.prototype.CreateImage = function CreateImage(zone, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/images".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update image
 * @description Replace all image properties with an image message.
 * @param {string} zone - The zone you want to target
 * @param {string} id - 
 * @param {object} body - Request content
 * @param {string} body.name - 
 * @param {object} body.arch - 
 * @param {object} body.creation_date - 
 * @param {object} body.modification_date - 
 * @param {object} body.default_bootscript - 
 * @param {object} body.extra_volumes - 
 * @param {string} body.from_server - 
 * @param {string} body.organization - 
 * @param {boolean} body.public - 
 * @param {object} body.root_volume - 
 * @param {object} body.state - 
 * @param {string} body.project - 
 * @param {object?} options axios http request options
 */
Client.prototype.SetImage = function SetImage(zone, id, body, options){
  return axios({
    method: "put",
    url: "/instance/v1/zones/{zone}/images/{id}".replace('{zone}', zone).replace('{id}', id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get an instance image
 * @description Get details of an image with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} image_id - UUID of the image you want to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetImage = function GetImage(zone, image_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/images/{image_id}".replace('{zone}', zone).replace('{image_id}', image_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an instance image
 * @description Delete the image with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} image_id - UUID of the image you want to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteImage = function DeleteImage(zone, image_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/images/{image_id}".replace('{zone}', zone).replace('{image_id}', image_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all flexible IPs
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListIps = function ListIps(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/ips".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Reserve a flexible IP
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.organization - The organization ID the IP is reserved in
 * @param {string} body.project - The project ID the IP is reserved in
 * @param {string} body.server - UUID of the server you want to attach the IP to
 * @param {array} body.tags - An array of keywords you want to tag this IP with
 * @param {object?} options axios http request options
 */
Client.prototype.CreateIp = function CreateIp(zone, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/ips".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a flexible IP
 * @description Get details of an IP with the given ID or address.
 * @param {string} zone - The zone you want to target
 * @param {string} ip - The IP ID or address to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetIp = function GetIp(zone, ip, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/ips/{ip}".replace('{zone}', zone).replace('{ip}', ip),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a flexible IP
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {string} ip - IP ID or IP address
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateIp = function UpdateIp(zone, ip, options){
  return axios({
    method: "patch",
    url: "/instance/v1/zones/{zone}/ips/{ip}".replace('{zone}', zone).replace('{ip}', ip),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a flexible IP
 * @description Delete the IP with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} ip - The ID or the address of the IP to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteIp = function DeleteIp(zone, ip, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/ips/{ip}".replace('{zone}', zone).replace('{ip}', ip),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List placement groups
 * @description List all placement groups.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListPlacementGroups = function ListPlacementGroups(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/placement_groups".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a placement group
 * @description Create a new placement group.
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Name of the placement group
 * @param {string} body.organization - Organization ID of the placement group
 * @param {string} body.project - Project ID of the placement group
 * @param {string} body.policy_mode - The operating mode of the placement group
 * @param {string} body.policy_type - The policy type of the placement group
 * @param {object?} options axios http request options
 */
Client.prototype.CreatePlacementGroup = function CreatePlacementGroup(zone, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/placement_groups".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a placement group
 * @description Get the given placement group.
 * @param {string} zone - The zone you want to target
 * @param {string} placement_group_id - UUID of the placement group you want to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetPlacementGroup = function GetPlacementGroup(zone, placement_group_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/placement_groups/{placement_group_id}".replace('{zone}', zone).replace('{placement_group_id}', placement_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Set placement group
 * @description Set all parameters of the given placement group.
 * @param {string} zone - The zone you want to target
 * @param {string} placement_group_id - 
 * @param {object} body - Request content
 * @param {string} body.name - 
 * @param {string} body.organization - 
 * @param {object} body.policy_mode - 
 * @param {object} body.policy_type - 
 * @param {string} body.project - 
 * @param {object?} options axios http request options
 */
Client.prototype.SetPlacementGroup = function SetPlacementGroup(zone, placement_group_id, body, options){
  return axios({
    method: "put",
    url: "/instance/v1/zones/{zone}/placement_groups/{placement_group_id}".replace('{zone}', zone).replace('{placement_group_id}', placement_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a placement group
 * @description Update one or more parameter of the given placement group.
 * @param {string} zone - The zone you want to target
 * @param {string} placement_group_id - UUID of the placement group
 * @param {object?} options axios http request options
 */
Client.prototype.UpdatePlacementGroup = function UpdatePlacementGroup(zone, placement_group_id, options){
  return axios({
    method: "patch",
    url: "/instance/v1/zones/{zone}/placement_groups/{placement_group_id}".replace('{zone}', zone).replace('{placement_group_id}', placement_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete the given placement group
 * @description Delete the given placement group.
 * @param {string} zone - The zone you want to target
 * @param {string} placement_group_id - UUID of the placement group you want to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeletePlacementGroup = function DeletePlacementGroup(zone, placement_group_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/placement_groups/{placement_group_id}".replace('{zone}', zone).replace('{placement_group_id}', placement_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get placement group servers
 * @description Get all servers belonging to the given placement group.
 * @param {string} zone - The zone you want to target
 * @param {string} placement_group_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.GetPlacementGroupServers = function GetPlacementGroupServers(zone, placement_group_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/placement_groups/{placement_group_id}/servers".replace('{zone}', zone).replace('{placement_group_id}', placement_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Set placement group servers
 * @description Set all servers belonging to the given placement group.
 * @param {string} zone - The zone you want to target
 * @param {string} placement_group_id - 
 * @param {object} body - Request content
 * @param {array} body.servers - 
 * @param {object?} options axios http request options
 */
Client.prototype.SetPlacementGroupServers = function SetPlacementGroupServers(zone, placement_group_id, body, options){
  return axios({
    method: "put",
    url: "/instance/v1/zones/{zone}/placement_groups/{placement_group_id}/servers".replace('{zone}', zone).replace('{placement_group_id}', placement_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update placement group servers
 * @description Update all servers belonging to the given placement group.
 * @param {string} zone - The zone you want to target
 * @param {string} placement_group_id - UUID of the placement group
 * @param {object?} options axios http request options
 */
Client.prototype.UpdatePlacementGroupServers = function UpdatePlacementGroupServers(zone, placement_group_id, options){
  return axios({
    method: "patch",
    url: "/instance/v1/zones/{zone}/placement_groups/{placement_group_id}/servers".replace('{zone}', zone).replace('{placement_group_id}', placement_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List server types
 * @description Get server types technical details.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListServersTypes = function ListServersTypes(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/products/servers".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get availability
 * @description Get availibility for all server types.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.GetServerTypesAvailability = function GetServerTypesAvailability(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/products/servers/availability".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List volumes types
 * @description Get volumes technical details.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListVolumesTypes = function ListVolumesTypes(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/products/volumes".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List security groups
 * @description List all security groups available in an account.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListSecurityGroups = function ListSecurityGroups(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/security_groups".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a security group
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Name of the security group
 * @param {string} body.description - Description of the security group
 * @param {string} body.organization - Organization ID the security group belongs to
 * @param {string} body.project - Project ID the security group belong to
 * @param {boolean} body.organization_default - Whether this security group becomes the default security group for new instances
 * @param {boolean} body.project_default - Whether this security group becomes the default security group for new instances
 * @param {boolean} body.stateful - Whether the security group is stateful or not
 * @param {string} body.inbound_default_policy - Default policy for inbound rules
 * @param {string} body.outbound_default_policy - Default policy for outbound rules
 * @param {object?} options axios http request options
 */
Client.prototype.CreateSecurityGroup = function CreateSecurityGroup(zone, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/security_groups".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a security group
 * @description Replace all security group properties with a security group message.
 * @param {string} zone - The zone you want to target
 * @param {string} id - The ID of the security group (will be ignored)
 * @param {object} body - Request content
 * @param {string} body.name - The name of the security group
 * @param {string} body.creation_date - The creation date of the security group (will be ignored)
 * @param {string} body.modification_date - The modification date of the security group (will be ignored)
 * @param {string} body.description - The description of the security group
 * @param {boolean} body.enable_default_security - True if SMTP is blocked on IPv4 and IPv6. This feature is read only, please open a ticket if you need to make it configurable.
 * @param {string} body.inbound_default_policy - The default inbound policy
 * @param {string} body.outbound_default_policy - The default outbound policy
 * @param {string} body.organization - The security groups organization ID
 * @param {string} body.project - The security group project ID
 * @param {boolean} body.organization_default - Please use project_default instead
 * @param {boolean} body.project_default - True use this security group for future instances created in this project
 * @param {array} body.servers - The servers attached to this security group
 * @param {boolean} body.stateful - True to set the security group as stateful
 * @param {object?} options axios http request options
 */
Client.prototype.SetSecurityGroup = function SetSecurityGroup(zone, id, body, options){
  return axios({
    method: "put",
    url: "/instance/v1/zones/{zone}/security_groups/{id}".replace('{zone}', zone).replace('{id}', id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a security group
 * @description Get the details of a Security Group with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} security_group_id - UUID of the security group you want to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetSecurityGroup = function GetSecurityGroup(zone, security_group_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/security_groups/{security_group_id}".replace('{zone}', zone).replace('{security_group_id}', security_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a security group
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {string} security_group_id - UUID of the security group you want to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteSecurityGroup = function DeleteSecurityGroup(zone, security_group_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/security_groups/{security_group_id}".replace('{zone}', zone).replace('{security_group_id}', security_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List rules
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {string} security_group_id - UUID of the security group
 * @param {object?} options axios http request options
 */
Client.prototype.ListSecurityGroupRules = function ListSecurityGroupRules(zone, security_group_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/security_groups/{security_group_id}/rules".replace('{zone}', zone).replace('{security_group_id}', security_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create rule
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {string} security_group_id - UUID of the security group
 * @param {object} body - Request content
 * @param {object} body.protocol - 
 * @param {object} body.direction - 
 * @param {object} body.action - 
 * @param {string} body.ip_range - (IP network)
 * @param {object} body.dest_port_from - 
 * @param {object} body.dest_port_to - 
 * @param {number} body.position - 
 * @param {boolean} body.editable - 
 * @param {object?} options axios http request options
 */
Client.prototype.CreateSecurityGroupRule = function CreateSecurityGroupRule(zone, security_group_id, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/security_groups/{security_group_id}/rules".replace('{zone}', zone).replace('{security_group_id}', security_group_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get rule
 * @description Get details of a security group rule with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} security_group_id - 
 * @param {string} security_group_rule_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.GetSecurityGroupRule = function GetSecurityGroupRule(zone, security_group_id, security_group_rule_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/security_groups/{security_group_id}/rules/{security_group_rule_id}".replace('{zone}', zone).replace('{security_group_id}', security_group_id).replace('{security_group_rule_id}', security_group_rule_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update security group rule
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {string} security_group_id - 
 * @param {string} security_group_rule_id - 
 * @param {object} body - Request content
 * @param {string} body.id - 
 * @param {object} body.protocol - 
 * @param {object} body.direction - 
 * @param {object} body.action - 
 * @param {string} body.ip_range - (IP network)
 * @param {object} body.dest_port_from - 
 * @param {object} body.dest_port_to - 
 * @param {number} body.position - 
 * @param {boolean} body.editable - 
 * @param {object?} options axios http request options
 */
Client.prototype.SetSecurityGroupRule = function SetSecurityGroupRule(zone, security_group_id, security_group_rule_id, body, options){
  return axios({
    method: "put",
    url: "/instance/v1/zones/{zone}/security_groups/{security_group_id}/rules/{security_group_rule_id}".replace('{zone}', zone).replace('{security_group_id}', security_group_id).replace('{security_group_rule_id}', security_group_rule_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete rule
 * @description Delete a security group rule with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} security_group_id - 
 * @param {string} security_group_rule_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteSecurityGroupRule = function DeleteSecurityGroupRule(zone, security_group_id, security_group_rule_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/security_groups/{security_group_id}/rules/{security_group_rule_id}".replace('{zone}', zone).replace('{security_group_id}', security_group_id).replace('{security_group_rule_id}', security_group_rule_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all servers
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListServers = function ListServers(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/servers".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a server
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.name - The server name
 * @param {boolean} body.dynamic_ip_required - Define if a dynamic IP is required for the instance
 * @param {string} body.commercial_type - Define the server commercial type (i.e. GP1-S)
 * @param {string} body.image - The server image ID
 * @param {object} body.volumes - The volumes attached to the server
 * @param {boolean} body.enable_ipv6 - True if IPv6 is enabled on the server
 * @param {string} body.public_ip - The ID of the reserved IP to attach to the server
 * @param {string} body.boot_type - The boot type to use
 * @param {string} body.bootscript - The bootscript ID to use when `boot_type` is set to `bootscript`
 * @param {string} body.organization - The server organization ID
 * @param {string} body.project - The server project ID
 * @param {array} body.tags - The server tags
 * @param {string} body.security_group - The security group ID
 * @param {string} body.placement_group - Placement group ID if server must be part of a placement group
 * @param {array} body.private_network - Private Network IDs if the server need to be part of one or more Private Networks
 * @param {object?} options axios http request options
 */
Client.prototype.CreateServer = function CreateServer(zone, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/servers".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a server
 * @description Get the details of a specified Server.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - UUID of the server you want to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetServer = function GetServer(zone, server_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/servers/{server_id}".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a server
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - UUID of the server
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateServer = function UpdateServer(zone, server_id, options){
  return axios({
    method: "patch",
    url: "/instance/v1/zones/{zone}/servers/{server_id}".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a server
 * @description Delete a server with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteServer = function DeleteServer(zone, server_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/servers/{server_id}".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List server actions
 * @description Liste all actions that can currently be performed on a server.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.ListServerActions = function ListServerActions(zone, server_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/action".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Perform action
 * @description Perform power related actions on a server. Be wary that when terminating a server, all the attached volumes (local *and* block storage) are deleted. So, if you want to keep your local volumes, you must use the `archive` action instead of `terminate`. And if you want to keep block-storage volumes, **you must** detach it beforehand you issue the `terminate` call.  For more information, read the [Volumes](#volumes-7e8a39) documentation.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - UUID of the server
 * @param {object} body - Request content
 * @param {string} body.action - The action to perform on the server
 * @param {string} body.name - The name of the backup you want to create.
This field should only be specified when performing a backup action.

 * @param {object?} options axios http request options
 */
Client.prototype.ServerAction = function ServerAction(zone, server_id, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/action".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List all private NICs
 * @description List all private NICs of a given server.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.ListPrivateNICs = function ListPrivateNICs(zone, server_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/private_nics".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a private NIC connecting a server to a private network
 * @description Create a private NIC connecting a server to a private network.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - 
 * @param {object} body - Request content
 * @param {string} body.private_network_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.CreatePrivateNIC = function CreatePrivateNIC(zone, server_id, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/private_nics".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a private NIC
 * @description Get private NIC properties.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - 
 * @param {string} private_nic_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.GetPrivateNIC = function GetPrivateNIC(zone, server_id, private_nic_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/private_nics/{private_nic_id}".replace('{zone}', zone).replace('{server_id}', server_id).replace('{private_nic_id}', private_nic_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a private NIC
 * @description Delete a private NIC.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - 
 * @param {string} private_nic_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.DeletePrivateNIC = function DeletePrivateNIC(zone, server_id, private_nic_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/private_nics/{private_nic_id}".replace('{zone}', zone).replace('{server_id}', server_id).replace('{private_nic_id}', private_nic_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List user data
 * @description List all user data keys registered on a given server.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - UUID of the server
 * @param {object?} options axios http request options
 */
Client.prototype.ListServerUserData = function ListServerUserData(zone, server_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/user_data".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get user data
 * @description Get the content of a user data with the given key on a server.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - UUID of the server
 * @param {string} key - Key of the user data to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetServerUserData = function GetServerUserData(zone, server_id, key, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/user_data/{key}".replace('{zone}', zone).replace('{server_id}', server_id).replace('{key}', key),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Add/Set user data
 * @description Add or update a user data with the given key on a server.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - UUID of the server
 * @param {string} key - Key of the user data to set
 * @param {object?} options axios http request options
 */
Client.prototype.SetServerUserData = function SetServerUserData(zone, server_id, key, options){
  return axios({
    method: "patch",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/user_data/{key}".replace('{zone}', zone).replace('{server_id}', server_id).replace('{key}', key),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete user data
 * @description Delete the given key from a server user data.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - UUID of the server
 * @param {string} key - Key of the user data to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteServerUserData = function DeleteServerUserData(zone, server_id, key, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/servers/{server_id}/user_data/{key}".replace('{zone}', zone).replace('{server_id}', server_id).replace('{key}', key),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List snapshots
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListSnapshots = function ListSnapshots(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/snapshots".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a snapshot from a given volume
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Name of the snapshot
 * @param {string} body.volume_id - UUID of the volume
 * @param {string} body.organization - Organization ID of the snapshot
 * @param {string} body.project - Project ID of the snapshot
 * @param {object?} options axios http request options
 */
Client.prototype.CreateSnapshot = function CreateSnapshot(zone, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/snapshots".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update snapshot
 * @description Replace all snapshot properties with a snapshot message.
 * @param {string} zone - The zone you want to target
 * @param {string} id - 
 * @param {object} body - Request content
 * @param {string} body.name - 
 * @param {string} body.organization - 
 * @param {object} body.volume_type - 
 * @param {number} body.size - (in bytes)
 * @param {object} body.state - 
 * @param {object} body.base_volume - 
 * @param {object} body.creation_date - 
 * @param {object} body.modification_date - 
 * @param {string} body.project - 
 * @param {object?} options axios http request options
 */
Client.prototype.SetSnapshot = function SetSnapshot(zone, id, body, options){
  return axios({
    method: "put",
    url: "/instance/v1/zones/{zone}/snapshots/{id}".replace('{zone}', zone).replace('{id}', id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a snapshot
 * @description Get details of a snapshot with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} snapshot_id - UUID of the snapshot you want to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetSnapshot = function GetSnapshot(zone, snapshot_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/snapshots/{snapshot_id}".replace('{zone}', zone).replace('{snapshot_id}', snapshot_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a snapshot
 * @description Delete the snapshot with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} snapshot_id - UUID of the snapshot you want to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteSnapshot = function DeleteSnapshot(zone, snapshot_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/snapshots/{snapshot_id}".replace('{zone}', zone).replace('{snapshot_id}', snapshot_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List volumes
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListVolumes = function ListVolumes(zone, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/volumes".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a volume
 * @description undefined
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.name - The volume name
 * @param {string} body.organization - The volume organization ID
 * @param {string} body.project - The volume project ID
 * @param {string} body.volume_type - The volume type
 * @param {number} body.size - The volume disk size (in bytes)
 * @param {string} body.base_volume - The ID of the volume on which this volume will be based
 * @param {string} body.base_snapshot - The ID of the snapshot on which this volume will be based
 * @param {object?} options axios http request options
 */
Client.prototype.CreateVolume = function CreateVolume(zone, body, options){
  return axios({
    method: "post",
    url: "/instance/v1/zones/{zone}/volumes".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update volume
 * @description Replace all volume properties with a volume message.
 * @param {string} zone - The zone you want to target
 * @param {string} id - The volumes unique ID
 * @param {object} body - Request content
 * @param {string} body.name - The volumes names
 * @param {string} body.export_uri - Show the volumes NBD export URI
 * @param {number} body.size - The volumes disk size (in bytes)
 * @param {string} body.volume_type - The volumes type
 * @param {string} body.creation_date - The volumes creation date
 * @param {string} body.modification_date - The volumes modification date
 * @param {string} body.organization - The volumes organization ID
 * @param {string} body.project - The volumes project ID
 * @param {object} body.server - The server attached to the volume
 * @param {string} body.state - The volumes state
 * @param {object?} options axios http request options
 */
Client.prototype.SetVolume = function SetVolume(zone, id, body, options){
  return axios({
    method: "put",
    url: "/instance/v1/zones/{zone}/volumes/{id}".replace('{zone}', zone).replace('{id}', id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a volume
 * @description Get details of a volume with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} volume_id - UUID of the volume you want to get
 * @param {object?} options axios http request options
 */
Client.prototype.GetVolume = function GetVolume(zone, volume_id, options){
  return axios({
    method: "get",
    url: "/instance/v1/zones/{zone}/volumes/{volume_id}".replace('{zone}', zone).replace('{volume_id}', volume_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a volume
 * @description Replace name and/or size properties of given ID volume with the given value(s). Any volume name can be changed while, for now, only `b_ssd` volume growing is supported.
 * @param {string} zone - The zone you want to target
 * @param {string} volume_id - UUID of the volume
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateVolume = function UpdateVolume(zone, volume_id, options){
  return axios({
    method: "patch",
    url: "/instance/v1/zones/{zone}/volumes/{volume_id}".replace('{zone}', zone).replace('{volume_id}', volume_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a volume
 * @description Delete the volume with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} volume_id - UUID of the volume you want to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteVolume = function DeleteVolume(zone, volume_id, options){
  return axios({
    method: "delete",
    url: "/instance/v1/zones/{zone}/volumes/{volume_id}".replace('{zone}', zone).replace('{volume_id}', volume_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List offers
 * @description List all available server offers.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListOffers = function ListOffers(zone, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/offers".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get offer
 * @description Return specific offer for the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} offer_id - ID of the researched Offer
 * @param {object?} options axios http request options
 */
Client.prototype.GetOffer = function GetOffer(zone, offer_id, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/offers/{offer_id}".replace('{zone}', zone).replace('{offer_id}', offer_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all available OS that can be install on a baremetal server
 * @description List all available OS that can be install on a baremetal server.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListOS = function ListOS(zone, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/os".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get an OS with a given ID
 * @description Return specific OS for the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} os_id - ID of the OS
 * @param {object?} options axios http request options
 */
Client.prototype.GetOS = function GetOS(zone, os_id, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/os/{os_id}".replace('{zone}', zone).replace('{os_id}', os_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List baremetal servers for organization
 * @description List baremetal servers for organization.
 * @param {string} zone - The zone you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListServers = function ListServers(zone, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/servers".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a baremetal server
 * @description Create a new baremetal server. Once the server is created, you probably want to install an OS.
 * @param {string} zone - The zone you want to target
 * @param {object} body - Request content
 * @param {string} body.offer_id - Offer ID of the new server
 * @param {string} body.organization_id - Organization ID with which the server will be created
 * @param {string} body.project_id - Project ID with which the server will be created
 * @param {string} body.name - Name of the server (≠hostname)
 * @param {string} body.description - Description associated to the server, max 255 characters
 * @param {array} body.tags - Tags to associate to the server
 * @param {object} body.install - 
 * @param {object?} options axios http request options
 */
Client.prototype.CreateServer = function CreateServer(zone, body, options){
  return axios({
    method: "post",
    url: "/baremetal/v1/zones/{zone}/servers".replace('{zone}', zone),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a specific baremetal server
 * @description Get the server associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server
 * @param {object?} options axios http request options
 */
Client.prototype.GetServer = function GetServer(zone, server_id, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a baremetal server
 * @description Update the server associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateServer = function UpdateServer(zone, server_id, options){
  return axios({
    method: "patch",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a baremetal server
 * @description Delete the server associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteServer = function DeleteServer(zone, server_id, options){
  return axios({
    method: "delete",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get BMC (Baseboard Management Controller) access for a given baremetal server
 * @description Get the BMC (Baseboard Management Controller) access associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server
 * @param {object?} options axios http request options
 */
Client.prototype.GetBMCAccess = function GetBMCAccess(zone, server_id, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/bmc-access".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Start BMC (Baseboard Management Controller) access for a given baremetal server
 * @description Start BMC (Baseboard Management Controller) access associated with the given ID.
The BMC (Baseboard Management Controller) access is available one hour after the installation of the server.

 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server
 * @param {object} body - Request content
 * @param {string} body.ip - The IP authorized to connect to the given server (IPv4 address)
 * @param {object?} options axios http request options
 */
Client.prototype.StartBMCAccess = function StartBMCAccess(zone, server_id, body, options){
  return axios({
    method: "post",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/bmc-access".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Stop BMC (Baseboard Management Controller) access for a given baremetal server
 * @description Stop BMC (Baseboard Management Controller) access associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server
 * @param {object?} options axios http request options
 */
Client.prototype.StopBMCAccess = function StopBMCAccess(zone, server_id, options){
  return axios({
    method: "delete",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/bmc-access".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List server events
 * @description List events associated to the given server ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server events searched
 * @param {object?} options axios http request options
 */
Client.prototype.ListServerEvents = function ListServerEvents(zone, server_id, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/events".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Install a baremetal server
 * @description Install an OS on the server associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - Server ID to install
 * @param {object} body - Request content
 * @param {string} body.os_id - ID of the OS to install on the server
 * @param {string} body.hostname - Hostname of the server
 * @param {array} body.ssh_key_ids - SSH key IDs authorized on the server
 * @param {object?} options axios http request options
 */
Client.prototype.InstallServer = function InstallServer(zone, server_id, body, options){
  return axios({
    method: "post",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/install".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update IP
 * @description Configure ip associated with the given server ID and ipID. You can use this method to set a reverse dns for an IP.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server
 * @param {string} ip_id - ID of the IP to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateIP = function UpdateIP(zone, server_id, ip_id, options){
  return axios({
    method: "patch",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/ips/{ip_id}".replace('{zone}', zone).replace('{server_id}', server_id).replace('{ip_id}', ip_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Return server metrics
 * @description Give the ping status on the server associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - Server ID to get the metrics
 * @param {object?} options axios http request options
 */
Client.prototype.GetServerMetrics = function GetServerMetrics(zone, server_id, options){
  return axios({
    method: "get",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/metrics".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Reboot a baremetal server
 * @description Reboot the server associated with the given ID, use boot param to reboot in rescue.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server to reboot
 * @param {object} body - Request content
 * @param {string} body.boot_type - The type of boot
 * @param {object?} options axios http request options
 */
Client.prototype.RebootServer = function RebootServer(zone, server_id, body, options){
  return axios({
    method: "post",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/reboot".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Start a baremetal server
 * @description Start the server associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server to start
 * @param {object} body - Request content
 * @param {string} body.boot_type - The type of boot
 * @param {object?} options axios http request options
 */
Client.prototype.StartServer = function StartServer(zone, server_id, body, options){
  return axios({
    method: "post",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/start".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Stop a baremetal server
 * @description Stop the server associated with the given ID.
 * @param {string} zone - The zone you want to target
 * @param {string} server_id - ID of the server to stop
 * @param {object} body - Request content

 * @param {object?} options axios http request options
 */
Client.prototype.StopServer = function StopServer(zone, server_id, body, options){
  return axios({
    method: "post",
    url: "/baremetal/v1/zones/{zone}/servers/{server_id}/stop".replace('{zone}', zone).replace('{server_id}', server_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get an ACL
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} acl_id - ID of your ACL ressource
 * @param {object?} options axios http request options
 */
Client.prototype.GetAcl = function GetAcl(region, acl_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/acls/{acl_id}".replace('{region}', region).replace('{acl_id}', acl_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update an ACL
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} acl_id - ID of your ACL ressource
 * @param {object} body - Request content
 * @param {string} body.name - Name of your ACL ressource
 * @param {object} body.action - Action to undertake when an ACL filter matches
 * @param {object} body.match - The ACL match rule. At least `ip_subnet` or `http_filter` and `http_filter_value` are required
 * @param {number} body.index - Order between your Acls (ascending order, 0 is first acl executed)
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateAcl = function UpdateAcl(region, acl_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/acls/{acl_id}".replace('{region}', region).replace('{acl_id}', acl_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an ACL
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} acl_id - ID of your ACL ressource
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteAcl = function DeleteAcl(region, acl_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/acls/{acl_id}".replace('{region}', region).replace('{acl_id}', acl_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a backend in a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} backend_id - Backend ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetBackend = function GetBackend(region, backend_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/backends/{backend_id}".replace('{region}', region).replace('{backend_id}', backend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a backend in a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} backend_id - 
 * @param {object} body - Request content
 * @param {string} body.name - 
 * @param {object} body.forward_protocol - 
 * @param {number} body.forward_port - 
 * @param {object} body.forward_port_algorithm - 
 * @param {object} body.sticky_sessions - 
 * @param {string} body.sticky_sessions_cookie_name - 
 * @param {boolean} body.send_proxy_v2 - 
 * @param {number} body.timeout_server - (in milliseconds)
 * @param {number} body.timeout_connect - (in milliseconds)
 * @param {number} body.timeout_tunnel - (in milliseconds)
 * @param {object} body.on_marked_down_action - 
 * @param {object} body.proxy_protocol - 
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateBackend = function UpdateBackend(region, backend_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/backends/{backend_id}".replace('{region}', region).replace('{backend_id}', backend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a backend in a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} backend_id - ID of the backend to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteBackend = function DeleteBackend(region, backend_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/backends/{backend_id}".replace('{region}', region).replace('{backend_id}', backend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update an healthcheck for a given backend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} backend_id - Backend ID
 * @param {object} body - Request content
 * @param {number} body.port - Specify the port used to health check
 * @param {number} body.check_delay - Time between two consecutive health checks (in milliseconds)
 * @param {number} body.check_timeout - Additional check timeout, after the connection has been already established (in milliseconds)
 * @param {number} body.check_max_retries - Number of consecutive unsuccessful health checks, after wich the server will be considered dead
 * @param {object} body.mysql_config - The check requires MySQL >=3.22, for older version, please use TCP check
 * @param {object} body.ldap_config - The response is analyzed to find an LDAPv3 response message
 * @param {object} body.redis_config - The response is analyzed to find the +PONG response message
 * @param {object} body.pgsql_config - 
 * @param {object} body.tcp_config - 
 * @param {object} body.http_config - 
 * @param {object} body.https_config - 
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateHealthCheck = function UpdateHealthCheck(region, backend_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/backends/{backend_id}/healthcheck".replace('{region}', region).replace('{backend_id}', backend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Add a set of servers in a given backend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} backend_id - Backend ID
 * @param {object} body - Request content
 * @param {array} body.server_ip - Set all IPs to add on your backend
 * @param {object?} options axios http request options
 */
Client.prototype.AddBackendServers = function AddBackendServers(region, backend_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/backends/{backend_id}/servers".replace('{region}', region).replace('{backend_id}', backend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Define all servers in a given backend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} backend_id - Backend ID
 * @param {object} body - Request content
 * @param {array} body.server_ip - Set all IPs to add on your backend and remove all other
 * @param {object?} options axios http request options
 */
Client.prototype.SetBackendServers = function SetBackendServers(region, backend_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/backends/{backend_id}/servers".replace('{region}', region).replace('{backend_id}', backend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Remove a set of servers for a given backend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} backend_id - Backend ID
 * @param {object?} options axios http request options
 */
Client.prototype.RemoveBackendServers = function RemoveBackendServers(region, backend_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/backends/{backend_id}/servers".replace('{region}', region).replace('{backend_id}', backend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a TLS certificate
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} certificate_id - Certificate ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetCertificate = function GetCertificate(region, certificate_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/certificates/{certificate_id}".replace('{region}', region).replace('{certificate_id}', certificate_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a TLS certificate
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} certificate_id - Certificate ID
 * @param {object} body - Request content
 * @param {string} body.name - Certificate name
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateCertificate = function UpdateCertificate(region, certificate_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/certificates/{certificate_id}".replace('{region}', region).replace('{certificate_id}', certificate_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a TLS certificate
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} certificate_id - Certificate ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteCertificate = function DeleteCertificate(region, certificate_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/certificates/{certificate_id}".replace('{region}', region).replace('{certificate_id}', certificate_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a frontend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} frontend_id - Frontend ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetFrontend = function GetFrontend(region, frontend_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/frontends/{frontend_id}".replace('{region}', region).replace('{frontend_id}', frontend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a frontend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} frontend_id - Frontend ID
 * @param {object} body - Request content
 * @param {string} body.name - Resource name
 * @param {number} body.inbound_port - TCP port to listen on the front side
 * @param {string} body.backend_id - Backend ID
 * @param {number} body.timeout_client - Client session maximum inactivity time (in milliseconds)
 * @param {string} body.certificate_id - Certificate ID, deprecated in favor of `certificate_ids` array!
 * @param {array} body.certificate_ids - List of certificate IDs to bind on the frontend
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateFrontend = function UpdateFrontend(region, frontend_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/frontends/{frontend_id}".replace('{region}', region).replace('{frontend_id}', frontend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a frontend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} frontend_id - Frontend ID to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteFrontend = function DeleteFrontend(region, frontend_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/frontends/{frontend_id}".replace('{region}', region).replace('{frontend_id}', frontend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List ACL for a given frontend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} frontend_id - ID of your frontend
 * @param {number} page - Page number
 * @param {object?} options axios http request options
 */
Client.prototype.ListAcls = function ListAcls(region, frontend_id, page, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/frontends/{frontend_id}/acls".replace('{region}', region).replace('{frontend_id}', frontend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "page",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create an ACL for a given frontend
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} frontend_id - ID of your frontend
 * @param {object} body - Request content
 * @param {string} body.name - Name of your ACL ressource
 * @param {object} body.action - Action to undertake when an ACL filter matches
 * @param {object} body.match - The ACL match rule. You can have one of those three cases:

  - `ip_subnet` is defined
  - `http_filter` and `http_filter_value` are defined
  - `ip_subnet`, `http_filter` and `http_filter_value` are defined

 * @param {number} body.index - Order between your Acls (ascending order, 0 is first acl executed)
 * @param {object?} options axios http request options
 */
Client.prototype.CreateAcl = function CreateAcl(region, frontend_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/frontends/{frontend_id}/acls".replace('{region}', region).replace('{frontend_id}', frontend_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List IPs
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {number} page - Page number
 * @param {object?} options axios http request options
 */
Client.prototype.ListIPs = function ListIPs(region, page, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/ips".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "page",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create an IP
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.organization_id - Owner of resources
 * @param {string} body.project_id - Assign the resource to a project ID
 * @param {string} body.reverse - Reverse domain name
 * @param {object?} options axios http request options
 */
Client.prototype.CreateIp = function CreateIp(region, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/ips".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get an IP
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} ip_id - IP address ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetIp = function GetIp(region, ip_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/ips/{ip_id}".replace('{region}', region).replace('{ip_id}', ip_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update an IP
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} ip_id - IP address ID
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateIp = function UpdateIp(region, ip_id, options){
  return axios({
    method: "patch",
    url: "/lb/v1/regions/{region}/ips/{ip_id}".replace('{region}', region).replace('{ip_id}', ip_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an IP
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} ip_id - IP address ID
 * @param {object?} options axios http request options
 */
Client.prototype.ReleaseIp = function ReleaseIp(region, ip_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/ips/{ip_id}".replace('{region}', region).replace('{ip_id}', ip_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all load balancer offer type
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {number} page - Page number
 * @param {object?} options axios http request options
 */
Client.prototype.ListLbTypes = function ListLbTypes(region, page, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lb-types".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "page",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Subscribe a subscriber to a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object} body - Request content
 * @param {string} body.subscriber_id - Subscriber ID
 * @param {object?} options axios http request options
 */
Client.prototype.SubscribeToLb = function SubscribeToLb(region, lb_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lb/{lb_id}/subscribe".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Unsubscribe a subscriber from a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object?} options axios http request options
 */
Client.prototype.UnsubscribeFromLb = function UnsubscribeFromLb(region, lb_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/lb/{lb_id}/unsubscribe".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a subscriber
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} subscriber_id - Subscriber ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteSubscriber = function DeleteSubscriber(region, subscriber_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/lb/subscription/{subscriber_id}".replace('{region}', region).replace('{subscriber_id}', subscriber_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List load balancers
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListLbs = function ListLbs(region, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.organization_id - Owner of resources
 * @param {string} body.project_id - Assign the resource to a project ID
 * @param {string} body.name - Resource names
 * @param {string} body.description - Resource description
 * @param {string} body.ip_id - Just like for compute instances, when you destroy a load balancer, you can keep its highly available IP address and reuse it for another load balancer later
 * @param {array} body.tags - List of keyword
 * @param {string} body.type - Load balancer offer type
 * @param {string} body.ssl_compatibility_level - Enforces minimal SSL version (in SSL/TLS offloading context).
- `intermediate` General-purpose servers with a variety of clients, recommended for almost all systems (Supports Firefox 27, Android 4.4.2, Chrome 31, Edge, IE 11 on Windows 7, Java 8u31, OpenSSL 1.0.1, Opera 20, and Safari 9).
- `modern` Services with clients that support TLS 1.3 and don't need backward compatibility (Firefox 63, Android 10.0, Chrome 70, Edge 75, Java 11, OpenSSL 1.1.1, Opera 57, and Safari 12.1).
- `old` Compatible with a number of very old clients, and should be used only as a last resort (Firefox 1, Android 2.3, Chrome 1, Edge 12, IE8 on Windows XP, Java 6, OpenSSL 0.9.8, Opera 5, and Safari 1).

 * @param {object?} options axios http request options
 */
Client.prototype.CreateLb = function CreateLb(region, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lbs".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetLb = function GetLb(region, lb_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object} body - Request content
 * @param {string} body.name - Resource name
 * @param {string} body.description - Resource description
 * @param {array} body.tags - List of keywords
 * @param {string} body.ssl_compatibility_level - Enforces minimal SSL version (in SSL/TLS offloading context).
- `intermediate` General-purpose servers with a variety of clients, recommended for almost all systems (Supports Firefox 27, Android 4.4.2, Chrome 31, Edge, IE 11 on Windows 7, Java 8u31, OpenSSL 1.0.1, Opera 20, and Safari 9).
- `modern` Services with clients that support TLS 1.3 and don't need backward compatibility (Firefox 63, Android 10.0, Chrome 70, Edge 75, Java 11, OpenSSL 1.1.1, Opera 57, and Safari 12.1).
- `old` Compatible with a number of very old clients, and should be used only as a last resort (Firefox 1, Android 2.3, Chrome 1, Edge 12, IE8 on Windows XP, Java 6, OpenSSL 0.9.8, Opera 5, and Safari 1).

 * @param {object?} options axios http request options
 */
Client.prototype.UpdateLb = function UpdateLb(region, lb_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteLb = function DeleteLb(region, lb_id, options){
  return axios({
    method: "delete",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * undefined
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object?} options axios http request options
 */
Client.prototype.ListBackendStats = function ListBackendStats(region, lb_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/backend-stats".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List backends in a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {number} page - Page number
 * @param {object?} options axios http request options
 */
Client.prototype.ListBackends = function ListBackends(region, lb_id, page, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/backends".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "page",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a backend in a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object} body - Request content
 * @param {string} body.name - Resource name
 * @param {string} body.forward_protocol - Backend protocol. TCP or HTTP
 * @param {number} body.forward_port - User sessions will be forwarded to this port of backend servers
 * @param {string} body.forward_port_algorithm - Load balancing algorithm
 * @param {string} body.sticky_sessions - Enables cookie-based session persistence
 * @param {string} body.sticky_sessions_cookie_name - Cookie name for for sticky sessions
 * @param {object} body.health_check - See the Healthcheck object description
 * @param {array} body.server_ip - Backend server IP addresses list (IPv4 or IPv6)
 * @param {boolean} body.send_proxy_v2 - Deprecated in favor of proxy_protocol field !
 * @param {number} body.timeout_server - Maximum server connection inactivity time (in milliseconds)
 * @param {number} body.timeout_connect - Maximum initical server connection establishment time (in milliseconds)
 * @param {number} body.timeout_tunnel - Maximum tunnel inactivity time (in milliseconds)
 * @param {string} body.on_marked_down_action - Modify what occurs when a backend server is marked down
 * @param {string} body.proxy_protocol - The PROXY protocol informs the other end about the incoming connection, so that it can know the client's address or the public address it accessed to, whatever the upper layer protocol.

* `proxy_protocol_none` Disable proxy protocol.
* `proxy_protocol_v1` Version one (text format).
* `proxy_protocol_v2` Version two (binary format).
* `proxy_protocol_v2_ssl` Version two with SSL connection.
* `proxy_protocol_v2_ssl_cn` Version two with SSL connection and common name information.

 * @param {object?} options axios http request options
 */
Client.prototype.CreateBackend = function CreateBackend(region, lb_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/backends".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List all TLS certificates on a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {number} page - Page number
 * @param {string} name - Use this to search by name
 * @param {object?} options axios http request options
 */
Client.prototype.ListCertificates = function ListCertificates(region, lb_id, page, name, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/certificates".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "name",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a TLS certificate
 * @description Generate a new TLS certificate using Let's Encrypt or import your certificate.
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object} body - Request content
 * @param {string} body.name - Certificate name
 * @param {object} body.letsencrypt - Let's Encrypt type
 * @param {object} body.custom_certificate - Custom import certificate
 * @param {object?} options axios http request options
 */
Client.prototype.CreateCertificate = function CreateCertificate(region, lb_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/certificates".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List frontends in a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {number} page - Page number
 * @param {object?} options axios http request options
 */
Client.prototype.ListFrontends = function ListFrontends(region, lb_id, page, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/frontends".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "page",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a frontend in a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object} body - Request content
 * @param {string} body.name - Resource name
 * @param {number} body.inbound_port - TCP port to listen on the front side
 * @param {string} body.backend_id - Backend ID
 * @param {number} body.timeout_client - Set the maximum inactivity time on the client side (in milliseconds)
 * @param {string} body.certificate_id - Certificate ID, deprecated in favor of certificate_ids array !
 * @param {array} body.certificate_ids - List of certificate IDs to bind on the frontend
 * @param {object?} options axios http request options
 */
Client.prototype.CreateFrontend = function CreateFrontend(region, lb_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/frontends".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Migrate a load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object} body - Request content
 * @param {string} body.type - Load balancer type (check /lb-types to list all type)
 * @param {object?} options axios http request options
 */
Client.prototype.MigrateLb = function MigrateLb(region, lb_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/migrate".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * BETA - List attached private network of load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - 
 * @param {object?} options axios http request options
 */
Client.prototype.ListLbPrivateNetworks = function ListLbPrivateNetworks(region, lb_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/private-networks".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * BETA - Add load balancer on instance private network
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {string} private_network_id - Set your instance private network id
 * @param {object} body - Request content
 * @param {array} body.ip_address - Define two local ip address of your choice for each load balancer instance
 * @param {object?} options axios http request options
 */
Client.prototype.AttachPrivateNetwork = function AttachPrivateNetwork(region, lb_id, private_network_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/private-networks/{private_network_id}/attach".replace('{region}', region).replace('{lb_id}', lb_id).replace('{private_network_id}', private_network_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * BETA - Remove load balancer of private network
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} private_network_id - 
 * @param {string} lb_id - 
 * @param {object} body - Request content

 * @param {object?} options axios http request options
 */
Client.prototype.DetachPrivateNetwork = function DetachPrivateNetwork(region, private_network_id, lb_id, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/private-networks/{private_network_id}/detach".replace('{region}', region).replace('{private_network_id}', private_network_id).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get usage statistics of a given load balancer
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} lb_id - Load balancer ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetLbStats = function GetLbStats(region, lb_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/lbs/{lb_id}/stats".replace('{region}', region).replace('{lb_id}', lb_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all subscriber
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {number} page - Page number
 * @param {string} name - Use this to search by name
 * @param {object?} options axios http request options
 */
Client.prototype.ListSubscriber = function ListSubscriber(region, page, name, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/subscribers".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "name",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a subscriber, webhook or email
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Subscriber name
 * @param {object} body.email_config - Email address configuration
 * @param {object} body.webhook_config - WebHook URI configuration
 * @param {string} body.organization_id - Owner of resources
 * @param {string} body.project_id - Assign the resource to a project ID
 * @param {object?} options axios http request options
 */
Client.prototype.CreateSubscriber = function CreateSubscriber(region, body, options){
  return axios({
    method: "post",
    url: "/lb/v1/regions/{region}/subscribers".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a subscriber
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} subscriber_id - Subscriber ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetSubscriber = function GetSubscriber(region, subscriber_id, options){
  return axios({
    method: "get",
    url: "/lb/v1/regions/{region}/subscribers/{subscriber_id}".replace('{region}', region).replace('{subscriber_id}', subscriber_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a subscriber
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} subscriber_id - Assign the resource to a project IDs
 * @param {object} body - Request content
 * @param {string} body.name - Subscriber name
 * @param {object} body.email_config - Email address configuration
 * @param {object} body.webhook_config - WebHook URI configuration
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateSubscriber = function UpdateSubscriber(region, subscriber_id, body, options){
  return axios({
    method: "put",
    url: "/lb/v1/regions/{region}/subscribers/{subscriber_id}".replace('{region}', region).replace('{subscriber_id}', subscriber_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List all your images
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListImages = function ListImages(region, options){
  return axios({
    method: "get",
    url: "/registry/v1/regions/{region}/images".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a image
 * @description Get the image associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} image_id - The unique ID of the Image
 * @param {object?} options axios http request options
 */
Client.prototype.GetImage = function GetImage(region, image_id, options){
  return axios({
    method: "get",
    url: "/registry/v1/regions/{region}/images/{image_id}".replace('{region}', region).replace('{image_id}', image_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update an existing image
 * @description Update the image associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} image_id - Image ID to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateImage = function UpdateImage(region, image_id, options){
  return axios({
    method: "patch",
    url: "/registry/v1/regions/{region}/images/{image_id}".replace('{region}', region).replace('{image_id}', image_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an image
 * @description Delete the image associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} image_id - The unique ID of the Image
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteImage = function DeleteImage(region, image_id, options){
  return axios({
    method: "delete",
    url: "/registry/v1/regions/{region}/images/{image_id}".replace('{region}', region).replace('{image_id}', image_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all your tags
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} image_id - The unique ID of the image
 * @param {object?} options axios http request options
 */
Client.prototype.ListTags = function ListTags(region, image_id, options){
  return axios({
    method: "get",
    url: "/registry/v1/regions/{region}/images/{image_id}/tags".replace('{region}', region).replace('{image_id}', image_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all your namespaces
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListNamespaces = function ListNamespaces(region, options){
  return axios({
    method: "get",
    url: "/registry/v1/regions/{region}/namespaces".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a new namespace
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Define a namespace name
 * @param {string} body.description - Define a description
 * @param {string} body.organization_id - Assign the namespace owner (deprecated)
 * @param {string} body.project_id - Assign the namespace to a project ID
 * @param {boolean} body.is_public - Define the default visibility policy
 * @param {object?} options axios http request options
 */
Client.prototype.CreateNamespace = function CreateNamespace(region, body, options){
  return axios({
    method: "post",
    url: "/registry/v1/regions/{region}/namespaces".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a namespace
 * @description Get the namespace associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} namespace_id - The unique ID of the Namespace
 * @param {object?} options axios http request options
 */
Client.prototype.GetNamespace = function GetNamespace(region, namespace_id, options){
  return axios({
    method: "get",
    url: "/registry/v1/regions/{region}/namespaces/{namespace_id}".replace('{region}', region).replace('{namespace_id}', namespace_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update an existing namespace
 * @description Update the namespace associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} namespace_id - Namespace ID to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateNamespace = function UpdateNamespace(region, namespace_id, options){
  return axios({
    method: "patch",
    url: "/registry/v1/regions/{region}/namespaces/{namespace_id}".replace('{region}', region).replace('{namespace_id}', namespace_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an existing namespace
 * @description Delete the namespace associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} namespace_id - The unique ID of the Namespace
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteNamespace = function DeleteNamespace(region, namespace_id, options){
  return axios({
    method: "delete",
    url: "/registry/v1/regions/{region}/namespaces/{namespace_id}".replace('{region}', region).replace('{namespace_id}', namespace_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a tag
 * @description Get the tag associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} tag_id - The unique ID of the Tag
 * @param {object?} options axios http request options
 */
Client.prototype.GetTag = function GetTag(region, tag_id, options){
  return axios({
    method: "get",
    url: "/registry/v1/regions/{region}/tags/{tag_id}".replace('{region}', region).replace('{tag_id}', tag_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a tag
 * @description Delete the tag associated with the given id.
 * @param {string} region - The region you want to target
 * @param {string} tag_id - The unique ID of the tag
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteTag = function DeleteTag(region, tag_id, options){
  return axios({
    method: "delete",
    url: "/registry/v1/regions/{region}/tags/{tag_id}".replace('{region}', region).replace('{tag_id}', tag_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * undefined
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.GetServiceInfo = function GetServiceInfo(region, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List database backups
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListDatabaseBackups = function ListDatabaseBackups(region, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/backups".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a database backup
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.instance_id - UUID of the instance
 * @param {string} body.database_name - Name of the database you want to make a backup of
 * @param {string} body.name - Name of the backup
 * @param {string} body.expires_at - Expiration date (Format ISO 8601)
 * @param {object?} options axios http request options
 */
Client.prototype.CreateDatabaseBackup = function CreateDatabaseBackup(region, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/backups".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a database backup
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} database_backup_id - UUID of the database backup
 * @param {object?} options axios http request options
 */
Client.prototype.GetDatabaseBackup = function GetDatabaseBackup(region, database_backup_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/backups/{database_backup_id}".replace('{region}', region).replace('{database_backup_id}', database_backup_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a database backup
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} database_backup_id - UUID of the database backup to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateDatabaseBackup = function UpdateDatabaseBackup(region, database_backup_id, options){
  return axios({
    method: "patch",
    url: "/rdb/v1/regions/{region}/backups/{database_backup_id}".replace('{region}', region).replace('{database_backup_id}', database_backup_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a database backup
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} database_backup_id - UUID of the database backup to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteDatabaseBackup = function DeleteDatabaseBackup(region, database_backup_id, options){
  return axios({
    method: "delete",
    url: "/rdb/v1/regions/{region}/backups/{database_backup_id}".replace('{region}', region).replace('{database_backup_id}', database_backup_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Export a database backup
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} database_backup_id - UUID of the database backup you want to export
 * @param {object} body - Request content

 * @param {object?} options axios http request options
 */
Client.prototype.ExportDatabaseBackup = function ExportDatabaseBackup(region, database_backup_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/backups/{database_backup_id}/export".replace('{region}', region).replace('{database_backup_id}', database_backup_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Restore a database backup
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} database_backup_id - Backup of a logical database
 * @param {object} body - Request content
 * @param {string} body.database_name - Defines the destination database in order to restore into a specified database, the default destination is set to the origin database of the backup
 * @param {string} body.instance_id - Defines the rdb instance where the backup has to be restored
 * @param {object?} options axios http request options
 */
Client.prototype.RestoreDatabaseBackup = function RestoreDatabaseBackup(region, database_backup_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/backups/{database_backup_id}/restore".replace('{region}', region).replace('{database_backup_id}', database_backup_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List available database engines
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListDatabaseEngines = function ListDatabaseEngines(region, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/database-engines".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List instances
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListInstances = function ListInstances(region, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create an instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.organization_id - The organization ID on which to create the instance
 * @param {string} body.name - Name of the instance
 * @param {string} body.engine - Database engine of the database (PostgreSQL, MySQL, ...)
 * @param {string} body.user_name - Name of the user created when the instance is created
 * @param {string} body.password - Password of the user
 * @param {string} body.node_type - Type of node to use for the instance
 * @param {boolean} body.is_ha_cluster - Whether or not High-Availability is enabled
 * @param {boolean} body.disable_backup - Whether or not backups are disabled
 * @param {array} body.tags - Tags to apply to the instance
 * @param {array} body.init_settings - List of engine settings to be set at database initialisation
 * @param {object?} options axios http request options
 */
Client.prototype.CreateInstance = function CreateInstance(region, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get an instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance
 * @param {object?} options axios http request options
 */
Client.prototype.GetInstance = function GetInstance(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update an instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateInstance = function UpdateInstance(region, instance_id, options){
  return axios({
    method: "patch",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteInstance = function DeleteInstance(region, instance_id, options){
  return axios({
    method: "delete",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List ACL rules of a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance
 * @param {object?} options axios http request options
 */
Client.prototype.ListInstanceACLRules = function ListInstanceACLRules(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/acls".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Add an ACL instance to a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want to add acl rules to
 * @param {object} body - Request content
 * @param {array} body.rules - ACLs rules to add to the instance
 * @param {object?} options axios http request options
 */
Client.prototype.AddInstanceACLRules = function AddInstanceACLRules(region, instance_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/acls".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Set ACL rules for a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance where the ACL rules has to be set
 * @param {object} body - Request content
 * @param {array} body.rules - ACL rules to define for the instance
 * @param {object?} options axios http request options
 */
Client.prototype.SetInstanceACLRules = function SetInstanceACLRules(region, instance_id, body, options){
  return axios({
    method: "put",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/acls".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete ACL rules of a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want to delete an ACL rules from
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteInstanceACLRules = function DeleteInstanceACLRules(region, instance_id, options){
  return axios({
    method: "delete",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/acls".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get the TLS certificate of an instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance
 * @param {object?} options axios http request options
 */
Client.prototype.GetInstanceCertificate = function GetInstanceCertificate(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/certificate".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Clone an instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want to clone
 * @param {object} body - Request content
 * @param {string} body.name - Name of the clone instance
 * @param {string} body.node_type - Node type of the clone
 * @param {object?} options axios http request options
 */
Client.prototype.CloneInstance = function CloneInstance(region, instance_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/clone".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List all database in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance to list database of
 * @param {object?} options axios http request options
 */
Client.prototype.ListDatabases = function ListDatabases(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/databases".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a database in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance where to create the database
 * @param {object} body - Request content
 * @param {string} body.name - Name of the database
 * @param {object?} options axios http request options
 */
Client.prototype.CreateDatabase = function CreateDatabase(region, instance_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/databases".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a database in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance where to delete the database
 * @param {string} name - Name of the database to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteDatabase = function DeleteDatabase(region, instance_id, name, options){
  return axios({
    method: "delete",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/databases/{name}".replace('{region}', region).replace('{instance_id}', instance_id).replace('{name}', name),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List available logs of a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want logs of
 * @param {object?} options axios http request options
 */
Client.prototype.ListInstanceLogs = function ListInstanceLogs(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/logs".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get instance metrics
 * @description Get database instance metrics.
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance
 * @param {object?} options axios http request options
 */
Client.prototype.GetInstanceMetrics = function GetInstanceMetrics(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/metrics".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Prepare logs of a given instance
 * @description Prepare your instance logs. Logs will be grouped on a minimum interval of a day.
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want logs of
 * @param {object} body - Request content
 * @param {string} body.start_date - Start datetime of your log. Format: `{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z`
 * @param {string} body.end_date - End datetime of your log. Format: `{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z`
 * @param {object?} options axios http request options
 */
Client.prototype.PrepareInstanceLogs = function PrepareInstanceLogs(region, instance_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/prepare-logs".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List privileges of a given user in a given database in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance
 * @param {object?} options axios http request options
 */
Client.prototype.ListPrivileges = function ListPrivileges(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/privileges".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Set privileges of a given user in a given database in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance
 * @param {object} body - Request content
 * @param {string} body.database_name - Name of the database
 * @param {string} body.user_name - Name of the user
 * @param {string} body.permission - Permission to set (Read, Read/Write, All, Custom)
 * @param {object?} options axios http request options
 */
Client.prototype.SetPrivilege = function SetPrivilege(region, instance_id, body, options){
  return axios({
    method: "put",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/privileges".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Add an instance setting
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want to add settings to
 * @param {object} body - Request content
 * @param {array} body.settings - Settings to add on the instance
 * @param {object?} options axios http request options
 */
Client.prototype.AddInstanceSettings = function AddInstanceSettings(region, instance_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/settings".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Set a given instance setting
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance where the settings has to be set
 * @param {object} body - Request content
 * @param {array} body.settings - Settings to define for the instance
 * @param {object?} options axios http request options
 */
Client.prototype.SetInstanceSettings = function SetInstanceSettings(region, instance_id, body, options){
  return axios({
    method: "put",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/settings".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an instance setting
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance to delete settings from
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteInstanceSettings = function DeleteInstanceSettings(region, instance_id, options){
  return axios({
    method: "delete",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/settings".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Upgrade an instance to an higher instance type
 * @description Upgrade your current `node_type` or enable high availability on your standalone database instance.
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want to upgrade
 * @param {object} body - Request content
 * @param {string} body.node_type - Node type of the instance you want to upgrade to
 * @param {boolean} body.enable_ha - Set to true to enable high availability on your instance
 * @param {object?} options axios http request options
 */
Client.prototype.UpgradeInstance = function UpgradeInstance(region, instance_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/upgrade".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List users of a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance
 * @param {object?} options axios http request options
 */
Client.prototype.ListUsers = function ListUsers(region, instance_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/users".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create an user in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance you want to create a user in
 * @param {object} body - Request content
 * @param {string} body.name - Name of the user you want to create
 * @param {string} body.password - Password of the user you want to create
 * @param {boolean} body.is_admin - Whether the user you want to create will have administrative privileges
 * @param {object?} options axios http request options
 */
Client.prototype.CreateUser = function CreateUser(region, instance_id, body, options){
  return axios({
    method: "post",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/users".replace('{region}', region).replace('{instance_id}', instance_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Update an user in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance the user belongs to
 * @param {string} name - Name of the database user
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateUser = function UpdateUser(region, instance_id, name, options){
  return axios({
    method: "patch",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/users/{name}".replace('{region}', region).replace('{instance_id}', instance_id).replace('{name}', name),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an user in a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_id - UUID of the instance to delete a user from
 * @param {string} name - Name of the user
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteUser = function DeleteUser(region, instance_id, name, options){
  return axios({
    method: "delete",
    url: "/rdb/v1/regions/{region}/instances/{instance_id}/users/{name}".replace('{region}', region).replace('{instance_id}', instance_id).replace('{name}', name),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get specific logs of a given instance
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} instance_log_id - UUID of the instance_log you want
 * @param {object?} options axios http request options
 */
Client.prototype.GetInstanceLog = function GetInstanceLog(region, instance_log_id, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/logs/{instance_log_id}".replace('{region}', region).replace('{instance_log_id}', instance_log_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List available node types
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListNodeTypes = function ListNodeTypes(region, options){
  return axios({
    method: "get",
    url: "/rdb/v1/regions/{region}/node-types".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all the clusters
 * @description This method allows to list all the existing Kubernetes clusters in an account.
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListClusters = function ListClusters(region, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/clusters".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a new cluster
 * @description This method allows to create a new Kubernetes cluster on an account.
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.organization_id - The organization ID where the cluster will be created
 * @param {string} body.project_id - The project ID where the cluster will be created
 * @param {string} body.name - The name of the cluster
 * @param {string} body.description - The description of the cluster
 * @param {array} body.tags - The tags associated with the cluster
 * @param {string} body.version - The Kubernetes version of the cluster
 * @param {string} body.cni - The Container Network Interface (CNI) plugin that will run in the cluster
 * @param {boolean} body.enable_dashboard - The enablement of the Kubernetes Dashboard in the cluster
 * @param {string} body.ingress - The Ingress Controller that will run in the cluster
 * @param {array} body.pools - The pools to be created along with the cluster
 * @param {object} body.autoscaler_config - This field allows to specify some configuration for the autoscaler, which is an implementation of the [cluster-autoscaler](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/).
 * @param {object} body.auto_upgrade - This configuratiom enables to set a speicific 2-hour time window in which the cluster can be automatically updated to the latest patch version in the current minor one.
 * @param {array} body.feature_gates - List of feature gates to enable
 * @param {array} body.admission_plugins - List of admission plugins to enable
 * @param {object?} options axios http request options
 */
Client.prototype.CreateCluster = function CreateCluster(region, body, options){
  return axios({
    method: "post",
    url: "/k8s/v1/regions/{region}/clusters".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a cluster
 * @description This method allows to get details about a specific Kubernetes cluster.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the requested cluster
 * @param {object?} options axios http request options
 */
Client.prototype.GetCluster = function GetCluster(region, cluster_id, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a cluster
 * @description This method allows to update a specific Kubernetes cluster. Note that this method is not made to upgrade a Kubernetes cluster.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateCluster = function UpdateCluster(region, cluster_id, options){
  return axios({
    method: "patch",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a cluster
 * @description This method allows to delete a specific cluster and all its associated pools and nodes. Note that this method will not delete any Load Balancers or Block Volumes that are associated with the cluster.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteCluster = function DeleteCluster(region, cluster_id, options){
  return axios({
    method: "delete",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List available versions for a cluster
 * @description This method allows to list the versions that a specific Kubernetes cluster is allowed to upgrade to. Note that it will be every patch version greater than the actual one as well a one minor version ahead of the actual one. Upgrades skipping a minor version will not work.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster which the available Kuberentes versions will be listed from
 * @param {object?} options axios http request options
 */
Client.prototype.ListClusterAvailableVersions = function ListClusterAvailableVersions(region, cluster_id, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}/available-versions".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Download the kubeconfig for a cluster
 * @description This method allows to download the Kubernetes cluster config file (AKA kubeconfig) for a specific cluster in order to use it with, for instance, `kubectl`. Tips: add `?dl=1` at the end of the URL to directly get the base64 decoded kubeconfig. If not, the kubeconfig will be base64 encoded.

 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster to download the kubeconfig from
 * @param {object?} options axios http request options
 */
Client.prototype.GetClusterKubeConfig = function GetClusterKubeConfig(region, cluster_id, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}/kubeconfig".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all the nodes in a cluster
 * @description This method allows to list all the existing nodes for a specific Kubernetes cluster.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The cluster ID from which the nodes will be listed from
 * @param {object?} options axios http request options
 */
Client.prototype.ListNodes = function ListNodes(region, cluster_id, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}/nodes".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List all the pools in a cluster
 * @description This method allows to list all the existing pools for a specific Kubernetes cluster.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster from which the pools will be listed from
 * @param {object?} options axios http request options
 */
Client.prototype.ListPools = function ListPools(region, cluster_id, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}/pools".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a new pool in a cluster
 * @description This method allows to create a new pool in a specific Kubernetes cluster.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster in which the pool will be created
 * @param {object} body - Request content
 * @param {string} body.name - The name of the pool
 * @param {string} body.node_type - The node type is the type of Scaleway Instance wanted for the pool
 * @param {string} body.placement_group_id - The placement group ID in which all the nodes of the pool will be created
 * @param {boolean} body.autoscaling - The enablement of the autoscaling feature for the pool
 * @param {number} body.size - The size (number of nodes) of the pool
 * @param {number} body.min_size - The minimun size of the pool. Note that this fields will be used only when autoscaling is enabled.
 * @param {number} body.max_size - The maximum size of the pool. Note that this fields will be used only when autoscaling is enabled.
 * @param {string} body.container_runtime - The customization of the container runtime is available for each pool. Note that `docker` is the only supporter runtime at the moment. Others are to be considered experimental.

 * @param {boolean} body.autohealing - The enablement of the autohealing feature for the pool
 * @param {array} body.tags - The tags associated with the pool
 * @param {object?} options axios http request options
 */
Client.prototype.CreatePool = function CreatePool(region, cluster_id, body, options){
  return axios({
    method: "post",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}/pools".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Reset the admin token of a cluster
 * @description This method allows to reset the admin token for a specific Kubernetes cluster. This will invalidate the old admin token (which will not be usable after) and create a new one. Note that the redownload of the kubeconfig will be necessary to keep interacting with the cluster (if the old admin token was used).
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster of which the admin token will be renewed
 * @param {object} body - Request content

 * @param {object?} options axios http request options
 */
Client.prototype.ResetClusterAdminToken = function ResetClusterAdminToken(region, cluster_id, body, options){
  return axios({
    method: "post",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}/reset-admin-token".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Upgrade a cluster
 * @description This method allows to upgrade a specific Kubernetes cluster and/or its associated pools to a specific and supported Kubernetes version.
 * @param {string} region - The region you want to target
 * @param {string} cluster_id - The ID of the cluster to upgrade
 * @param {object} body - Request content
 * @param {string} body.version - The new Kubernetes version of the cluster. Note that the version shoud either be a higher patch version of the same minor version or the direct minor version after the current one.
 * @param {boolean} body.upgrade_pools - This field makes the upgrade upgrades the pool once the Kubernetes master in upgrade.
 * @param {object?} options axios http request options
 */
Client.prototype.UpgradeCluster = function UpgradeCluster(region, cluster_id, body, options){
  return axios({
    method: "post",
    url: "/k8s/v1/regions/{region}/clusters/{cluster_id}/upgrade".replace('{region}', region).replace('{cluster_id}', cluster_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a node in a cluster
 * @description This method allows to get details about a specific Kubernetes node.
 * @param {string} region - The region you want to target
 * @param {string} node_id - The ID of the requested node
 * @param {object?} options axios http request options
 */
Client.prototype.GetNode = function GetNode(region, node_id, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/nodes/{node_id}".replace('{region}', region).replace('{node_id}', node_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Reboot a node in a cluster
 * @description This method allows to reboot a specific node. This node will frist be cordoned, meaning that scheduling will be disabled. Then the existing pods on the node will be drained and reschedule onto another schedulable node. Note that when there is not enough space to reschedule all the pods (in a one node cluster for instance), you may experience some disruption of your applications.
 * @param {string} region - The region you want to target
 * @param {string} node_id - The ID of the node to reboot
 * @param {object} body - Request content

 * @param {object?} options axios http request options
 */
Client.prototype.RebootNode = function RebootNode(region, node_id, body, options){
  return axios({
    method: "post",
    url: "/k8s/v1/regions/{region}/nodes/{node_id}/reboot".replace('{region}', region).replace('{node_id}', node_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Replace a node in a cluster
 * @description This method allows to replace a specific node. The node will be set cordoned, meaning that scheduling will be disabled. Then the existing pods on the node will be drained and reschedule onto another schedulable node. Then the node will be deleted, and a new one will be created after the deletion. Note that when there is not enough space to reschedule all the pods (in a one node cluster for instance), you may experience some disruption of your applications.
 * @param {string} region - The region you want to target
 * @param {string} node_id - The ID of the node to replace
 * @param {object} body - Request content

 * @param {object?} options axios http request options
 */
Client.prototype.ReplaceNode = function ReplaceNode(region, node_id, body, options){
  return axios({
    method: "post",
    url: "/k8s/v1/regions/{region}/nodes/{node_id}/replace".replace('{region}', region).replace('{node_id}', node_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a pool in a cluster
 * @description This method allows to get details about a specific pool.
 * @param {string} region - The region you want to target
 * @param {string} pool_id - The ID of the requested pool
 * @param {object?} options axios http request options
 */
Client.prototype.GetPool = function GetPool(region, pool_id, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/pools/{pool_id}".replace('{region}', region).replace('{pool_id}', pool_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a pool in a cluster
 * @description This method allows to update some attributes of a specific pool such as the size, the autoscaling enablement, the tags, ...
 * @param {string} region - The region you want to target
 * @param {string} pool_id - The ID of the pool to update
 * @param {object?} options axios http request options
 */
Client.prototype.UpdatePool = function UpdatePool(region, pool_id, options){
  return axios({
    method: "patch",
    url: "/k8s/v1/regions/{region}/pools/{pool_id}".replace('{region}', region).replace('{pool_id}', pool_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a pool in a cluster
 * @description This method allows to delete a specific pool from a cluster, deleting all the nodes associated with it.
 * @param {string} region - The region you want to target
 * @param {string} pool_id - The ID of the pool to delete
 * @param {object?} options axios http request options
 */
Client.prototype.DeletePool = function DeletePool(region, pool_id, options){
  return axios({
    method: "delete",
    url: "/k8s/v1/regions/{region}/pools/{pool_id}".replace('{region}', region).replace('{pool_id}', pool_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Upgrade a pool in a cluster
 * @description This method allows to upgrade the Kubernetes version of a specific pool. Note that this will work when the targeted version is the same than the version of the cluster.
 * @param {string} region - The region you want to target
 * @param {string} pool_id - The ID of the pool to upgrade
 * @param {object} body - Request content
 * @param {string} body.version - The new Kubernetes version for the pool
 * @param {object?} options axios http request options
 */
Client.prototype.UpgradePool = function UpgradePool(region, pool_id, body, options){
  return axios({
    method: "post",
    url: "/k8s/v1/regions/{region}/pools/{pool_id}/upgrade".replace('{region}', region).replace('{pool_id}', pool_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * List all available versions
 * @description This method allows to list all available versions for the creation of a new Kubernetes cluster.
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListVersions = function ListVersions(region, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/versions".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get details about a specific version
 * @description This method allows to get a specific Kubernetes version and the details about the version.
 * @param {string} region - The region you want to target
 * @param {string} version_name - The requested version name
 * @param {object?} options axios http request options
 */
Client.prototype.GetVersion = function GetVersion(region, version_name, options){
  return axios({
    method: "get",
    url: "/k8s/v1/regions/{region}/versions/{version_name}".replace('{region}', region).replace('{version_name}', version_name),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List devices
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListDevices = function ListDevices(region, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/devices".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Add a device
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Device name
 * @param {string} body.hub_id - ID of the device's hub
 * @param {boolean} body.allow_insecure - Allow plain and server-authenticated SSL connections in addition to mutually-authenticated ones
 * @param {object} body.message_filters - Filter-sets to authorize or deny the device to publish/subscribe to specific topics
 * @param {object?} options axios http request options
 */
Client.prototype.CreateDevice = function CreateDevice(region, body, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/devices".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a device
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} device_id - Device ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetDevice = function GetDevice(region, device_id, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/devices/{device_id}".replace('{region}', region).replace('{device_id}', device_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a device
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} device_id - Device ID
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateDevice = function UpdateDevice(region, device_id, options){
  return axios({
    method: "patch",
    url: "/iot/v1beta1/regions/{region}/devices/{device_id}".replace('{region}', region).replace('{device_id}', device_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Remove a device
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} device_id - Device ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteDevice = function DeleteDevice(region, device_id, options){
  return axios({
    method: "delete",
    url: "/iot/v1beta1/regions/{region}/devices/{device_id}".replace('{region}', region).replace('{device_id}', device_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Disable a device
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} device_id - Device ID
 * @param {object?} options axios http request options
 */
Client.prototype.DisableDevice = function DisableDevice(region, device_id, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/devices/{device_id}/disable".replace('{region}', region).replace('{device_id}', device_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Enable a device
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} device_id - Device ID
 * @param {object?} options axios http request options
 */
Client.prototype.EnableDevice = function EnableDevice(region, device_id, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/devices/{device_id}/enable".replace('{region}', region).replace('{device_id}', device_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a device's metrics
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} device_id - Device ID
 * @param {string} period - Period over which the metrics span
 * @param {object?} options axios http request options
 */
Client.prototype.GetDeviceMetrics = function GetDeviceMetrics(region, device_id, period, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/devices/{device_id}/metrics".replace('{region}', region).replace('{device_id}', device_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "period",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List hubs
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListHubs = function ListHubs(region, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/hubs".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a hub
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Hub name (up to 255 characters)
 * @param {string} body.organization_id - Organization owning the resource
 * @param {string} body.product_plan - Hub feature set
 * @param {boolean} body.disable_events - Disable Hub events (default false)
 * @param {string} body.events_topic_prefix - Hub events topic prefix (default '$SCW/events')
 * @param {object?} options axios http request options
 */
Client.prototype.CreateHub = function CreateHub(region, body, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/hubs".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a hub
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} hub_id - Hub ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetHub = function GetHub(region, hub_id, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/hubs/{hub_id}".replace('{region}', region).replace('{hub_id}', hub_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Update a hub
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} hub_id - Hub ID
 * @param {object?} options axios http request options
 */
Client.prototype.UpdateHub = function UpdateHub(region, hub_id, options){
  return axios({
    method: "patch",
    url: "/iot/v1beta1/regions/{region}/hubs/{hub_id}".replace('{region}', region).replace('{hub_id}', hub_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a hub
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} hub_id - Hub ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteHub = function DeleteHub(region, hub_id, options){
  return axios({
    method: "delete",
    url: "/iot/v1beta1/regions/{region}/hubs/{hub_id}".replace('{region}', region).replace('{hub_id}', hub_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Disable a hub
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} hub_id - Hub ID
 * @param {object?} options axios http request options
 */
Client.prototype.DisableHub = function DisableHub(region, hub_id, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/hubs/{hub_id}/disable".replace('{region}', region).replace('{hub_id}', hub_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Enable a hub
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} hub_id - Hub ID
 * @param {object?} options axios http request options
 */
Client.prototype.EnableHub = function EnableHub(region, hub_id, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/hubs/{hub_id}/enable".replace('{region}', region).replace('{hub_id}', hub_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a hub's metrics
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} hub_id - Hub ID
 * @param {string} period - Period over which the metrics span
 * @param {object?} options axios http request options
 */
Client.prototype.GetHubMetrics = function GetHubMetrics(region, hub_id, period, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/hubs/{hub_id}/metrics".replace('{region}', region).replace('{hub_id}', hub_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: "period",
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List the Networks
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListNetworks = function ListNetworks(region, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/networks".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a new Network
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Network name
 * @param {string} body.organization_id - Will always be assigned to the organization owning the IoT hub.
 * @param {string} body.type - Type of network to connect with
 * @param {string} body.hub_id - Hub ID to connect the Network to
 * @param {string} body.topic_prefix - Topic prefix for the Network
 * @param {object?} options axios http request options
 */
Client.prototype.CreateNetwork = function CreateNetwork(region, body, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/networks".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Retrieve a specific Network
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} network_id - Network ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetNetwork = function GetNetwork(region, network_id, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/networks/{network_id}".replace('{region}', region).replace('{network_id}', network_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a Network
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} network_id - Network ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteNetwork = function DeleteNetwork(region, network_id, options){
  return axios({
    method: "delete",
    url: "/iot/v1beta1/regions/{region}/networks/{network_id}".replace('{region}', region).replace('{network_id}', network_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * List routes
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {object?} options axios http request options
 */
Client.prototype.ListRoutes = function ListRoutes(region, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/routes".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a Database route
 * @description Create a route that will record subscribed MQTT messages into your database.
<b>You need to manage the database by yourself</b>.

 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Name of the route
 * @param {string} body.hub_id - ID of the route's hub
 * @param {string} body.topic - Topic the route subscribes to (wildcards allowed). It must be a valid MQTT topic and up to 65535 characters
 * @param {string} body.query - SQL query to be executed ($TOPIC and $PAYLOAD variables are available, see documentation)
 * @param {object} body.database - Database settings
 * @param {object?} options axios http request options
 */
Client.prototype.CreateDatabaseRoute = function CreateDatabaseRoute(region, body, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/routes/database".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a Database route
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} route_id - Route ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetDatabaseRoute = function GetDatabaseRoute(region, route_id, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/routes/database/{route_id}".replace('{region}', region).replace('{route_id}', route_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a Database route
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} route_id - Route ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteDatabaseRoute = function DeleteDatabaseRoute(region, route_id, options){
  return axios({
    method: "delete",
    url: "/iot/v1beta1/regions/{region}/routes/database/{route_id}".replace('{region}', region).replace('{route_id}', route_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create a Rest route
 * @description Create a route that will call a REST API on received subscribed MQTT messages.

 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Name of the route
 * @param {string} body.hub_id - ID of the route's hub
 * @param {string} body.topic - Topic the route subscribes to. It must be a valid MQTT topic and up to 65535 characters
 * @param {string} body.verb - HTTP Verb used to call REST URI
 * @param {string} body.uri - URI of the REST endpoint
 * @param {object} body.headers - HTTP call extra headers
 * @param {object?} options axios http request options
 */
Client.prototype.CreateRestRoute = function CreateRestRoute(region, body, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/routes/rest".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get a Rest route
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} route_id - Route ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetRestRoute = function GetRestRoute(region, route_id, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/routes/rest/{route_id}".replace('{region}', region).replace('{route_id}', route_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete a Rest route
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} route_id - Route ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteRestRoute = function DeleteRestRoute(region, route_id, options){
  return axios({
    method: "delete",
    url: "/iot/v1beta1/regions/{region}/routes/rest/{route_id}".replace('{region}', region).replace('{route_id}', route_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Create an S3 route
 * @description Create a route that will put subscribed MQTT messages into an S3 bucket.
You need to create the bucket yourself and grant us write access:
```bash
> s3cmd setacl s3://<my-bucket> --acl-grant=write:555c69c3-87d0-4bf8-80f1-99a2f757d031:555c69c3-87d0-4bf8-80f1-99a2f757d031
```

 * @param {string} region - The region you want to target
 * @param {object} body - Request content
 * @param {string} body.name - Name of the route
 * @param {string} body.hub_id - ID of the route's hub
 * @param {string} body.topic - Topic the route subscribes to. It must be a valid MQTT topic and up to 65535 characters
 * @param {string} body.bucket_region - Region of the S3 route's destination bucket (eg 'fr-par')
 * @param {string} body.bucket_name - Name of the S3 route's destination bucket
 * @param {string} body.object_prefix - Optional string to prefix object names with
 * @param {string} body.strategy - How the S3 route's objects will be created: one per topic or one per message
 * @param {object?} options axios http request options
 */
Client.prototype.CreateS3Route = function CreateS3Route(region, body, options){
  return axios({
    method: "post",
    url: "/iot/v1beta1/regions/{region}/routes/s3".replace('{region}', region),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: body,
    responseType: 'json',
    ...options
  });      
}

/**
 * Get an S3 route
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} route_id - Route ID
 * @param {object?} options axios http request options
 */
Client.prototype.GetS3Route = function GetS3Route(region, route_id, options){
  return axios({
    method: "get",
    url: "/iot/v1beta1/regions/{region}/routes/s3/{route_id}".replace('{region}', region).replace('{route_id}', route_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}

/**
 * Delete an S3 route
 * @description undefined
 * @param {string} region - The region you want to target
 * @param {string} route_id - Route ID
 * @param {object?} options axios http request options
 */
Client.prototype.DeleteS3Route = function DeleteS3Route(region, route_id, options){
  return axios({
    method: "delete",
    url: "/iot/v1beta1/regions/{region}/routes/s3/{route_id}".replace('{region}', region).replace('{route_id}', route_id),
    baseURL: this.base_url,
    headers: { 'User-Agent': 'node-scaleway-api-client/1.1.0', 'X-Auth-Token': this.auth_token },
    params: {},
    data: {},
    responseType: 'json',
    ...options
  });      
}
module.exports = Client;