module.exports = {
  name: "move",
  ns: "fs",
  title: "Move File",
  description: "Moves a file",
  phrases: {
    active: "Moving file from {{input.from}} to {{input.to}}"
  },
  ports: {
    input: {
      from: {
        title: "From Filename",
        type: "string",
        required: true
      },
      to: {
        title: "To Filename",
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
  fn: function move(input, $, output, state, done, cb, on, fs_extra) {
    var r = function() {
      fs_extra.move($.from, $.to, function moveCallback(error) {
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