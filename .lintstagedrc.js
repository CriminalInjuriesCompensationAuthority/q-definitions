/*! m0-start */
const config = {
    '*.js': ['eslint --fix --color', 'git add'],
    '*.json': ['prettier --write', 'git add']
};
/*! m0-end */

/*! m0-start */
module.exports = config;
/*! m0-end */

