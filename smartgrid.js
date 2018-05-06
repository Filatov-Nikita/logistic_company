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
                           width:'850px',
                           fields: '20px'
                    }, 
                     sm: {
                           width:'780px',
                           fields: '15px'
                    }, 
                     xs: {
                           width:'560px',
                           fields: '10px'
                    }, 
                   xxs: {
                        width:'360px',
                        fields:'10px'
                  }
                    
                },
       
        properties: [],
        oldSizeStyle: false

};
        smartgrid('./src/precss', settings);