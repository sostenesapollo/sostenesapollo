const log = require('@pps/vortex-common/log');
const {createTenantApiClient} = require('@pps/tenant-api-client');
const secrets = require('@pps/secrets');
const orchestrate = require('@pps/orchestration');
const isString = require('lodash/isString');

(async () => {
    let apiClient = null;
    try {
        const token = await secrets.read('tenant-api-token');
        const virtualEnv = process.env.EOS_VIRTUAL_ENV || process.env.NODE_ENV;
        const claim = isString(process.env.EOS_CLAIM) ? process.env.EOS_CLAIM.toLowerCase() === 'true' : false;
        apiClient = createTenantApiClient(token, virtualEnv);
        await apiClient.open();
        await orchestrate('definitions', apiClient, claim);
        log.info('Complete');
    } catch (err) {
        log.error({err}, err.message);
        process.exitCode = 1;
    } finally {
        if (apiClient) apiClient.close();
    }
})();
