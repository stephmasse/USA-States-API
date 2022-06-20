const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})



app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on ${PORT}!`)
})

app.get('/api/:statename',(request, response) => {
    const statesName = request.params.statename.toLowerCase()
    if(states[statesName]){
        response.json(states[statesName])
    }else{
        response.json(states['unknown'])}

})



const states = {

'alabama': {
    'Capital': 'Montgomery', 
    'Abbreviation': 'AL',
    'Region': 'South',
    'image': 'https://cdn.britannica.com/28/5428-004-43CF4FC9/flag-Republic-of-Alabama-sword-state-liberty-1895.jpg'
    },
    
    
'alaska': {
    'Capital': 'Juneau', 
    'Abbreviation': 'AK',
    'Region': 'West',
    'image': 'https://cdn.britannica.com/36/5436-004-EC372D91/Flag-Alaska.jpg'
    },


 'arizona': {
    'Capital': 'Phoenix', 
    'Abbreviation': 'AZ',
    'Region': 'SouthWest',
    'image':'https://cdn.britannica.com/79/5879-050-E7C15396/Arizona-flag-copper-star-importance-colors-dominion-1941.jpg'
    },
        

'arkansas': {
    'Capital': 'Little Rock', 
    'Abbreviation': 'AR',
    'Region': 'South',
    'image':'https://cdn.britannica.com/82/5882-004-2CF01176/flag-design-state-legislature-others-diamond-Arkansas-1923.jpg'
     },

    
'california': {
        'Capital': 'Sacramento', 
        'Abbreviation': 'CA',
        'Region': 'West',
        'image':'https://cdn.britannica.com/46/7046-004-BB1F8E32/state-flag-Bear-Flag-California-red-star-July-9-1846.jpg'
        },
    

'colorado': {
        'Capital': 'Denver', 
        'Abbreviation': 'CO',
        'Region': 'West',
        'image':'https://cdn.britannica.com/74/7674-050-FCCC7650/Colorado-state-flag-letter-C-pattern-gold-1964.jpg'
        },

    
'connecticut': {
        'Capital': 'Hartford', 
        'Abbreviation': 'CT',
        'Region': 'NorthEast',
        'image':'https://cdn.britannica.com/69/7769-050-7BA8542D/flags-Connecticut-state-flag-design-arms-coat-1897.jpg'
        },
    
'delaware': {
        'Capital': 'Denver', 
        'Abbreviation': 'DE',
        'Region': 'NorthEast',
        'image':'https://cdn.britannica.com/03/8003-004-DD5D72DC/flag-state-Delaware-diamond-arms-troops-American-December-7-1787.jpg'
        },
    
'florida': {
            'Capital': 'Tallahassee', 
            'Abbreviation': 'FL',
            'Region': 'South',
            'image':'https://cdn.britannica.com/97/597-004-3607E920/flags-state-Florida-flag-None-governor-seal-1970.jpg'
            },
 
'georgia': {
            'Capital': 'Atlanta', 
            'Abbreviation': 'GA',
            'Region': 'South',
            'image':'https://cdn.britannica.com/89/889-004-15A4359F/flag-state-battle-Georgia-field-Georgias-History-2003.jpg'
            },
        
'hawaii': {
            'Capital': 'Honolulu', 
            'Abbreviation': 'HI',
            'Region': 'West',
            'image':'https://cdn.britannica.com/64/1164-004-41959572/Union-Jack-islands-kingdom-stripes-ship-Hawaii-1843.jpg'
            },
    
'idaho': {
            'Capital': 'Boise', 
            'Abbreviation': 'ID',
            'Region': 'West',
            'image':'https://cdn.britannica.com/88/1488-004-CA60330D/state-flag-Idaho-military-officer-description-fact-1957.jpg'
            },
        
    
'ilinois': {
            'Capital': 'Springfield', 
            'Abbreviation': 'IL',
            'Region': 'MidWest',
            'image':'https://cdn.britannica.com/94/1494-004-D676DAA0/prizewinner-state-flag-Illinois-design-emblem-competition-1969.jpg'
            },
    
'indiana': {
            'Capital': 'Indianapolis', 
            'Abbreviation': 'IN',
            'Region': 'MidWest',
            'image':'https://cdn.britannica.com/36/1636-004-07654157/contest-statehood-centennial-Indiana-state-flag-field-1917.jpg'
            },
        
    
'iowa': {
            'Capital': 'Des Moines', 
            'Abbreviation': 'IA',
            'Region': 'MidWest',
            'image':'https://cdn.britannica.com/19/1719-004-0A33620B/state-flag-necessity-question-Iowa-World-War-1921.jpg'
            },
        
'kansas': {
                'Capital': 'Topeka', 
                'Abbreviation': 'KS',
                'Region': 'MidWest',
                'image':'https://cdn.britannica.com/79/1879-004-AE87DA0F/state-flag-Kansas-use-bottom-name-addition-1927.jpg'
                },
    
'kentucky': {
                'Capital': 'Frankfort', 
                'Abbreviation': 'KY',
                'Region': 'South',
                 ' image':'https://cdn.britannica.com/01/1901-004-C58FADCA/great-seal-flags-state-Kentucky-design-government-1962.jpg'
                },
    
'louisiana': {
                'Capital': 'Baton Rouge', 
                'Abbreviation': 'LA',
                'Region': 'South',
                'image':'https://cdn.britannica.com/93/2193-050-A967A04F/pelican-flag-Louisiana-details-American-Civil-War-1912.jpg'
                },
    
'maine': {
                'Capital': 'Augusta', 
                'Abbreviation': 'ME',
                'Region': 'NorthEast',
                'image': 'https://cdn.britannica.com/69/2269-050-C7C3CFAF/Maine-state-flags-military-troops-flag-arms-1820.jpg'
                },
    
'maryland': {
                'Capital': 'Annapolis', 
                'Abbreviation': 'MD',
                'Region': 'South',
                'image':'https://cdn.britannica.com/38/2338-004-AE838B06/flag-Proprietor-state-Maryland-family-arms-Lord-1904.jpg'
                },
    
'massachusetts': {
                'Capital': 'Boston', 
                'Abbreviation': 'MA',
                'Region': 'NorthEast',
                'image':'https://cdn.britannica.com/45/2345-050-926722A1/flag-pine-tree-Massachusetts-state-field-arms-1971.jpg'
                },
    
    
'michigan': {
                'Capital': 'Lansing', 
                'Abbreviation': 'MI',
                'Region': 'MidWest',
                'image':'https://cdn.britannica.com/83/2583-004-BDC7442D/coat-of-arms-seal-flag-Michigan-state-1865.jpg'
                },
    
'minnesota': {
                'Capital': 'Saint Paul', 
                'Abbreviation': 'MN',
                'Region': 'MidWest',
                'image':'https://cdn.britannica.com/98/2598-004-F6564CCC/Minnesota-cost-emblem-flag-circle-revision-manufacturing-1858.jpg'
                },
    
'mississippi': {
                'Capital': 'Jackson', 
                'Abbreviation': 'MS',
                'Region': 'South',
                'image':'https://cdn.britannica.com/26/2726-004-1F31094F/state-flag-Mississippi-legislature-committee-Confederacy-battle-1861.jpg'
                },
    
'missouri': {
                'Capital': 'Jefferson City', 
                'Abbreviation': 'MO',
                'Region': 'South',
                'image':'https://cdn.britannica.com/31/2731-004-603DF34F/commemoration-state-flag-tricolor-Missouri-French-amount-1913.jpg'
                },
    
'montana': {
                    'Capital': 'Helena', 
                    'Abbreviation': 'MT',
                    'Region': 'West',
                    'image':'https://cdn.britannica.com/70/2770-004-AB7BFA0F/flag-Montana-Volunteers-state-inscription-Spanish-American-War-1981.jpg'
                    },
       
'nebraska': {
                    'Capital': 'Lincoln', 
                    'Abbreviation': 'NE',
                    'Region': 'MidWest',
                    'image':'https://cdn.britannica.com/48/2948-050-023A51DB/state-banner-Nebraska-flag-flags-seal-design-1963.jpg'
                    },
    
'nevada': {
                    'Capital': 'Carson City', 
                    'Abbreviation': 'NV',
                    'Region': 'West',
                    'image':'https://cdn.britannica.com/86/2986-004-185B6EC4/state-flag-times-Nevada-one-design-contest-1953.jpg'
                    },
'new hampshire': {
                    'Capital': 'Concord', 
                    'Abbreviation': 'NH',
                    'Region': 'NorthEast',
                    'image':'https://cdn.britannica.com/96/2996-050-97AB5B46/Provision-state-flag-New-Hampshire-military-purposes-1931.jpg'
                    },
    
'new jersey': {
                    'Capital': 'Trenton', 
                    'Abbreviation': 'NJ',
                    'Region': 'NorthEast',
                    'image':'https://cdn.britannica.com/99/2999-004-156FB7EF/state-flag-New-Jersey-George-Washington-field-1779.jpg'
                    },
    
'new mexico': {
                    'Capital': 'Santa Fe', 
                    'Abbreviation': 'NM',
                    'Region': 'West',
                      'image':'https://cdn.britannica.com/03/3003-050-F0EB2D27/flag-New-Mexico-state-flags-one-design-March-15-1925.jpg'
                    },
    
'new york': {
                    'Capital': 'Albany', 
                    'Abbreviation': 'NY',
                    'Region': 'NorthEast',
                    'image':'https://cdn.britannica.com/14/3014-004-BD154711/flag-New-York-color-uniforms-facings-American-1909.jpg'
                    },
    
'north dakota': {
                    'Capital': 'Bismarck', 
                    'Abbreviation': 'ND',
                    'Region': 'MidWest',
                    'image':'https://cdn.britannica.com/88/3088-004-E8605DCF/flag-North-Dakota-National-Guard-change-state-1911.jpg'
                    },
    
'ohio': {
                    'Capital': 'Columbus', 
                    'Abbreviation': 'OH',
                    'Region': 'MidWest',
                    'image':'https://cdn.britannica.com/09/3209-004-BA716BBF/Ohio-circle-flag-cavalry-status-United-States-1902.jpg'
                    },
    
'oklahoma': {
                    'Capital': 'Oklahoma City', 
                    'Abbreviation':'OK',
                    'Region': 'West',
                    'image':'https://cdn.britannica.com/14/3214-050-2C7A767C/star-flag-field-Oklahoma-contest-color-sky-1941.jpg'
                    },
    
    
'oregon': {
                    'Capital': 'Salem', 
                    'Abbreviation': 'OR',
                    'Region': 'West',
                    'image':'https://cdn.britannica.com/57/3257-004-050DB90C/state-flag-Oregon-distinction-escutcheon-gold-field-1859.jpg'
                    },
    
'pennsylvania': {
                    'Capital': 'Harrisburg', 
                    'Abbreviation': 'PA',
                    'Region': 'NorthEast',
                    'image':'https://cdn.britannica.com/29/3429-050-0A641390/Pennsylvania-state-flag-William-Penn-blue-coat-1777.jpg'
                    },
    
'rhode island': {
                    'Capital': 'Providence', 
                    'Abbreviation': 'RI',
                    'Region': 'NorthEast',
                    'image':'https://cdn.britannica.com/48/3748-004-6A823438/anchor-flag-one-pervasive-Rhode-Island-American-1897.jpg'
                    },
    
    
'south carolina': {
                    'Capital': 'Columbia', 
                    'Abbreviation': 'SC',
                    'Region': 'South',
                    'image':'https://cdn.britannica.com/14/4314-050-9ABD8FD8/state-flag-South-Carolina-Union-fort-palmetto-1861.jpg'
                    },
    
    
'south dakota': {
                    'Capital': 'Pierre', 
                    'Abbreviation': 'SD',
                    'Region': 'MidWest',
                    'image':'https://cdn.britannica.com/18/4318-004-088A2E82/flag-South-Dakota-song-sun-legislation-designers-July-1-1992.jpg'
                    },
    
    
'tennessee': {
                    'Capital': 'Nashville', 
                    'Abbreviation': 'TN',
                    'Region': 'South',
                    'image':'https://cdn.britannica.com/42/4642-004-4871942A/flag-state-Tennessee-Centennial-Exposition-presidents-captain-1905.jpg'
                    },
    
    
'texas': {
                    'Capital': 'Austin', 
                    'Abbreviation': 'TX',
                    'Region': 'South',
                    'image':'https://cdn.britannica.com/51/4651-004-B1024BD2/flags-Texas-independence-motif-flag-Mexico-star-1845.jpg'
                    },
    
    
    
'utah': {
                    'Capital': 'Salt Lake City', 
                    'Abbreviation': 'UT',
                    'Region': 'West',
                    'image':'https://cdn.britannica.com/79/4879-004-D9F0166E/Daughters-of-the-American-Revolution-flag-chapter-1913.jpg'
                    },
    
    
'vermont': {
                    'Capital': 'Montpelier', 
                    'Abbreviation': 'VT',
                    'Region': 'NorthEast',
                    'image':'https://cdn.britannica.com/10/4910-004-AE891E7C/Vermont-flag-any-republic-state-stripes-stars-1923.jpg'
                    },
    
    
'virginia': {
                    'Capital': 'Richmond', 
                    'Abbreviation': 'VA',
                    'Region': 'South',
                     'image':'https://cdn.britannica.com/40/4940-004-63FAF073/Flag-Virginia.jpg'
                    },
    
    
'washington': {
                    'Capital': 'Olympia', 
                    'Abbreviation': 'WA',
                    'Region': 'West',
                    'image':'https://cdn.britannica.com/98/4998-004-C626B9A9/state-flag-field-Daughters-of-the-American-1915.jpg'
                    },
    
    
'west virginia': {
                    'Capital': 'Charleston', 
                    'Abbreviation': 'WV',
                    'Region': 'South',
                    'image':'https://cdn.britannica.com/37/5137-004-EB44BB11/flag-West-Virginia-Louisiana-Purchase-Exposition-design-1929.jpg'
                    },
    
    
'wisconsin': {
                    'Capital': 'Madison', 
                    'Abbreviation': 'WI',
                    'Region': 'MidWest',
                    'image':'https://cdn.britannica.com/97/5197-004-1825DD08/state-flags-Wisconsin-law-name-coat-of-1981.jpg'
                    },
    
    
'wyoming': {
                    'Capital': 'Cheyenne', 
                    'Abbreviation': 'WY',
                    'Region': 'West',
                     'image': 'https://cdn.britannica.com/38/5238-004-C070D1F2/flag-citizen-Wyoming-response-contest-field-border-1917.jpg'
                    },



'unknown': {
    'Try Again': 'Not A State'
}}