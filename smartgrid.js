var smartgrid = require('smart-grid');
        const settings = {
        columns: 12,
                offset: '30px',
                container: {
                maxWidth:'1140px',
                fields: '15px'
                },
                breakPoints: {
                    lg: {
                        width:'960px',
                        fields:'20px'
                    },
                    md: {
                           width:'768px', //ipad
                           fields: '20px'
                    }, 
                     sm: {
                           width:'414px', //iphone 6/7/8 Plus
                           fields: '15px'
                    }, 
                     xs: {
                           width:'375px', //iphone 6/7/8/X
                           fields: '10px'
                    }, 
                   xxs: {
                        width:'320px', //iphone 5/se
                        fields:'10px'
                  }
                    
                },
       
        properties: [],
        oldSizeStyle: false

};
        smartgrid('./src/precss', settings);