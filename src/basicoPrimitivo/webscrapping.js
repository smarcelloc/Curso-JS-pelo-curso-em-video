// https://www.luiztools.com.br/post/webscrapping-com-node-js/

const request = require("request-promise");
const cheerio = require("cheerio"); // Utilizar em formato JQUERY

const options = {
  uri: "https://www.bibliaonline.com.br/acf/is/66/11-12",
  transform: function (body) {
    return cheerio.load(body);
  },
};

request(options)
  .then(($) => {
    $(".jss32.jss27 > P").each((i, item) => {
      process.stdout.write($(item).text() + "\n\n");
    });
  })
  .catch((erro) => {
    console.log(erro);
  });
