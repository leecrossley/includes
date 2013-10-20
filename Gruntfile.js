module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all: [
                "*.js",
                "!includes.min.js"
            ]
        },
        watch: {
            files: [
                "*.js",
                "!includes.min.js"
            ],
            tasks: ["test"]
        },
        jasmine: {
            src: "includes.js",
            options: {
                specs: "spec.js"
            }
        },
        uglify: {
            my_target: {
                files: {
                    "includes.min.js": [
                        "includes.js"
                    ]
                }
            },
            options: {
                banner: "/*!\n    " +
                        "<%= pkg.name %> (v<%= pkg.version %>) <%= grunt.template.today('dd-mm-yyyy') %>\n    " +
                        "(c) <%= pkg.author %>\n" +
                        "*/\n"
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.registerTask("test", ["jshint", "uglify", "jasmine"]);
};