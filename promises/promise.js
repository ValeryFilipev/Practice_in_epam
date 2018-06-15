'use strict';

let urls = ['guest.json', 'admin.json'];

let chain = Promise.resolve();

let results = [];

urls.forEach(function(url) {
    chain = chain
        .then(() => httpGet(url))
        .then((result) => {
            results.push(result);
        });
});

chain.then(() => {
    alert(results);
});
//there's some promises for consistent-download and processing(chain)