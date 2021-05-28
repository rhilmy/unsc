const ldap = require('ldapjs');
const server = "merahputih.telkom.co.id:389"; 
const session = require('express-session');
const assert = require('assert');

exports.AuthUser = (req,res)=>{
    
    
    const client = ldap.createClient({
        url: `ldap://${server}`
    });


	var userPrincipalName  = req.body.username;
	var password = req.body.password;
    
    client.bind(userPrincipalName, password, err => {
        //assert.ifError(err);
        // console.log(err);
        if (err) {
            console.log(err.lde_message);
            return res.status(400).send({
                success: 'false',
                message: err.lde_message
            })
        }
        else{
            req.session.loggedin = true;
				req.session.username = userPrincipalName;
             //console.log(client);
                console.log('authenticated');
                client.unbind(err => {
                    assert.ifError(err);
                    console.log('UnBind');
        });
        
    
        res.status(200).redirect('/home')
        res.end();
        
        }
       
    });

}