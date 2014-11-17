var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp
    .service('KeynotesService', function(){
        var keynotes = [
                        {
                          photo : 'img/portrait_ag.png',
                          name : 'Alexandre GERARD',
                          text1 : 'Alexandre GERARD est PDG de la société Chrono FLEX, société fondée en 1995 et leader national du service mobile de dépannage de flexibles hydrauliques.',
                          text2 : '\"Nous avons transformé notre entreprise porte-avions en une armada de Speed Boat !\". C\'est le sentiment qu\'a aujourd\'hui Alexandre, après 3 ans d\'une vraie \"libération\" de l\'entreprise. L\'objectif : ne jamais revivre la situation de 2009 ou après 13 ans de croissance ininterrompue l\'entreprise perd 34 % de son chiffre d\'affaires avec pour conséquence des licenciements.',
                          text3 : 'Un chef d\'entreprise devenu \"entraîneur d\'entraîneurs\", manager par \"la vision et les valeurs\", travailler à améliorer l\'environnement plutôt qu\'incriminer les individus, miser sur la confiance et la responsabilisation plutôt que les consignes et le contrôle. Il semble qu\'un changement agile d\'entreprise, ça ressemblerait à ça.'
                        },
                        {
                          photo : 'img/portrait_fb.png', 
                          name : 'François BEAUREGARD',
                          text1 : 'François est président et fondateur de Pyxis. Animé d\'une passion pour le développement logiciel, il souhaite participer à des projets de développement logiciel dont les résultats sont exceptionnels tout en maximisant la qualité de vie et la satisfaction personnelle de tous les intervenants.',
                          text3 : 'En juillet 2002, avec des collègues de Pyxis, il a fondé Agile Montréal, un groupe d\'intérêt sur les méthodes de développement agiles, et y fait des présentations régulièrement. De plus, il a donné plusieurs conférences à Agile Tour, au PMI, à IIBA et lors d\'événements agiles internationaux.',
                          text2: 'Formateur certifié en Management 3.0, François agit comme accompagnateur, formateur, facilitateur et conseiller expert pour des entreprises désirant améliorer leur productivité en développement informatique et adopter une approche agile.'
                        }
                    ];

        this.get = function() {
            return keynotes;
        }
    });