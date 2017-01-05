/**
 * Created by WittBulter on 2017/1/5.
 * @description :: 可选服务 将文件上传至qiniu 并更改文件
 */

const QiNiuCloud = require('qiniu')
const fs = require('fs')

// 个人qiniu密钥配置
const config = require('./config')
QiNiuCloud.conf.ACCESS_KEY = config.qiniu.ACCESS_KEY
QiNiuCloud.conf.SECRET_KEY = config.qiniu.SECRET_KEY


const getToken = (key) => new QiNiuCloud.rs.PutPolicy(`static:${key}`).token()
const uploadFile = (token, key, filePath) =>{
	const extra = new QiNiuCloud.io.PutExtra()
	QiNiuCloud.io.putFile(token, key, filePath, extra, (err, ret) =>{
		if (err) return console.log(err);
		// console.log(ret.hash, ret.key, ret.persistentId);
		console.log(`上传成功: ${ret.key}上传完毕`);
	});
}
fs.readdir('./dist', (err, files) =>{
	files.forEach(v =>{
		if (v.includes('.js') || v.includes('.css')){
			uploadFile(getToken(v), v, `./dist/${v}`)
		}
	})
})

fs.readFile('./dist/index.html', (err, bufferData) =>{
	if (err){
		console.log(err);
		return console.log('读取文件错误: 可能需要sudo权限');
	}
	let html = bufferData.toString();
	html = html.replace(`src="/inline`, `src="http://static.wittsay.cc/inline`)
	html = html.replace(`src="/vendor`, `src="http://static.wittsay.cc/vendor`)
	html = html.replace(`src="/main`, `src="http://static.wittsay.cc/main`)
	html = html.replace('href="styles', 'src="http://static.wittsay.cc/styles')

	fs.writeFile('./dist/index.html', new Buffer(html), (err) =>{
		if (err) return console.log(err);
		console.log('修改成功: index.html静态文件已被修改为cdn地址');
	})
})
