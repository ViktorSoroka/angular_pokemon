import angular from 'angular';

/**
 * @ngdoc service
 * @name osmRequests.RequestsFct
 *
 * @description Model for requests. Returns Request model
 */
export default /*@ngInject*/$injector => { //eslint-disable-line max-statements
  const $resource = $injector.get('$resource');

  /**
   * @ngdoc service
   * @name osmRequests.Request
   * @class
   * @extends $resource
   *
   * @description Model for requests. Returned by RequestsFct
   */
  const Request = $resource('{api}/requests/:id', {
    id: '@id'
  }, {

    /**
     * @ngdoc method
     * @methodOf osmRequests.Request
     * @name osmRequests.Request#get
     * @restMethod GET
     *
     * @param {string} id
     *
     * @returns {$resource}
     *
     * @description returns request DTO.
     */
    get: {
      method: 'GET'
    }

  });

  return Request;
};
