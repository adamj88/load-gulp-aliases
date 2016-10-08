module.exports = function (gulp, aliases) {
    const _ = require('lodash');
    const runSequence = require('run-sequence');

    _.each(aliases, (sequence, name) => {
        let tasks = {};
        let deps = [];

        if(_.isArray(sequence)) {
            tasks = sequence;
        }

        if(_.isObject(sequence)) {
            if(sequence.tasks) tasks = sequence.tasks;
            if(sequence.deps) deps = sequence.deps;
        }

        gulp.task(name, sequence, (cb) => {
            tasks.push(cb);
            runSequence.apply(null, tasks);
        });
    });
}
