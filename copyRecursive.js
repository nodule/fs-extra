module.exports = {
  name: "copyRecursive",
  ns: "fs",
  title: "Recursive File Copy",
  description: "Recursively Copies a file",
  phrases: {
    active: "Copying files recursively from {{input.from}} to {{input.to}}"
  },
  ports: {
    input: {
      from: {
        title: "From Path",
        type: "string",
        required: true
      },
      to: {
        title: "To Path",
        type: "string",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "fs.extra": "##fs.extra##"
    }
  },
  fn: function copyRecursive(input, output, state, done, cb, on, fs_extra) {
    var r = function() {
      fs_extra.copyRecursive(input.from, input.to, function copyRecursiveCallback(error) {
        cb({
          error: error
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}