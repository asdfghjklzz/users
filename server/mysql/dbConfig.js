/*数据库连接*/
const mysql=require('mysql');

exports.base=(sql,data,callback)=>{
	const connection = mysql.createConnection({     
	  host     : 'localhost',       
	  user     : 'root',              
	  password : 'admin',       
	  port: '3306',                   
	  database: 'login' 
	}); 
	 
	connection.connect();
	
	connection.query(sql,data, function (error, results, fields) {
	  if (error) {
          console.log('[SELECT ERROR] - ',error.message);
          return;
        }
	  callback(results);
	  console.log('数据连接成功!');
	});
		 
	connection.end();
}
