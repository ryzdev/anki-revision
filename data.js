const data = {
  '__type__': 'Deck',
  'activeTags': [
    'Romanian'
  ],
  'children': [],
  'crowdanki_uuid': '28769f59-ffc4-11e7-befd-9801a7a7bdc7',
  'deck_config_uuid': '2878d8f5-ffc4-11e7-99a3-9801a7a7bdc7',
  'deck_configurations': [
    {
      '__type__': 'DeckConfig',
      'autoplay': true,
      'crowdanki_uuid': '2878d8f5-ffc4-11e7-99a3-9801a7a7bdc7',
      'dyn': false,
      'lapse': {
        'delays': [
          10
        ],
        'leechAction': 1,
        'leechFails': 8,
        'minInt': 1,
        'mult': 0.0
      },
      'maxTaken': 60,
      'name': 'Default',
      'new': {
        'bury': true,
        'delays': [
          1,
          10
        ],
        'initialFactor': 2500,
        'ints': [
          1,
          4,
          7
        ],
        'order': 0,
        'perDay': 40,
        'separate': true
      },
      'replayq': true,
      'rev': {
        'bury': true,
        'ease4': 1.3,
        'fuzz': 0.05,
        'ivlFct': 1.0,
        'maxIvl': 36500,
        'minSpace': 1,
        'perDay': 100
      },
      'timer': 0
    }
  ],
  'desc': '',
  'dyn': 0,
  'extendNew': 10,
  'extendRev': 50,
  'inactiveTags': [
    'Dutch',
    'Greek',
    'Spanish',
    'marked'
  ],
  'media_files': [
    'paste-631360192572.jpg',
    'paste-906238099515.jpg',
    'paste-1065151889482.jpg',
    'paste-850403524665.jpg',
    'paste-1378684502101.jpg',
    'paste-880468295738.jpg',
    'paste-1219770712146.jpg',
    'paste-1138166333501.jpg',
    'paste-708669603903.jpg',
    'paste-1039382085688.jpg',
    'paste-764504178768.jpg',
    'paste-738734374966.jpg',
    'paste-987842478163.jpg',
    'paste-1013612281915.jpg',
    'paste-1194000908360.jpg',
    'paste-1112396529733.jpg',
    'paste-1249835483226.jpg',
    'paste-1275605286981.jpg',
    'paste-932007903299.jpg',
    'paste-794568949815.jpg',
    'paste-957777707063.jpg',
    'paste-1168231104582.jpg',
    'paste-820338753612.jpg',
    'paste-1417339207742.jpg'
  ],
  'mid': 1422101284803,
  'name': 'Languages - all',
  'note_models': [
    {
      '__type__': 'NoteModel',
      'crowdanki_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'css': '.card {\n font-familiy: arial;\n font-size: 25px;\n text-align: center;\n color: black;\n background-color: white;\n}\n.tagstyle {\nfont-size: 18px;\nmargin-top: 20px;\n}',
      'flds': [
        {
          'font': 'Arial',
          'media': [],
          'name': 'Front',
          'ord': 0,
          'rtl': false,
          'size': 20,
          'sticky': false
        },
        {
          'font': 'Arial',
          'media': [],
          'name': 'Back',
          'ord': 1,
          'rtl': false,
          'size': 20,
          'sticky': false
        }
      ],
      'latexPost': '\\end{document}',
      'latexPre': '\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n',
      'name': 'Basic',
      'req': [
        [
          0,
          'all',
          [
            0
          ]
        ]
      ],
      'sortf': 0,
      'tags': [],
      'tmpls': [
        {
          'afmt': '{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}',
          'bafmt': '',
          'bfont': 'Arial',
          'bqfmt': '',
          'bsize': 12,
          'did': null,
          'name': 'Card 1',
          'ord': 0,
          'qfmt': '{{Front}}\n<div class=tagstyle>({{Tags}})</div>\n'
        }
      ],
      'type': 0,
      'vers': []
    },
    {
      '__type__': 'NoteModel',
      'crowdanki_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'css': '.card {\n font-familiy: arial;\n font-size: 25px;\n text-align: center;\n color: black;\n background-color: white;\n}\n.tagstyle {\nfont-size: 18px;\nmargin-top: 20px;\n}',
      'flds': [
        {
          'font': 'Arial',
          'media': [],
          'name': 'Front',
          'ord': 0,
          'rtl': false,
          'size': 20,
          'sticky': false
        },
        {
          'font': 'Arial',
          'media': [],
          'name': 'Back',
          'ord': 1,
          'rtl': false,
          'size': 20,
          'sticky': false
        }
      ],
      'latexPost': '\\end{document}',
      'latexPre': '\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n',
      'name': 'Basic (and reversed card)',
      'req': [
        [
          0,
          'all',
          [
            0
          ]
        ],
        [
          1,
          'all',
          [
            1
          ]
        ]
      ],
      'sortf': 0,
      'tags': [
        'Sake'
      ],
      'tmpls': [
        {
          'afmt': '{{FrontSide}}\n\n<hr id=answer>\n\n{{Back}}',
          'bafmt': '',
          'bfont': 'Arial',
          'bqfmt': '',
          'bsize': 12,
          'did': null,
          'name': 'Card 1',
          'ord': 0,
          'qfmt': '{{Front}}\n<div class=tagstyle>({{Tags}})</div>'
        },
        {
          'afmt': '{{FrontSide}}\n\n<hr id=answer>\n\n{{Front}}',
          'bafmt': '',
          'bfont': 'Arial',
          'bqfmt': '',
          'bsize': 12,
          'did': null,
          'name': 'Card 2',
          'ord': 1,
          'qfmt': '{{Back}}\n<div class=tagstyle>({{Tags}})</div>'
        }
      ],
      'type': 0,
      'vers': []
    }
  ],
  'notes': [
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'άλφα',
        'Α α<div><br /></div><div><img src="paste-631360192572.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'int%L',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'βητα',
        'Β β<div><br /></div><div><img src="paste-1378684502101.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'Pw)VG',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'γαμμα',
        'Γ γ<div><br /></div><div><img src="paste-1417339207742.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'e`47J',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'δελτα',
        'Δ δ<div><br /></div><div><img src="paste-708669603903.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'FMP0F',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'έψιλον',
        'Ε ε<div><br /></div><div><img src="paste-738734374966.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '<);NL',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ζητα',
        'Ζ ζ<div><br /></div><div><img src="paste-764504178768.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '_gz1R',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ήτα',
        'Η η<br />hAY<div><br /></div><div><img src="paste-794568949815.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '~w`y8',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Θητα',
        'Θ θ<div><br /></div><div><img src="paste-820338753612.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'Kp{gG',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ίωτα',
        'Ι ι<br />polski \'y\'<div><br /></div><div><img src="paste-850403524665.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '`5#NO',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'καππα',
        'Κ κ<div><br /></div><div><img src="paste-880468295738.jpg" /></div>'
      ],
      'flags': 0,
      'guid': ',O:.L',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'λαμβδα',
        'Λ λ<div><br /></div><div><img src="paste-906238099515.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'v6i!P',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'μυ',
        'Μ μ<div><br /></div><div><img src="paste-932007903299.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'oW-?N',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'νυ',
        'Ν ν<div><br /></div><div><img src="paste-957777707063.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'fYg#9',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ξι',
        'Ξ ξ<div><br /></div><div><img src="paste-987842478163.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '{h~q6',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'όμικρον',
        'Ο ο<div><br /></div><div><img src="paste-1013612281915.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '7a#.K',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'πι',
        'Π π<div><br /></div><div><img src="paste-1039382085688.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'kAZ#Q',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ρω',
        'Ρ ρ<div><br /></div><div><img src="paste-1065151889482.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'pDpkF',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'σιγμα',
        'Σ σ s<div><br /></div><div><img src="paste-1112396529733.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '(bsJN',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ταυ',
        'Τ τ<div><br /></div><div><img src="paste-1138166333501.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'F!>rT',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ύψιλον',
        'Υ υ<br />bOOk<div><br /></div><div><img src="paste-1168231104582.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'nS{G7',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Greek alphabet',
        'Alfa<br />Beta<br />Gamma<br />Delta<br />Epsilon<br />Zeta<br />Eta<br />Theta<br />Iota<br />Kappa<br />Lambda<br />Mu<br />Nu<br />Xi<br />Omicron<br />Pi<br />Rho<br />Sigma<br />Tau<br />Upsilon<br />Phi<br />Chi<br />Psi<br />Omega'
      ],
      'flags': 0,
      'guid': '>6ejI',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'φι',
        'Φ φ<div><br /></div><div><img src="paste-1194000908360.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'E:d4U',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'χι',
        'Χ χ<br />loCH<div><br /></div><div><img src="paste-1219770712146.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'uAPrU',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ψι',
        'Ψ ψ<div><br /></div><div><img src="paste-1249835483226.jpg" /></div>'
      ],
      'flags': 0,
      'guid': '0-qWM',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'ώμεγα',
        'Ω ω<br />tOne<div><br /></div><div><img src="paste-1275605286981.jpg" /></div>'
      ],
      'flags': 0,
      'guid': 'U^L|L',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - alpha lowercase',
        '<div>άλφα</div><div>βητα</div><div>γαμμα</div><div>δελτα</div><div>έψιλον</div>'
      ],
      'flags': 0,
      'guid': 'lwr[LNLc*X',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - zeta lowercase',
        '<div>ζητα</div><div>ήτα</div><div>Θητα</div><div>ίωτα</div>'
      ],
      'flags': 0,
      'guid': 'L/pDai2A_/',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - kappa lowercase',
        '<div>καππα</div><div>λαμβδα</div><div>μυ</div><div>νυ</div><div>ξι</div>'
      ],
      'flags': 0,
      'guid': 'Fo{aFJ`b99',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - Omicron lowercase',
        '<div>όμικρον</div><div>πι</div><div>ρω</div><div>σιγμα</div><div>ταυ</div><div>ύψιλον</div>'
      ],
      'flags': 0,
      'guid': 'jO8vI]yD~=',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - phi - lowercase',
        '<div>φι</div><div>χι</div><div>ψι</div><div>ώμεγα</div>'
      ],
      'flags': 0,
      'guid': 'dc.O>G#P>O',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - alpha - uppercase',
        '<div>ΆΛΦΑ</div><div>ΒΗΤΑ</div><div>ΓΑΜΜΑ</div><div>ΔΕΛΤΑ</div><div>ΈΨΙΛΟΝ</div>'
      ],
      'flags': 0,
      'guid': 'm^FY@$z;Ny',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - zeta - uppercase',
        '<div>ΖΗΤΑ</div><div>ΉΤΑ</div><div>ΘΗΤΑ</div><div>ΊΩΤΑ</div>'
      ],
      'flags': 0,
      'guid': 'n0_=dImM_k',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        '<div>alphabet bundles - kappa - uppercase</div>',
        '<div>ΚΑΠΠΑ</div><div>ΛΑΜΒΔΑ</div><div>ΜΥ</div><div>ΝΥ</div><div>ΞΙ</div>'
      ],
      'flags': 0,
      'guid': 'tRH5=>P*Nc',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - omicron - uppercase',
        '<div>ΌΜΙΚΡΟΝ</div><div>ΠΙ</div><div>ΡΩ</div><div>ΣΙΓΜΑ</div><div>ΤΑΥ</div><div>ΎΨΙΛΟΝ</div>'
      ],
      'flags': 0,
      'guid': 'KrDwK.!D@n',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'alphabet bundles - phi - uppercase',
        '<div>ΦΙ</div><div>ΧΙ</div><div>ΨΙ</div><div>ΏΜΕΓΑ</div>'
      ],
      'flags': 0,
      'guid': 'CW&>~i#iMC',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Greek'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        '<div>Excuse me</div>',
        'Disculpe (getting attention)<div>Perdone (begging pardon)</div>'
      ],
      'flags': 0,
      'guid': 'iX%t[@Gf`7',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I\'m sorry',
        'Lo siento'
      ],
      'flags': 0,
      'guid': 'D#;h*_Lp0x',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Goodbye (2)',
        '<div>Adiós</div><div>Hasta luego </div>'
      ],
      'flags': 0,
      'guid': 'Pbw<sL8z:?',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Do you speak....?',
        '<div>¿Hablas....?</div><div>¿Habla usted....?</div>'
      ],
      'flags': 0,
      'guid': 'EjozwKa*{0',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'How do I get to ... ? (3)',
        '<div>Cómo puedo llegar a ... ?</div><div><br /></div><div>...la estación de tren?</div><div>...la estación de autobuses?</div><div>...al centro?</div>'
      ],
      'flags': 0,
      'guid': 'LPhG{lBX[M',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Take me to _____, please.&nbsp;',
        'Lléveme a _____, por favor.'
      ],
      'flags': 0,
      'guid': 'DeX|,:FtYm',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'How much does it cost to get to _____?&nbsp;',
        '¿Cuanto cuesta ir hasta/a _____?'
      ],
      'flags': 0,
      'guid': 'K[0ugQBsP&',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Is breakfast/supper included?&nbsp;',
        '¿El desayuno/la cena va incluido/a?&nbsp;'
      ],
      'flags': 0,
      'guid': 'rh<gYRtmk2',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'What time is breakfast/supper?&nbsp;',
        '¿A qué hora es el desayuno/la cena?'
      ],
      'flags': 0,
      'guid': 'Fh,3x_sjFJ',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Is there table service?&nbsp;',
        '<div>¿Hay servicio a la mesa?</div>'
      ],
      'flags': 0,
      'guid': 'BI$4xD|.ah',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'How much is a ticket to _____?&nbsp;',
        '<div>¿Cuánto cuesta un billete a _____?&nbsp;</div>'
      ],
      'flags': 0,
      'guid': 'k-z4z]_QoT',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Does this train/bus stop in _____?&nbsp;',
        '<div>¿Este tren/autobús para en? _____?&nbsp;</div>'
      ],
      'flags': 0,
      'guid': 'Mf_G?4H^Vi',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I have a reservation.',
        '<div>Tengo reserve.</div>'
      ],
      'flags': 0,
      'guid': 'u!dO6JaZ6V',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'cheque please',
        'la cuenta, por favor'
      ],
      'flags': 0,
      'guid': '(@?wP',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Spanish'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to be',
        'a fi<br><br>eu sunt<br>tu esti<br>el / ea este'
      ],
      'flags': 0,
      'guid': 'r{Z2wRmAR3',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to speak',
        '<div>a vorbi</div><div><br /></div><div>eu vorbesc</div><div>tu vorbesti</div><div>el / ea vorbeste</div>'
      ],
      'flags': 0,
      'guid': 'FV/|{SgtpZ',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Why are you speaking to me?',
        'De ce vorbești cu mine?'
      ],
      'flags': 0,
      'guid': 'MDKnv}[.V3',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'me too',
        'si eu'
      ],
      'flags': 0,
      'guid': 'z}5%-kMf#/',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'all is well / bad',
        'totul e bine /&nbsp;rău'
      ],
      'flags': 0,
      'guid': 'NDM-Y[Qc~v',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'good night',
        'Noapte bună'
      ],
      'flags': 0,
      'guid': '75xPD',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'please repeat slower',
        'repeta mai rar te rog'
      ],
      'flags': 0,
      'guid': '`zdJU',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'how do you say ...',
        'cum să spun ...'
      ],
      'flags': 0,
      'guid': 'jv{vB',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to say',
        '<div>a spune</div><div><br /></div>spun, spui, spune'
      ],
      'flags': 0,
      'guid': '*=#*5',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'morning!',
        'Neața!'
      ],
      'flags': 0,
      'guid': '+W|(2',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'thank you',
        'mulțumesc'
      ],
      'flags': 0,
      'guid': 'B?N%G',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'you\'re welcome',
        'cu plăcere'
      ],
      'flags': 0,
      'guid': 'I`y~L',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Hello',
        'HAllo'
      ],
      'flags': 0,
      'guid': 'BOo$N',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'thank you',
        'DANK u'
      ],
      'flags': 0,
      'guid': 'pgZ~2',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Excuse me, begging pardon',
        'SOrry'
      ],
      'flags': 0,
      'guid': '{/}}T',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'goodbye',
        'TOT ziens'
      ],
      'flags': 0,
      'guid': '@)4=4',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I don\'t speak any / little Dutch',
        'Ik SPREEK geen / niet goed NEderlands'
      ],
      'flags': 0,
      'guid': 'uK$xU',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Do you speak English?',
        'SPREEKT u ENGels?'
      ],
      'flags': 0,
      'guid': '@#IPB',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Good morning',
        'GOEdeMORgen'
      ],
      'flags': 0,
      'guid': '-g*t5',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'good afternoon',
        'GOEdeMIddag'
      ],
      'flags': 0,
      'guid': 'CGe2C',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'good evening',
        'goedeNAvond'
      ],
      'flags': 0,
      'guid': '%I,o7',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'good night',
        'goede NACHT'
      ],
      'flags': 0,
      'guid': 'u~KY6',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'where is the toilet',
        'waar is het toilet?'
      ],
      'flags': 0,
      'guid': '.UWpD',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        '1',
        'een'
      ],
      'flags': 0,
      'guid': '27HlD',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        '2',
        'twee'
      ],
      'flags': 0,
      'guid': 'Iv-ZO',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'one ticket to ___ please',
        'een TIcket naar ___ ALstuBLIEFT'
      ],
      'flags': 0,
      'guid': 'Z1}P6',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'take me to ___ / there please',
        'BRENG me naar ___ / erHEEN ALstuBLIEFT'
      ],
      'flags': 0,
      'guid': 'DbIo5',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I want ___',
        'ik wil ___'
      ],
      'flags': 0,
      'guid': 'dE811',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'waiter?',
        'ober?'
      ],
      'flags': 0,
      'guid': 'P}YcJ',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'check please',
        'de REkening, ALstuBLIEFT'
      ],
      'flags': 0,
      'guid': '?`F+6',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'is there table service?',
        'heeft u beDIEning aan TAfel?'
      ],
      'flags': 0,
      'guid': 'MyxKJ',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'a beer / two beers please',
        'een / twee bier ALstuBLIEFT'
      ],
      'flags': 0,
      'guid': 'lNVs5',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'a pint please',
        'een PINtje ALstuBLIEFT'
      ],
      'flags': 0,
      'guid': 'UQvpD',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'a bottle please',
        'een fles ALstuBLIEFT'
      ],
      'flags': 0,
      'guid': '8ktWL',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'may I have ___',
        'mag ik ___'
      ],
      'flags': 0,
      'guid': '<q)|C',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Dutch'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I don\'t really know Romanian',
        'Nu prea stiu română'
      ],
      'flags': 0,
      'guid': 'mb!3I',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'im hungry',
        'mi e foame'
      ],
      'flags': 0,
      'guid': '5A|cT',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'you speak English? (polite)',
        'vorbiți engleză?'
      ],
      'flags': 0,
      'guid': 'ME/2G',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'goodbye',
        'La revedere'
      ],
      'flags': 0,
      'guid': 'CxhnO',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'good evening',
        'Bună seara'
      ],
      'flags': 0,
      'guid': 'jM.aH',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'good day!',
        'Bună ziua!'
      ],
      'flags': 0,
      'guid': 'ZQn:E',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'hello',
        'buna'
      ],
      'flags': 0,
      'guid': 'k*ZTS',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'sun with teeth',
        'soare cu dinti'
      ],
      'flags': 0,
      'guid': '9bTd5',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I\'m taking my toys and going home',
        'Îmi iau jucăriile și plec acasă'
      ],
      'flags': 0,
      'guid': 'wQO7M',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'there\'s time',
        'e timp'
      ],
      'flags': 0,
      'guid': 'NE5TK',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'bon apetit',
        'poftă bună'
      ],
      'flags': 0,
      'guid': '~t`aM',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to go/leave',
        'a pleca<div><br /></div><div>eu plec</div><div>tu pleci</div><div><div>el ea pleacă</div></div>'
      ],
      'flags': 0,
      'guid': 'f{fdVL39Jc',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'lets go eat',
        'sa mergem să mâncăm'
      ],
      'flags': 0,
      'guid': 'GzpPTuYYr8',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I\'m thirsy',
        'mi-e sete'
      ],
      'flags': 0,
      'guid': 'p^Itse>5>~',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'excuse me / pardon',
        'skuzi / pardon'
      ],
      'flags': 0,
      'guid': 'xD,[>#hF?1',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I\'m sorry',
        '<div>imi pare rau</div>'
      ],
      'flags': 0,
      'guid': 'M9/wSw/5$g',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'no worries (to sorry or thank you)',
        'n-ai de ce'
      ],
      'flags': 0,
      'guid': 'c=2xR~Ii8E',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'let\'s speak romanian',
        'sa vorbim română'
      ],
      'flags': 0,
      'guid': 'NXv-$q$TCG',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Why are you talking about private things?',
        'de ce dai din casa?'
      ],
      'flags': 0,
      'guid': 'bE_^0RG?Ip',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'gruel',
        'terci'
      ],
      'flags': 0,
      'guid': 'EB#bN',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I like',
        'îmi place'
      ],
      'flags': 0,
      'guid': '0q42B',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'English (adj)',
        'englezesc'
      ],
      'flags': 0,
      'guid': ',&E*8',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'cheers (3)',
        'noroc!<br><br>multi ani!<br><br>cheers!'
      ],
      'flags': 0,
      'guid': 'lz/sG',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Romanian spirits (3)',
        '<div>ţuică - plum spirit</div><div><br /></div><div>palincă - stronger ţuică</div><div><br /></div><div>rachiu - spirit made with other fruits</div>'
      ],
      'flags': 0,
      'guid': 'q}LGt9Bs/]',
      'note_model_uuid': '287b41e1-ffc4-11e7-8361-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'To want',
        'a vrea<div><br /></div><div>eu vreau</div><div><div>tu vrei</div></div><div>el ea vrea</div>'
      ],
      'flags': 0,
      'guid': 'i?wdNck@,.',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I want to go to eat',
        'vreau sa merg&nbsp;sa mananc'
      ],
      'flags': 0,
      'guid': 'nhqah(3&]@',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'until tomorrow',
        'pe mâine'
      ],
      'flags': 0,
      'guid': 'w%3U.bAGAd',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to eat',
        '<div>a mânca</div><div><br /></div><div>eu mănânc</div><div>tu mănânci</div><div>el mănâncă</div><div>noi mâncăm</div>'
      ],
      'flags': 0,
      'guid': 'k1<U:4o5Ma',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to learn',
        'a învăța<div><br /></div><div>eu învăț</div><div>tu&nbsp;înveți</div><div>el / ea&nbsp;învață</div>'
      ],
      'flags': 0,
      'guid': 'E#9BU=1ngF',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'today',
        'azi'
      ],
      'flags': 0,
      'guid': 'cWX*M!z[aE',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'tomorrow',
        '<div>mâine</div>'
      ],
      'flags': 0,
      'guid': 'BTNBElzQm<',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'now',
        'acum'
      ],
      'flags': 0,
      'guid': 'A]gf>.d`5B',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'marked',
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'soon',
        'în curând'
      ],
      'flags': 0,
      'guid': 'hUdRVdWL|W',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to go',
        'a&nbsp;merge<div><br /></div><div>eu merg</div><div>tu mergi</div><div>el ea merge</div><div>noi mergem</div>'
      ],
      'flags': 0,
      'guid': 'bu$lg*arz|',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to understand',
        '<div>a înțelege</div><br /><div>eu înțeleg</div><div>tu înțelegi</div><div>el ea înțelege</div>'
      ],
      'flags': 0,
      'guid': 'F&m}FFM!aJ',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'and',
        'și'
      ],
      'flags': 0,
      'guid': 'Ja]=aE#yy+',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'but',
        'dar'
      ],
      'flags': 0,
      'guid': 'v7KS@;PN2S',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I am learning romanian, but i don\'t speak it very well',
        'Învăț română, dar nu știu prea bine'
      ],
      'flags': 0,
      'guid': 'GmWm}vhE@)',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to dance',
        'a dansa\r<br>\r<br>eu dansez\r<br>tu dansezi\r<br>el ea danseaza'
      ],
      'flags': 0,
      'guid': 'q@I(P',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'again',
        'din nou'
      ],
      'flags': 0,
      'guid': '9zF=3',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Until Monday!',
        'Pe luni!'
      ],
      'flags': 0,
      'guid': 'k;7Y$pa_=',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to have',
        'a avea<div><br /></div><div>eu am</div><div>tu ai</div><div>el ea are</div>'
      ],
      'flags': 0,
      'guid': 'H0$^U#4fYY',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Would you like something to drink?',
        'vrei ceva de băut?'
      ],
      'flags': 0,
      'guid': 'lG$n5-sxh=',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to drink',
        'a bea<div><br /></div><div>eu beau</div><div>tu bei</div><div>el ea bea</div>'
      ],
      'flags': 0,
      'guid': 'nRysuV2z&@',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I\'m going to ___, do you want anything?',
        'merg la ____, vrei ceva?'
      ],
      'flags': 0,
      'guid': 'q.>P.F3=^)',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'would you like something to drink?',
        'vrei ceva de băut?'
      ],
      'flags': 0,
      'guid': ')AA~R',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Stupid',
        'prost'
      ],
      'flags': 0,
      'guid': 'M8%Ed`>HB#',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'tired',
        'obosit'
      ],
      'flags': 0,
      'guid': 'evsnu.[ICQ',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'see you soon!',
        'Pe curând!'
      ],
      'flags': 0,
      'guid': 'hi]_pepiWV',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'you are my [girl]friend',
        'esti prietena mea'
      ],
      'flags': 0,
      'guid': 'MiGFDtk3..',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'we are friends',
        'suntem prietenii'
      ],
      'flags': 0,
      'guid': 'sgIGlG<3s@',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'what are you saying to me?',
        'ce Îmi spui?'
      ],
      'flags': 0,
      'guid': 'm1G/5#@@W}',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'very',
        'foarte'
      ],
      'flags': 0,
      'guid': 'kjm+g2E}x%',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'because',
        'pentru că'
      ],
      'flags': 0,
      'guid': 'qc@MJ',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'because (formal)',
        'deoarece'
      ],
      'flags': 0,
      'guid': 'AUZ+2',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'bar',
        'bar'
      ],
      'flags': 0,
      'guid': '$N57P',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'en: cantine',
        'cantină'
      ],
      'flags': 0,
      'guid': 'jW!M5',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'train station',
        'gară'
      ],
      'flags': 0,
      'guid': 'Sx$nE',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'I hug you',
        '[eu] te îmbrățișez'
      ],
      'flags': 0,
      'guid': '|1R$Epnl%',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'a hug',
        '<div>Îmbrățișare</div>'
      ],
      'flags': 0,
      'guid': 'prrwh$N7e)',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'hugs',
        '<div>Îmbrățișări</div>'
      ],
      'flags': 0,
      'guid': 'oj1MdaSNO2',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'to do',
        '<div>Eu fac</div><div>tu faci</div><div>el/ea face</div>'
      ],
      'flags': 0,
      'guid': 'v}HO+*d6FM',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'how are you? (requires actual response of how you\'re feeling)',
        'Cum ești?'
      ],
      'flags': 0,
      'guid': 'D|2qs^l-H]',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'how are you?&nbsp;<div><br /></div><div>Greeting or question(s) depending on context. May not get an answer.</div>',
        '<div>Ce faci?</div>'
      ],
      'flags': 0,
      'guid': 'MvYe<}K446',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'what are you doing? clarifying specifying an action, not a greeting',
        '<div>ce faci acum?</div>'
      ],
      'flags': 0,
      'guid': 'f*Kb^tOZKz',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'a romanian (female)',
        'româncă'
      ],
      'flags': 0,
      'guid': 'v`^Tb!/-Zg',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'a Romanian (male)',
        'român'
      ],
      'flags': 0,
      'guid': 'h>q=%)f,PW',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Merry Christmas',
        'Crăciun fericit!'
      ],
      'flags': 0,
      'guid': 'AJ6m+XX=33',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    },
    {
      '__type__': 'Note',
      'data': '',
      'fields': [
        'Happy New Year!',
        'La mulți ani!'
      ],
      'flags': 0,
      'guid': 'BKYB=5#{DQ',
      'note_model_uuid': '287b0ba6-ffc4-11e7-9e35-9801a7a7bdc7',
      'tags': [
        'Romanian'
      ]
    }
  ]
}