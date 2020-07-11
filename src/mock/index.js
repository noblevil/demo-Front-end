import user from './user';
import menu from './menu';
import oauth from './oauth';
import param from './param';

import demo from './demo'
import blog from './blog'
import home from './home'
import org from './org'
import complaint from './complaint'

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 */

const options = { mock: false };

user(options);

menu(options);

oauth(options);

param(options);

demo({ mock: false });

blog({ mock: false });


home({ mock: false });
org({ mock: false });

complaint({ mock: false });



