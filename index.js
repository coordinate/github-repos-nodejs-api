const http = require('http');
const PORT = process.env.PORT || 8081;

const server = http.createServer(async (req, res)=> {
  const url = require("url");
  const qs = require("querystring");
  let urlObj = url.parse(req.url);
  let query = qs.parse(urlObj.query);
  // const https = require('https');
  // const URL = require('url');
  // const UserAgents = [
  //   'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0',
  //   'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36',
  //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:77.0) Gecko/20100101 Firefox/77.0',
  //   'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36',
  // ];
  // const getFile = (v, x, y, z, s) => {
  //   let radom = Math.floor(Math.random() * 4);
  //   let url =
  //     'https://khm' +
  //     radom +
  //     '.google.com/kh/v=' +
  //     v +
  //     '&hl=en&x=' +
  //     x +
  //     '&y=' +
  //     y +
  //     '&z=' +
  //     z +
  //     '&s=' +
  //     s;
  //   let urlObject = URL.parse(url);
  //   let options = {
  //     protocol: urlObject.protocol,
  //     host: urlObject.host,
  //     port: urlObject.port,
  //     path: urlObject.path,
  //     headers: {
  //       'User-Agent': UserAgents[radom],
  //       Accept:
  //         'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  //       'Accept-Language':
  //         'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
  //       'Upgrade-Insecure-Requests': '1',
  //       Pragma: 'no-cache',
  //       'Cache-Control': 'no-cache',
  //     },
  //   };
  //   return new Promise((resolve, reject) => {
  //     https
  //       .get(options, (res) => {
  //         const chunks = [];
  //         res.on('data', (chunk) => chunks.push(chunk));
  //         res.on('end', () => {
  //           //at this point data is an array of Buffers
  //           //so Buffer.concat() can make us a new Buffer
  //           //of all of them together
  //           let buffer = Buffer.concat(chunks);
  //           resolve(buffer.toString('hex'));
  //         });
  //       })
  //       .on('error', reject);
  //   });
  // };
  // const p = event['GET'];
  // let promises = [];
  // let xys = p.xys.split('.');
  // let l = xys.length;
  // for (let i = 0; i < l; i = i + 2) {
  //   let x = xys[i];
  //   let y = xys[i + 1];
  //   promises.push(getFile(p.v, x, y, p.z, p.s));
  // }
  // let result = await Promise.all(promises);

  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write(JSON.stringify(query));
  res.end();
});

server.listen(PORT, function() {
  console.log(`server started on port ${PORT}`);
});

// app.get('/', async (req, res) => {
//   const username = req.query.username || 'myogeshchavan97';
//   try {
//     const result = await axios.get(
//       `https://api.github.com/users/${username}/repos`
//     );
//     const repos = result.data
//       .map((repo) => ({
//         name: repo.name,
//         url: repo.html_url,
//         description: repo.description,
//         stars: repo.stargazers_count
//       }))
//       .sort((a, b) => b.stars - a.stars);

//     res.send(repos);
//   } catch (error) {
//     res.status(400).send('Error while getting list of repositories');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`server started on port ${PORT}`);
// });
