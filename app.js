/**
 * Application de Guidage Intégral : John Gray
 * "Comment obtenir ce que nous désirons et apprécier ce que nous possédons"
 * (How to Get What You Want and Want What You Have)
 */

// ==========================================
// 1. LE CODEX DU LIVRE (Synthèse Chapitre par Chapitre)
// ==========================================
const BOOK_CODEX = [
  {
    part: "Introduction & Fondations",
    title: "Le Syndrome de l'Herbe Plus Verte Ailleurs",
    summary: "Pourquoi nous courons après des chimères extérieures et comment réconcilier succès extérieur et bonheur intérieur.",
    keyTakeaways: [
      "Le succès extérieur sans paix intérieure est une coquille vide qui engendre épuisement, anxiété et addiction.",
      "Le vrai bonheur ne consiste pas seulement à obtenir ce que nous désirons, mais à aimer et apprécier ce que nous possédons déjà.",
      "Vouloir ce que l'on a n'est pas de la résignation passive : c'est l'alchimie spirituelle qui libère la créativité et attire naturellement le succès.",
      "Tant que nous cherchons à remplir notre vide intérieur par des trophées extérieurs (argent, statut, partenaire parfait), nous restons prisonniers de l'insatisfaction chronique."
    ],
    practices: "Exercice du miroir intérieur : faire l'inventaire de ce que l'on possède déjà sans chercher à le comparer à la vie d'autrui."
  },
  {
    part: "Première Partie",
    title: "Définir ses Intentions Réelles & Reconnecter l'Âme",
    summary: "Comment clarifier où nous en sommes dans notre vie et identifier ce que notre âme désire vraiment vs les exigences de l'Ego.",
    keyTakeaways: [
      "Les Désirs de l'Ego naissent de la peur du manque, du besoin de validation, de la comparaison sociale et de la rancœur.",
      "Les Désirs de l'Âme naissent de la joie pure, de l'expansion naturelle, de l'amour et de l'envie de contribuer au bien commun.",
      "Lorsqu'un désir d'ego est assouvi, le soulagement est éphémère. Lorsqu'un désir d'âme est nourri, la plénitude persiste même pendant les épreuves.",
      "La clarté d'intention demande d'accepter d'abord la réalité présente sans la blâmer."
    ],
    practices: "Questionnaire d'alignement intérieur : évaluer chaque projet pour vérifier s'il nous apporte la joie ou s'il tente d'acheter l'approbation d'autrui."
  },
  {
    part: "Deuxième Partie",
    title: "Obtenir ce dont nous avons Besoin : Les 10 Réservoirs d'Amour",
    summary: "La cartographie complète des 10 besoins affectifs humains et la fin de la dépendance affective.",
    keyTakeaways: [
      "La plus grande erreur dans les relations humaines est d'exiger d'une seule personne (souvent le conjoint) qu'elle remplisse tous nos réservoirs d'amour.",
      "Il existe 10 réservoirs distincts : Spirituel, Parental, Proches/Amis, Pairs, Amour de Soi, Couple/Romance, Soin d'Autrui, Communauté, Contribution au Monde, et Mission d'Âme.",
      "Lorsqu'un réservoir précis est vide, chercher à le compenser par un autre (par exemple combler un manque spirituel par la surconsommation ou un manque parental par son conjoint) crée des drames relationnels.",
      "Chacun est responsable de repérer quel réservoir a soif et d'entreprendre l'action spécifique pour le réapprovisionner."
    ],
    practices: "Le Bilan hebdomadaire des 10 Réservoirs : auto-évaluation chiffrée et plan d'action ciblé pour le réservoir le plus bas."
  },
  {
    part: "Troisième Partie",
    title: "Obtenir ce que nous Désirons : Les 5 Lois de Concrétisation",
    summary: "Comment agir dans le monde matériel pour réussir sans sacrifier sa paix intérieure.",
    keyTakeaways: [
      "Loi 1 - L'Intention Claire : Savoir précisément ce que l'on veut, sans signaux contradictoires.",
      "Loi 2 - L'Appréciation du Présent : Bénir là où nous sommes actuellement. C'est l'ancrage qui permet de s'élever.",
      "Loi 3 - L'Action Alignée : Poser des actes quotidiens enthousiastes, sans crispation ni angoisse de performance.",
      "Loi 4 - Le Détachement Confiant : Lâcher-prise sur le contrôle absolu du 'comment' et du timing.",
      "Loi 5 - L'Identité Souveraine : Se souvenir que notre valeur intrinsèque ne grandit ni ne diminue avec nos succès matériels."
    ],
    practices: "La méthode des petits pas quotidiens inspirés (15 minutes d'action sans attente de perfection)."
  },
  {
    part: "Quatrième Partie",
    title: "Éliminer les Blocages : L'Alchimie de la Lettre des Sentiments",
    summary: "Guérir les blessures d'enfance et dissoudre les 12 blocages psychologiques grâce à l'expression émotionnelle complète.",
    keyTakeaways: [
      "Les 12 blocages (blâme, anxiété, procrastination, culpabilité, etc.) sont des mécanismes de défense appris dans l'enfance pour ne pas ressentir la douleur d'un amour refusé.",
      "On ne peut pas dissoudre une émotion négative en la niant ou par une pensée positive forcée. Il faut la traverser dans l'ordre physiologique exact.",
      "La Lettre des Sentiments explore 5 niveaux : 1. Colère & Frustration $\\rightarrow$ 2. Tristesse & Déception $\\rightarrow$ 3. Peur & Vulnérabilité $\\rightarrow$ 4. Regret & Responsabilité $\\rightarrow$ 5. Amour, Pardon & Gratitude.",
      "La Lettre Réponse Réparatrice permet au cerveau émotionnel d'entendre enfin les paroles rassurantes qu'il attendait depuis l'enfance."
    ],
    practices: "L'atelier de rédaction de la Lettre des Sentiments en cas de conflit relationnel ou de blocage personnel."
  },
  {
    part: "Cinquième Partie",
    title: "La Méditation du Cœur & Vivre dans l'Abondance",
    summary: "Comment apaiser le système nerveux par la présence au cœur et maintenir un état de grâce permanent.",
    keyTakeaways: [
      "La méditation n'est pas un exercice intellectuel mais une communion avec la Source de vie.",
      "En respirant consciemment dans l'espace du cœur, le corps sécrète les hormones de sécurité et dissout le cortisol du stress.",
      "L'état de grâce s'entretient par la pratique quotidienne de la gratitude : reconnaître 3 bénédictions concrètes chaque jour transforme la biochimie du cerveau.",
      "Celui qui sait apprécier ce qu'il a vit déjà dans l'abondance, et le monde extérieur s'aligne naturellement sur sa fréquence."
    ],
    practices: "Respiration du cœur (5s inspire / 5s expire) pendant 5 à 10 minutes chaque matin."
  }
];

// ==========================================
// 2. LES 10 RÉSERVOIRS D'AMOUR (Données Approfondies)
// ==========================================
const LOVE_TANKS_DATA = [
  {
    id: 'spiritual',
    name: '1. Amour Spirituel & Connexion à la Source',
    subtitle: 'Dieu, l\'Univers ou la Conscience Supérieure',
    icon: 'sparkles',
    desc: 'La source fondamentale de paix et de sécurité existentielle. Selon John Gray, sans connexion spirituelle quotidienne, nous projetons une attente démesurée de complétude sur notre partenaire ou nos succès, ce qui crée dépendance et déception inévitable.',
    childhoodRoot: 'Sentiment d\'avoir dû affronter le monde seul, absence d\'un sentiment d\'ordre ou de bienveillance cosmique dans l\'environnement familial.',
    emptySign: 'Sentiment de vide existentiel, angoisse diffuse, agitation mentale incessante, peur de la mort ou de l\'avenir.',
    actionTips: [
      'Pratiquer 10 à 15 minutes de méditation du cœur chaque matin au réveil.',
      'S\'accorder des moments de silence complet et de contemplation dans la nature.',
      'Pratiquer le lâcher-prise : prononcer intérieurement "Je fais confiance à la vie pour guider mes pas".'
    ],
    questions: [
      "Ressentez-vous une paix profonde même lorsque les circonstances extérieures sont agitées ?",
      "Avez-vous une pratique quotidienne de méditation, de prière ou de recueillement silencieux ?",
      "Avez-vous confiance en l'existence d'un sens supérieur à votre parcours de vie ?"
    ],
    defaultScore: 60
  },
  {
    id: 'parents',
    name: '2. Amour Parental & Réconciliation',
    subtitle: 'Lien aux parents et aux figures d\'autorité',
    icon: 'heart-handshake',
    desc: 'Guérir le besoin d\'approbation parentale. Même adultes, ou même si les parents sont décédés ou éloignés, le sentiment d\'avoir été aimé inconditionnellement ou le pardon profond envers eux libère notre confiance.',
    childhoodRoot: 'Critiques fréquentes, attentes irréalistes de performance, amour conditionné aux bonnes notes ou à l\'obéissance.',
    emptySign: 'Besoin compulsif de prouver sa valeur, rébellion contre l\'autorité, sensation de ne jamais être assez bien.',
    actionTips: [
      'Rédiger une Lettre des Sentiments adressée à ses parents pour évacuer les déceptions d\'enfance.',
      'Pratiquer l\'auto-maternage et l\'auto-paternage : se donner à soi-même la validation qu\'on attendait d\'eux.',
      'Reconnaître qu\'ils ont agi avec les limites de leur propre histoire et de leurs blessures.'
    ],
    questions: [
      "Pouvez-vous penser à vos parents sans rancœur ni serrement dans la poitrine ?",
      "Vous sentez-vous libre de vivre selon vos propres normes sans chercher leur approbation tacite ?",
      "Êtes-vous capable de vous féliciter chaleureusement comme un parent aimant ?"
    ],
    defaultScore: 50
  },
  {
    id: 'family_friends',
    name: '3. Amour des Proches & Convivialité',
    subtitle: 'Famille de cœur, amis fidèles, rire et légèreté',
    icon: 'users',
    desc: 'L\'espace privilégié où l\'on peut ôter son armure professionnelle, rire sans retenue, célébrer des plaisirs simples et se sentir accepté tel que l\'on est.',
    childhoodRoot: 'Ambiance familiale rigide ou conflictuelle où la détente et le jeu étaient considérés comme futiles ou coupables.',
    emptySign: 'Isolement affectif, sérieux excessif, sentiment de porter seul le poids de l\'existence.',
    actionTips: [
      'Planifier des soirées ou moments de détente sans aucun objectif de productivité.',
      'Appeler un ami de confiance juste pour échanger des nouvelles chaleureuses.',
      'Partager un bon repas en tête-à-tête sans écrans ni sujets anxiogènes.'
    ],
    questions: [
      "Avez-vous des amis à qui vous pouvez vous confier en totale vulnérabilité ?",
      "Riez-vous régulièrement et spontanément au cours de votre semaine ?",
      "Prenez-vous du temps pour vous détendre avec vos proches sans culpabilité ?"
    ],
    defaultScore: 55
  },
  {
    id: 'peers',
    name: '4. Amour des Pairs & Partage d\'Objectifs',
    subtitle: 'Collègues, mentors, partenaires professionnels',
    icon: 'briefcase',
    desc: 'Le sentiment d\'appartenance à un cercle qui partage nos aspirations professionnelles, intellectuelles ou artistiques et valide nos compétences.',
    childhoodRoot: 'Rivalités fraternelles mal gérées ou brimades scolaires ayant installé la croyance que les pairs sont des rivaux dangereux.',
    emptySign: 'Syndrome de l\'imposteur, méfiance envers les collègues, solitude entrepreneuriale aiguë.',
    actionTips: [
      'Rejoindre un groupe de réflexion (mastermind) ou une communauté de passionnés.',
      'Célébrer ouvertement les accomplissements de ses pairs sans comparaison jalouse.',
      'Échanger régulièrement avec des personnes qui partagent la même vision créative.'
    ],
    questions: [
      "Vous sentez-vous respecté(e) et reconnu(e) par vos collègues ou confrères ?",
      "Partagez-vous facilement vos idées sans craindre d'être jugé(e) ou plagié(e) ?",
      "Trouvez-vous de l'émulation saine au contact de vos pairs ?"
    ],
    defaultScore: 50
  },
  {
    id: 'self',
    name: '5. Amour de Soi & Respect de ses Limites',
    subtitle: 'Intégrité, auto-compassion et écoute du corps',
    icon: 'shield-check',
    desc: 'Prendre soin de son corps, de son temps et de son énergie. Savoir dire non fermement aux exigences d\'autrui pour honorer son propre équilibre.',
    childhoodRoot: 'Message inculqué : "Penser à soi est égoïste", devoir s\'oublier pour satisfaire les adultes.',
    emptySign: 'Épuisement chronique (burnout), culpabilité à se reposer, auto-critique interne destructrice.',
    actionTips: [
      'Apprendre à dire : "Non, je ne suis pas disponible pour cela en ce moment" avec bienveillance.',
      'Offrir à son corps un sommeil réparateur, une alimentation vivante et de l\'exercice doux.',
      'Remplacer la petite voix intérieure critique par des encouragements affectueux.'
    ],
    questions: [
      "Savez-vous vous reposer sans ressentir le besoin de vous justifier ?",
      "Vous traitez-vous avec douceur et bienveillance lorsque vous commettez une erreur ?",
      "Prenez-vous soin régulièrement de votre santé et de votre confort personnel ?"
    ],
    defaultScore: 65
  },
  {
    id: 'romance',
    name: '6. Amour Amoureux & Intimité de Couple',
    subtitle: 'Partenaire de vie, romance, tendresse et sensualité',
    icon: 'flame',
    desc: 'L\'intimité émotionnelle, physique et la vulnérabilité avec un partenaire. John Gray rappelle qu\'on ne peut exiger d\'un partenaire qu\'il compense le vide des 9 autres réservoirs.',
    childhoodRoot: 'Témoin de conflits parentaux violents ou blessures d\'abandon lors des premières histoires amoureuses.',
    emptySign: 'Dépendance affective, reproches perpétuels envers le conjoint, peur panique du rejet ou de l\'engagement.',
    actionTips: [
      'Créer des moments privilégiés à deux (rendez-vous amoureux réguliers sans parler des soucis logistiques).',
      'Partager ses sentiments intimes avec la méthode de la Lettre des Sentiments sans accuser l\'autre.',
      'Exprimer chaque jour 3 gratitudes précises envers son partenaire.'
    ],
    questions: [
      "Vous sentez-vous aimé(e) et désiré(e) dans votre relation amoureuse ?",
      "Pouvez-vous exprimer vos besoins affectifs sans utiliser le reproche ou la bouderie ?",
      "Laissez-vous à votre partenaire la liberté d'être imparfait(e) sans lui retirer votre amour ?"
    ],
    defaultScore: 45
  },
  {
    id: 'caring_others',
    name: '7. Prendre Soin & Donner de l\'Amour',
    subtitle: 'Enfants, protégés, animaux de compagnie, nature',
    icon: 'baby',
    desc: 'L\'épanouissement profond qui naît du don inconditionnel : guider un enfant, chérir un animal, soigner des plantes ou apporter du réconfort.',
    childhoodRoot: 'Manque d\'opportunités de prendre soin d\'autrui ou au contraire parentification précoce vécue comme un fardeau.',
    emptySign: 'Nombrilisme, sentiment de stérilité intérieure, sensation que rien ne compte en dehors de son propre petit confort.',
    actionTips: [
      'Passer du temps attentif et tendre avec un enfant ou un animal de compagnie.',
      'Prendre soin de plantes, d\'un potager ou de son jardin avec amour.',
      'Proposer son aide désintéressée à une personne vulnérable.'
    ],
    questions: [
      "Ressentez-vous la joie pure de donner sans attendre de réciprocité immédiate ?",
      "Avez-vous un être (enfant, protégé, animal) envers qui vous éprouvez une affection inconditionnelle ?",
      "Trouvez-vous du ressourcement dans le soin apporté à la vie qui vous entoure ?"
    ],
    defaultScore: 70
  },
  {
    id: 'community',
    name: '8. Service Communautaire & Entraide Locale',
    subtitle: 'Quartier, voisinage, associations, engagement citoyen',
    icon: 'home',
    desc: 'L\'ancrage dans son tissu local. Se sentir membre actif et solidaire d\'un groupe de proximité.',
    childhoodRoot: 'Déménagements incessants dans l\'enfance ou sentiment d\'être exclu de la communauté locale.',
    emptySign: 'Aliénation moderne, cynisme envers la société, sentiment d\'impuissance et d\'inutilité citoyenne.',
    actionTips: [
      'Participer à une initiative d\'entraide dans son quartier ou sa commune.',
      'Rendre un service spontané à un voisin âgé ou isolé.',
      'Saluer et échanger quelques mots bienveillants avec les commerçants de proximité.'
    ],
    questions: [
      "Connaissez-vous vos voisins et vous sentez-vous intégré(e) dans votre lieu de vie ?",
      "Participez-vous occasionnellement à des activités associatives ou d'entraide locale ?",
      "Avez-vous le sentiment d'appartenir à une collectivité solidaire ?"
    ],
    defaultScore: 40
  },
  {
    id: 'world',
    name: '9. Contribution au Monde & Grand Impact',
    subtitle: 'Création de valeur, humanité, écologie, art',
    icon: 'globe',
    desc: 'Apporter sa pierre à l\'évolution du monde par ses créations, ses innovations, sa vision éthique ou son engagement humanitaire.',
    childhoodRoot: 'Sentiment précoce d\'impuissance face aux malheurs du monde, ou rêves d\'enfant rabroués par des adultes désabusés.',
    emptySign: 'Impression que la vie n\'a pas de portée durable, frustration créative intense, sentiment de gâchis.',
    actionTips: [
      'Consacrer chaque semaine du temps à un projet qui dépasse votre cercle personnel.',
      'Partager votre savoir, vos écrits ou vos créations artistiques pour inspirer autrui.',
      'Adopter des actions concrètes pour préserver la biosphère et la justice sociale.'
    ],
    questions: [
      "Avez-vous le sentiment que votre travail ou vos créations améliorent la vie d'autres personnes ?",
      "Votre engagement quotidien est-il en accord avec vos idéaux pour l'humanité ?",
      "Laissez-vous une trace positive dans le monde qui vous entoure ?"
    ],
    defaultScore: 50
  },
  {
    id: 'divine_purpose',
    name: '10. Mission d\'Âme & Dévotion Suprême',
    subtitle: 'L\'accomplissement du dessein de votre vie',
    icon: 'compass',
    desc: 'L\'union ultime où vous devenez l\'instrument d\'un bien supérieur. Vous servez la vie avec tout votre cœur et acceptez avec sérénité votre destinée.',
    childhoodRoot: 'Avoir été contraint d\'adopter un destin tracé par les parents au détriment de sa vocation naturelle.',
    emptySign: 'Crise de milieu de vie, sentiment d\'errer dans une existence absurde, angoisse spirituelle.',
    actionTips: [
      'Identifier vos dons uniques et les mettre au service de la vie.',
      'Aligner vos choix professionnels et matériels sur vos valeurs spirituelles fondamentales.',
      'Pratiquer l\'abandon confiant : "Que ma vie soit un instrument de paix et d\'amour".'
    ],
    questions: [
      "Avez-vous le sentiment d'accomplir ce pour quoi vous êtes venu(e) sur Terre ?",
      "Ressentez-vous une guidance intérieure claire lors de vos grandes décisions de vie ?",
      "Éprouvez-vous un sentiment de gratitude absolue pour votre existence ?"
    ],
    defaultScore: 55
  }
];

// ==========================================
// 3. LES 12 BLOCAGES AU SUCCÈS PERSONNEL (John Gray)
// ==========================================
const BLOCKS_DATA = [
  {
    id: 'blame',
    name: '1. Le Blâme (Blame)',
    category: 'Colère refoulée',
    description: 'Accuser les autres, les circonstances extérieures, la politique ou le passé pour son mal-être actuel.',
    rootCause: 'Peur d\'admettre sa propre vulnérabilité et refus inconscient d\'assumer la responsabilité de sa guérison.',
    hiddenLayers: {
      anger: "J'en veux à [Nom] d'avoir tout gâché et de ne pas m'avoir soutenu.",
      sadness: "Je suis blessé(e) et triste d'avoir été trahi(e) ou ignoré(e).",
      fear: "J'ai peur d'être impuissant(e) à changer ma situation par moi-même.",
      regret: "Je regrette d'avoir remis tout mon pouvoir entre ses mains."
    },
    antidote: 'Reprendre son pouvoir personnel : "Les autres ont pu me blesser, mais c\'est à moi qu\'incombe la responsabilité sacrée de mon bonheur aujourd\'hui."',
    mantra: 'Je pardonne au passé et je reprends les rênes de mon destin.',
    journalPrompt: 'Qui est-ce que je blâme en ce moment ? Quelle colère refoulée ai-je besoin d\'exprimer sans filtre pour m\'en libérer ?'
  },
  {
    id: 'depression',
    name: '2. La Dépression (Depression)',
    category: 'Chagrin & Deuil non fait',
    description: 'Baisse de l\'énergie vitale, sentiment d\'impuissance, sommeil lourd ou insomnie, anesthésie des émotions.',
    rootCause: 'Besoins d\'amour négligés depuis l\'enfance et deuil bloqué : on a appris à étouffer ses larmes pour ne pas déranger.',
    hiddenLayers: {
      anger: "Je suis furieux(se) contre la vie d'être si injuste et épuisante.",
      sadness: "J'ai un immense chagrin enfoui que je n'ai jamais osé pleurer.",
      fear: "J'ai peur que personne ne m'aime jamais pour qui je suis vraiment.",
      regret: "Je regrette de m'être abandonné(e) moi-même depuis si longtemps."
    },
    antidote: 'S\'autoriser à pleurer et traverser la tristesse enfouie au lieu de l\'anesthésier. Réapprovisionner doucement le réservoir d\'amour de soi.',
    mantra: 'Mes larmes sont des eaux sacrées qui nettoient mon cœur. La joie revient doucement.',
    journalPrompt: 'Quelle perte, quelle déception ou quelle solitude d\'enfance n\'ai-je pas encore pleurée ? De quoi mon cœur a-t-il faim ?'
  },
  {
    id: 'anxiety',
    name: '3. L\'Anxiété (Anxiety)',
    category: 'Peur de l\'avenir',
    description: 'Inquiétude chronique, scénarios catastrophes dans la tête, serrement thoracique et agitation perpétuelle.',
    rootCause: 'Illusion qu\'on doit tout contrôler tout seul pour survivre. Climat d\'insécurité ou d\'imprévisibilité dans l\'enfance.',
    hiddenLayers: {
      anger: "J'en ai assez de porter tout ce poids sur mes épaules sans aide.",
      sadness: "Je suis épuisé(e) et attristé(e) de devoir toujours être sur mes gardes.",
      fear: "J'ai peur de manquer d'argent, d'amour, ou de tout perdre du jour au lendemain.",
      regret: "Je regrette de ne pas faire confiance à la vie."
    },
    antidote: 'Méditation du cœur, ancrage dans le moment présent et foi : "Je contrôle mes actions d\'aujourd\'hui, je remets le résultat à l\'Univers."',
    mantra: 'Ici et maintenant, je suis en sécurité. L\'Univers pourvoit à mes besoins.',
    journalPrompt: 'Quelle est la peur sous-jacente que j\'essaie d\'éviter en anticipant le pire ? Comment puis-je m\'abandonner à la confiance ?'
  },
  {
    id: 'indifference',
    name: '4. L\'Indifférence & Apathie (Indifference)',
    category: 'Carapace émotionnelle',
    description: 'Désengagement, impression de "ne plus rien ressentir", cynisme, repli sur des distractions passives.',
    rootCause: 'Armure de protection forgée après une déception intolérable : "Si je ne désire rien, rien ne pourra plus me blesser".',
    hiddenLayers: {
      anger: "Je déteste avoir été si blessé(e) quand j'ai ouvert mon cœur autrefois.",
      sadness: "J'ai le cœur brisé par la perte de mon enthousiasme originel.",
      fear: "J'ai une peur panique de souffrir à nouveau si j'aime vraiment.",
      regret: "Je regrette d'avoir fermé la porte de mon cœur."
    },
    antidote: 'Oser rouvrir son cœur, accepter la vulnérabilité et se reconnecter à des petits désirs simples et sensoriels.',
    mantra: 'Mon cœur est assez fort pour ressentir à la fois la douleur et la joie de vivre.',
    journalPrompt: 'Qu\'est-ce qui me faisait vibrer d\'enthousiasme autrefois ? De quelle douleur passée cette apathie me protège-t-elle ?'
  },
  {
    id: 'judgment',
    name: '5. Le Jugement & la Critique (Judgment)',
    category: 'Rejet de soi projeté',
    description: 'Regard dur, moqueur ou intransigeant envers autrui ou envers soi-même. Recherche obsessionnelle des défauts.',
    rootCause: 'Éducation rigide où l\'amour était conditionné à une conduite irréprochable. On projette sur les autres la honte de ses propres failles.',
    hiddenLayers: {
      anger: "Je suis en colère contre l'incompétence et la négligence des gens.",
      sadness: "Ça me blesse profondément de voir tant d'imperfection et de rejet.",
      fear: "J'ai peur qu'on découvre mes propres faiblesses et qu'on me méprise.",
      regret: "Je regrette d'avoir été si impitoyable avec les erreurs d'autrui et les miennes."
    },
    antidote: 'Remplacer le jugement par la curiosité et la compassion. Chaque être humain livre une bataille invisible dont nous ignorons tout.',
    mantra: 'J\'accueille les faiblesses d\'autrui avec la même tendresse que mes propres maladresses.',
    journalPrompt: 'Sur quel sujet suis-je le plus intransigeant(e) envers les autres ? Quelle peur de mon imperfection cela masque-t-il ?'
  },
  {
    id: 'indecision',
    name: '6. L\'Indécision (Indecision)',
    category: 'Peur de l\'erreur',
    description: 'Hésitation sans fin, paralysie de l\'analyse, report du choix, demande d\'avis à dix personnes différentes.',
    rootCause: 'Peur viscérale d\'être rejeté, puni ou moqué en cas d\'erreur de décision dans le passé.',
    hiddenLayers: {
      anger: "J'en veux à ceux qui m'ont critiqué(e) et dévalorisé(e) quand je me suis trompé(e).",
      sadness: "Je suis triste de ne pas faire confiance à mon propre jugement.",
      fear: "J'ai peur de faire le mauvais choix et de gâcher ma vie irrémédiablement.",
      regret: "Je regrette de perdre tant de temps précieux à douter."
    },
    antidote: 'Reconnaître qu\'il n\'y a pas de mauvaise décision si l\'on apprend : "Toute décision m\'apporte la clarté et l\'expérience nécessaires."',
    mantra: 'Mon intuition est ma boussole. Je choisis avec confiance et la vie me soutient.',
    journalPrompt: 'Quel choix suis-je en train de différer ? Si j\'avais la certitude absolue que chaque issue m\'enrichira, que déciderais-je sur-le-champ ?'
  },
  {
    id: 'procrastination',
    name: '7. La Procrastination (Procrastination)',
    category: 'Résistance & Peur de l\'échec',
    description: 'Reporter au lendemain ce qui nous tient pourtant le plus à cœur. S\'occuper de tâches futiles pour éviter l\'essentiel.',
    rootCause: 'L\'Ego redoute le verdict du résultat extérieur et préfère saboter l\'action pour préserver son illusion de compétence.',
    hiddenLayers: {
      anger: "Je suis révolté(e) par la pression et les exigences démesurées qu'on m'impose.",
      sadness: "Je suis triste d'avoir si peu confiance en ma capacité d'aboutir.",
      fear: "J'ai peur de donner mon maximum et que cela ne soit pas suffisant.",
      regret: "Je regrette d'avoir différé mes rêves par peur d'échouer."
    },
    antidote: 'La règle des petits pas bienveillants : s\'engager sur 5 minutes d\'action imparfaite. Dissocier sa valeur personnelle de la perfection du travail.',
    mantra: 'L\'action imparfaite vaut mille fois mieux que la perfection imaginaire.',
    journalPrompt: 'Quel projet est-ce que je repousse ? Quelle petite action concrète et simple de 5 minutes puis-je accomplir aujourd\'hui ?'
  },
  {
    id: 'perfectionism',
    name: '8. Le Perfectionnisme (Perfectionism)',
    category: 'Amour conditionnel',
    description: 'Vouloir que tout soit irréprochable avant de se sentir en paix ou de montrer ses créations. Incapacité à déléguer.',
    rootCause: 'Croyance ancrée dans l\'enfance : "Si je suis parfait(e), on m\'aimera enfin et je serai à l\'abri du rejet et de la honte."',
    hiddenLayers: {
      anger: "Je déteste qu'on m'ait fait croire que je devais être sans défaut pour mériter l'amour.",
      sadness: "J'ai mal de m'imposer une telle torture mentale au quotidien.",
      fear: "J'ai peur qu'en découvrant mes imperfections, on me rejette.",
      regret: "Je regrette de ne pas avoir su apprécier la beauté de mes premiers essais."
    },
    antidote: 'Embrasser l\'imperfection bienveillante. Le succès naît de l\'itération authentique et vivante, non de la rigidité.',
    mantra: 'Je suis déjà digne d\'amour et de respect, exactement tel(le) que je suis.',
    journalPrompt: 'Quelle norme irréaliste est-ce que je m\'impose ? Comment puis-je m\'aimer dès aujourd\'hui dans mon imperfection ?'
  },
  {
    id: 'resentment',
    name: '9. Le Ressentiment (Resentment)',
    category: 'Amertume accumulée',
    description: 'Ruminer les torts passés, garder un registre secret des injustices subies, froideur affective distanciée.',
    rootCause: 'Attentes tacites jamais exprimées clairement, don forcé dans l\'espoir secret d\'un retour qui n\'est jamais venu.',
    hiddenLayers: {
      anger: "J'ai tant donné et je n'ai reçu que de l'ingratitude en retour !",
      sadness: "Je me sens utilisé(e), ignoré(e) et non reconnu(e) dans mes sacrifices.",
      fear: "J'ai peur d'être naïf(ve) et de me faire avoir encore une fois.",
      regret: "Je regrette de ne pas avoir posé mes limites dès le premier jour."
    },
    antidote: 'Écrire une Lettre des Sentiments pour évacuer l\'amertume toxique et apprendre à exprimer des demandes claires et directes sans chantage affectif.',
    mantra: 'Je libère la rancœur. Mon énergie vitale est trop précieuse pour être gaspillée dans le ressentiment.',
    journalPrompt: 'Envers qui ai-je de la rancœur accumulée ? Qu\'aurais-je dû exprimer clairement à l\'époque ?'
  },
  {
    id: 'self_pity',
    name: '10. L\'Auto-apitoiement (Self-Pity)',
    category: 'Victimisation',
    description: 'Se lamenter sur son sort : "Pourquoi cela n\'arrive-t-il qu\'à moi ?", attendre que quelqu\'un vienne nous sauver.',
    rootCause: 'Tentative inconsciente d\'obtenir de la sympathie, de l\'attention et des soins en restant faible et impuissant(e).',
    hiddenLayers: {
      anger: "Le sort s'acharne toujours sur moi, ce n'est pas juste !",
      sadness: "Je me sens tellement vulnérable, petit(e) et sans soutien dans ce monde froid.",
      fear: "J'ai peur de ne pas avoir la force de m'en sortir par mes propres moyens.",
      regret: "Je regrette de m'être complu(e) dans le rôle de victime."
    },
    antidote: 'Sortir de la posture de victime passive et réveiller le héros intérieur : "Personne ne viendra me sauver, et c\'est une magnifique nouvelle car je possède déjà tout le pouvoir nécessaire."',
    mantra: 'Je suis l\'artisan(e) conscient(e) et puissant(e) de ma propre existence.',
    journalPrompt: 'Dans quel domaine est-ce que je me plains sans agir ? Quel acte courageux puis-je poser pour reprendre le contrôle ?'
  },
  {
    id: 'confusion',
    name: '11. La Confusion Mentale (Confusion)',
    category: 'Brouillard d\'évitement',
    description: '"Je ne sais plus du tout ce que je veux", sensation de brouillard intellectuel persistant.',
    rootCause: 'Écran de fumée inconscient pour éviter de faire face à un conflit émotionnel douloureux ou à une vérité dérangeante.',
    hiddenLayers: {
      anger: "Je suis furieux(se) contre la situation qui m'oblige à faire un choix douloureux.",
      sadness: "Je suis triste car quelle que soit l'issue, je devrai renoncer à quelque chose.",
      fear: "J'ai peur des conséquences déstabilisantes si j'admets ce que je veux vraiment.",
      regret: "Je regrette d'avoir prétendu ne pas savoir."
    },
    antidote: 'Poser son mental et descendre dans son cœur. Écrire sans retenue : la clarté surgit dès qu\'on accepte d\'affronter la vérité émotionnelle.',
    mantra: 'La vérité libère mon esprit. Mon cœur sait exactement ce qui est bon pour moi.',
    journalPrompt: 'Quelle vérité inconfortable est-ce que j\'essaie d\'ignorer en prétendant être confus(e) ? Si j\'étais totalement honnête, que ferais-je ?'
  },
  {
    id: 'guilt',
    name: '12. La Culpabilité (Guilt)',
    category: 'Auto-punition',
    description: 'Sentiment profond d\'indignité, auto-sabotage inconscient pour expier des fautes réelles ou imaginaires, difficulté à recevoir du bonheur.',
    rootCause: 'Confusion tragique de l\'enfant entre "avoir commis une erreur" et "être fondamentalement mauvais(e) et indigne d\'amour".',
    hiddenLayers: {
      anger: "J'en veux à ceux qui m'ont fait porter la responsabilité de leur propre malheur.",
      sadness: "J'ai une peine immense d'avoir causé de la peine à quelqu'un que j'aimais.",
      fear: "J'ai peur d'être damné(e) ou puni(e) pour mes erreurs passées.",
      regret: "Je regrette du fond du cœur ce que j'ai fait ou n'ai pas su faire."
    },
    antidote: 'Le pardon de soi absolu. Transformer le remords stérile en réparation concrète et en compassion : "J\'ai fait du mieux que je pouvais avec le niveau de conscience que j\'avais alors."',
    mantra: 'Je me pardonne mes erreurs passées. Je mérite d\'aimer et d\'être aimé(e).',
    journalPrompt: 'Quelle erreur passée ne me suis-je pas encore pardonnée ? Comment puis-je clore ce chapitre avec compassion et réparation ?'
  }
];

// Modèles pré-remplis de Lettres des Sentiments pour situations types
const LETTER_TEMPLATES = [
  {
    title: "Guérir la blessure avec un parent (Père ou Mère)",
    recipient: "Mon Père / Ma Mère",
    topic: "Libération du besoin d'approbation et pardon d'enfance",
    anger: "Je suis en colère parce que tu ne m'as pas écouté(e) quand j'étais enfant. J'en ai assez d'avoir dû prouver ma valeur pour recevoir ton attention. Je déteste que tes critiques m'aient fait douter de moi.",
    sadness: "Ça me fait tellement mal d'avoir manqué de tes encouragements chaleureux. Je suis triste que nous n'ayons pas pu partager une relation plus complice et détendue.",
    fear: "J'avais peur de ne jamais être à la hauteur de tes exigences. J'avais peur que tu ne sois pas fier/fière de moi et de te décevoir.",
    regret: "Je regrette d'avoir gardé cette rancœur pendant tant d'années. Je regrette d'avoir parfois réagi avec agressivité ou distance pour me protéger.",
    love: "Je reconnais aujourd'hui que tu as fait du mieux que tu pouvais avec ce que tu avais toi-même reçu. Je te pardonne tes maladresses et je te libère de la dette de mon bonheur. Je te remercie pour la vie que tu m'as transmise.",
    response: "Mon enfant chéri(e),\nJ'ai lu ta lettre avec une immense émotion. Tu as entièrement raison : j'avais mes propres peurs et mes propres blessures, et je n'ai pas su t'apporter toute la douceur que tu méritais. Tu étais un enfant merveilleux et tu l'es toujours. Je suis infiniment fier/fière de la personne courageuse que tu es devenue. Vis ta vie pleinement, tu as tout mon amour."
  },
  {
    title: "Désamorcer une rancœur envers son partenaire de couple",
    recipient: "Mon/Ma Partenaire",
    topic: "Ressentiment accumulé et réouverture du cœur",
    anger: "Je suis en colère parce que j'ai l'impression de porter la charge du foyer seul(e). Je n'aime pas quand tu t'enfermes dans ton mutisme ou sur ton écran au lieu de me regarder.",
    sadness: "Je suis profondément triste de la distance qui s'est installée entre nous. Ça me blesse de ne plus me sentir désiré(e) et écouté(e) comme aux premiers jours.",
    fear: "J'ai peur que nous soyons devenus des colocataires. J'ai peur que nous ne sachions plus comment nous retrouver et que notre amour meure.",
    regret: "Je regrette de m'être aigri(e) et de t'avoir fait des reproches au lieu de t'exprimer calmement mes besoins. Je regrette de m'être fermé(e).",
    love: "Je me souviens de la beauté de ce qui nous unit. Je t'aime pour ta générosité et ton humour. Ce que je désire le plus au monde, c'est retrouver notre complicité et notre tendresse mutuelle.",
    response: "Mon amour,\nMerci d'avoir eu le courage d'écrire cette lettre. Tes mots me touchent au cœur. Je ne m'étais pas rendu compte à quel point tu te sentais seul(e) et débordé(e). Je t'aime et tu comptes plus que tout pour moi. Je veux qu'on réaménage du temps précieux rien que pour nous deux. Recommençons à nous écouter."
  },
  {
    title: "Lettre d'Auto-Pardon et de Libération du Perfectionnisme",
    recipient: "Moi-même",
    topic: "Arrêter l'auto-sabotage et s'aimer inconditionnellement",
    anger: "Je suis furieux(se) contre cette voix intérieure tyrannique qui me répète que je ne fais jamais assez, que je suis en retard, ou que je devrais être parfait(e).",
    sadness: "Je suis épuisé(e) et attristé(e) de m'être traité(e) avec une telle dureté pendant tant d'années. J'ai fait souffrir mon corps et mon esprit.",
    fear: "J'ai peur qu'en relâchant la pression, je devienne paresseux(se) ou que tout s'effondre autour de moi.",
    regret: "Je regrette d'avoir attendu d'obtenir des résultats extérieurs pour m'autoriser à respirer, à me détendre et à m'aimer.",
    love: "Je me pardonne toutes mes erreurs. Je m'accepte avec mes forces magnifiques et mes fragilités touchantes. Je choisis d'être mon/ma meilleur(e) ami(e) dès aujourd'hui.",
    response: "Mon cher moi,\nTu n'as plus rien à prouver. Tu es précieux(se) et digne d'amour simplement parce que tu existes. Respire, ralentis. Je serai toujours là pour t'encourager, te consoler et célébrer chaque petit pas avec fierté. Tout va bien."
  }
];

// Citations d'autorité tirées du livre de John Gray
const QUOTES = [
  {
    quote: "Le véritable succès consiste à obtenir ce que nous désirons tout en appréciant pleinement ce que nous possédons déjà.",
    ref: "Principe Fondateur"
  },
  {
    quote: "Attendre d'une seule personne qu'elle comble tous nos besoins d'amour est la cause première de la faillite des couples.",
    ref: "Les 10 Réservoirs d'Amour"
  },
  {
    quote: "On ne peut pas se débarrasser d'un sentiment négatif en le réprimant. On ne s'en libère qu'en le traversant jusqu'à retrouver l'amour.",
    ref: "L'Alchimie Émotionnelle"
  },
  {
    quote: "L'herbe n'est pas plus verte ailleurs ; elle est plus verte là où vous l'arrosez de votre présence et de votre gratitude.",
    ref: "Vouloir ce que l'on a"
  },
  {
    quote: "Le succès extérieur sans paix intérieure est une coquille vide. Mais la paix intérieure attire naturellement l'abondance extérieure.",
    ref: "Alignement de l'Âme"
  },
  {
    quote: "Toute colère non résolue dissimule une tristesse d'enfance. Toute tristesse dissimule une peur. Et toute peur dissimule un désir ardent d'amour.",
    ref: "La Carte des Émotions"
  }
];

// État Global de l'Application
let state = {
  currentTab: 'dashboard',
  tanks: {},
  letters: [],
  gratitudeLogs: [],
  selectedBlockId: 'blame',
  activeLetterStep: 1,
  currentLetterDraft: {
    recipient: '',
    topic: '',
    anger: '',
    sadness: '',
    fear: '',
    regret: '',
    love: '',
    response: '',
    createdAt: null
  },
  meditation: {
    timerSeconds: 300,
    remainingSeconds: 300,
    isRunning: false,
    timerInterval: null,
    audioEnabled: true
  }
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  initLucideIcons();
  setupNavigation();
  initDashboard();
  initCodex();
  initTanks();
  initBlocks();
  initLetterStudio();
  initDesiresQuiz();
  initMeditation();
  initGratitude();
  initBackupSystem();
});

// Sauvegarde & Restauration LocalStorage
function saveToLocalStorage() {
  localStorage.setItem('john_gray_app_state', JSON.stringify({
    tanks: state.tanks,
    letters: state.letters,
    gratitudeLogs: state.gratitudeLogs
  }));
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem('john_gray_app_state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.tanks) state.tanks = parsed.tanks;
      if (parsed.letters) state.letters = parsed.letters;
      if (parsed.gratitudeLogs) state.gratitudeLogs = parsed.gratitudeLogs;
    } catch (e) {
      console.error('Erreur chargement localStorage', e);
    }
  }

  LOVE_TANKS_DATA.forEach(tank => {
    if (state.tanks[tank.id] === undefined) {
      state.tanks[tank.id] = tank.defaultScore;
    }
  });
}

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Gestion de la navigation
function setupNavigation() {
  const navBtns = document.querySelectorAll('[data-tab-target]');
  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.getAttribute('data-tab-target');
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  state.currentTab = tabId;
  document.querySelectorAll('[data-tab-content]').forEach(panel => {
    panel.classList.add('hidden');
  });
  const activePanel = document.querySelector(`[data-tab-content="${tabId}"]`);
  if (activePanel) {
    activePanel.classList.remove('hidden');
  }

  document.querySelectorAll('[data-tab-target]').forEach(btn => {
    const isTarget = btn.getAttribute('data-tab-target') === tabId;
    btn.classList.toggle('bg-primary-light', isTarget);
    btn.classList.toggle('text-primary', isTarget);
    btn.classList.toggle('font-semibold', isTarget);
    btn.classList.toggle('text-gray-600', !isTarget);
  });

  if (tabId === 'tanks') {
    renderTanksChart();
  }
  initLucideIcons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// MODULE 1 : TABLEAU DE BORD
// ==========================================
function initDashboard() {
  renderRandomQuote();
  updateDashboardStats();
}

function renderRandomQuote() {
  const quoteEl = document.getElementById('daily-quote-text');
  const refEl = document.getElementById('daily-quote-ref');
  if (quoteEl && refEl) {
    const random = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    quoteEl.textContent = `« ${random.quote} »`;
    refEl.textContent = `— John Gray, ${random.ref}`;
  }
}

function updateDashboardStats() {
  const tankScores = Object.values(state.tanks);
  const avgTank = Math.round(tankScores.reduce((a, b) => a + b, 0) / tankScores.length);
  
  const tankAvgEl = document.getElementById('dash-tank-avg');
  if (tankAvgEl) tankAvgEl.textContent = `${avgTank}%`;

  const lettersCountEl = document.getElementById('dash-letters-count');
  if (lettersCountEl) lettersCountEl.textContent = state.letters.length;

  const gratitudeCountEl = document.getElementById('dash-gratitude-count');
  if (gratitudeCountEl) gratitudeCountEl.textContent = state.gratitudeLogs.length;

  let lowestTankId = Object.keys(state.tanks)[0];
  Object.keys(state.tanks).forEach(id => {
    if (state.tanks[id] < state.tanks[lowestTankId]) {
      lowestTankId = id;
    }
  });
  const lowestTank = LOVE_TANKS_DATA.find(t => t.id === lowestTankId);
  const lowestTankEl = document.getElementById('dash-lowest-tank');
  if (lowestTankEl && lowestTank) {
    lowestTankEl.textContent = lowestTank.name.split('.')[1].trim();
  }
}

// ==========================================
// MODULE CODEX : LE GUIDE DU LIVRE
// ==========================================
function initCodex() {
  const container = document.getElementById('codex-content-container');
  if (!container) return;

  container.innerHTML = BOOK_CODEX.map((ch, idx) => `
    <div class="p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-4 hover:border-amber-200 transition-smooth">
      <div class="flex items-center gap-2">
        <span class="px-3 py-1 rounded-full bg-primary-light text-primary text-[11px] font-bold uppercase tracking-wider">${ch.part}</span>
      </div>
      <h3 class="font-serif text-xl sm:text-2xl font-bold text-gray-900">${ch.title}</h3>
      <p class="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">${ch.summary}</p>
      
      <div class="space-y-2 pt-2 border-t border-gray-100">
        <h5 class="text-xs font-bold text-gray-800 uppercase tracking-wide flex items-center gap-1.5">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
          Enseignements Clés du Chapitre
        </h5>
        <ul class="space-y-2 text-xs text-gray-700">
          ${ch.keyTakeaways.map(t => `<li class="flex items-start gap-2"><i data-lucide="chevron-right" class="w-3.5 h-3.5 text-primary shrink-0 mt-0.5"></i> <span>${t}</span></li>`).join('')}
        </ul>
      </div>

      <div class="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-xs text-amber-950 flex items-start gap-2">
        <i data-lucide="sparkle" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
        <div>
          <span class="font-bold">Pratique recommandée par John Gray :</span> ${ch.practices}
        </div>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

// ==========================================
// MODULE 2 : LES 10 RÉSERVOIRS D'AMOUR
// ==========================================
let tanksChartInstance = null;

function initTanks() {
  const container = document.getElementById('tanks-sliders-container');
  if (!container) return;

  container.innerHTML = '';
  LOVE_TANKS_DATA.forEach(tank => {
    const val = state.tanks[tank.id] ?? 50;
    const item = document.createElement('div');
    item.className = 'p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-amber-200 transition-smooth space-y-4';
    item.innerHTML = `
      <div class="flex items-start justify-between gap-4">
        <div>
          <h4 class="font-bold text-gray-900 text-base font-serif">${tank.name}</h4>
          <p class="text-xs text-primary font-semibold">${tank.subtitle}</p>
        </div>
        <span id="tank-val-${tank.id}" class="px-3 py-1 text-xs font-bold rounded-full ${getScoreBadgeClass(val)}">${val}%</span>
      </div>
      
      <p class="text-xs text-gray-600 leading-relaxed">${tank.desc}</p>
      
      <div class="space-y-1">
        <div class="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
          <span>Carence critique</span>
          <span>Équilibre</span>
          <span>Abondance</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value="${val}" 
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          oninput="updateTankScore('${tank.id}', this.value)"
        />
      </div>

      <details class="text-xs text-gray-600 bg-gray-50 rounded-2xl p-4 cursor-pointer">
        <summary class="font-semibold text-gray-800 hover:text-primary flex items-center justify-between">
          <span>Analyse approfondie & Guide d'action</span>
          <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </summary>
        <div class="mt-3 space-y-3 pt-3 border-t border-gray-200">
          <div>
            <span class="font-bold text-amber-900 block mb-0.5">Blessure d'enfance originelle :</span>
            <p class="text-gray-700">${tank.childhoodRoot}</p>
          </div>
          <div>
            <span class="font-bold text-red-800 block mb-0.5">Symptôme quand ce réservoir est vide :</span>
            <p class="text-gray-700">${tank.emptySign}</p>
          </div>
          <div>
            <span class="font-bold text-emerald-800 block mb-1">Actions prescrites par John Gray :</span>
            <ul class="list-disc pl-4 space-y-1 text-gray-700">
              ${tank.actionTips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
          <div>
            <span class="font-bold text-gray-800 block mb-1">Questions d'auto-évaluation diagnostique :</span>
            <ul class="space-y-1 text-gray-600 italic pl-1">
              ${tank.questions.map(q => `<li>• « ${q} »</li>`).join('')}
            </ul>
          </div>
        </div>
      </details>
    `;
    container.appendChild(item);
  });
  renderTanksChart();
  initLucideIcons();
}

function getScoreBadgeClass(score) {
  if (score < 40) return 'bg-red-50 text-red-700 border border-red-200';
  if (score < 70) return 'bg-amber-50 text-amber-700 border border-amber-200';
  return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
}

window.updateTankScore = function(tankId, newVal) {
  const val = parseInt(newVal, 10);
  state.tanks[tankId] = val;
  saveToLocalStorage();

  const badge = document.getElementById(`tank-val-${tankId}`);
  if (badge) {
    badge.textContent = `${val}%`;
    badge.className = `px-3 py-1 text-xs font-bold rounded-full ${getScoreBadgeClass(val)}`;
  }

  updateTanksChart();
  updateDashboardStats();
};

function renderTanksChart() {
  const ctx = document.getElementById('tanksRadarChart');
  if (!ctx || !window.Chart) return;

  const labels = LOVE_TANKS_DATA.map(t => t.name.split('.')[1].split('&')[0].trim());
  const dataValues = LOVE_TANKS_DATA.map(t => state.tanks[t.id] ?? 50);

  if (tanksChartInstance) {
    tanksChartInstance.destroy();
  }

  tanksChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Plénitude (%)',
        data: dataValues,
        backgroundColor: 'rgba(155, 81, 52, 0.22)',
        borderColor: '#9b5134',
        pointBackgroundColor: '#9b5134',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#9b5134',
        borderWidth: 2.5,
        pointRadius: 4.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            display: false
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.06)'
          },
          angleLines: {
            color: 'rgba(0, 0, 0, 0.08)'
          },
          pointLabels: {
            font: {
              size: 11,
              family: 'Plus Jakarta Sans',
              weight: '600'
            },
            color: '#374151'
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function updateTanksChart() {
  if (!tanksChartInstance) return;
  tanksChartInstance.data.datasets[0].data = LOVE_TANKS_DATA.map(t => state.tanks[t.id] ?? 50);
  tanksChartInstance.update();
}

// ==========================================
// MODULE 3 : LES 12 BLOCAGES AU SUCCÈS
// ==========================================
function initBlocks() {
  const grid = document.getElementById('blocks-grid');
  if (!grid) return;

  grid.innerHTML = '';
  BLOCKS_DATA.forEach(block => {
    const card = document.createElement('div');
    const isSelected = block.id === state.selectedBlockId;
    card.className = `p-4 rounded-2xl border cursor-pointer transition-smooth ${isSelected ? 'border-primary bg-primary-light/50 shadow-sm' : 'border-gray-200 bg-white hover:border-amber-300'}`;
    card.onclick = () => selectBlock(block.id);
    card.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <span class="text-[10px] font-bold uppercase tracking-wider text-primary">${block.category}</span>
        <i data-lucide="sparkle" class="w-3.5 h-3.5 text-amber-500"></i>
      </div>
      <h4 class="font-bold text-gray-900 text-xs sm:text-sm mb-1">${block.name}</h4>
      <p class="text-[11px] text-gray-500 line-clamp-2">${block.description}</p>
    `;
    grid.appendChild(card);
  });

  renderSelectedBlockDetails();
  initLucideIcons();
}

function selectBlock(blockId) {
  state.selectedBlockId = blockId;
  initBlocks();
}

function renderSelectedBlockDetails() {
  const block = BLOCKS_DATA.find(b => b.id === state.selectedBlockId);
  const container = document.getElementById('selected-block-details');
  if (!container || !block) return;

  container.innerHTML = `
    <div class="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-primary-light flex items-center justify-center text-primary shadow-inner">
          <i data-lucide="unlock" class="w-6 h-6"></i>
        </div>
        <div>
          <span class="text-xs font-bold uppercase text-primary tracking-wider">${block.category}</span>
          <h3 class="font-serif text-2xl font-bold text-gray-900">${block.name}</h3>
        </div>
      </div>

      <p class="text-sm text-gray-700 leading-relaxed font-medium">${block.description}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1.5">
          <h5 class="font-bold text-xs text-amber-900 uppercase tracking-wide flex items-center gap-1.5">
            <i data-lucide="history" class="w-4 h-4 text-amber-700"></i>
            Origine de l'Enfance
          </h5>
          <p class="text-xs text-amber-950 leading-relaxed">${block.rootCause}</p>
        </div>

        <div class="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
          <h5 class="font-bold text-xs text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
            <i data-lucide="key" class="w-4 h-4 text-emerald-700"></i>
            L'Antidote de John Gray
          </h5>
          <p class="text-xs text-emerald-950 leading-relaxed">${block.antidote}</p>
        </div>
      </div>

      <!-- La Carte des Sentiments Masqués -->
      <div class="p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-3">
        <h5 class="font-bold text-xs text-gray-800 uppercase tracking-wide flex items-center gap-1.5">
          <i data-lucide="layers" class="w-4 h-4 text-primary"></i>
          La Carte des 4 Sentiments Masqués sous ce blocage
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div class="p-3 bg-red-50/70 border border-red-100 rounded-xl text-red-950">
            <strong>1. Colère :</strong> ${block.hiddenLayers.anger}
          </div>
          <div class="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-blue-950">
            <strong>2. Tristesse :</strong> ${block.hiddenLayers.sadness}
          </div>
          <div class="p-3 bg-amber-50/70 border border-amber-100 rounded-xl text-amber-950">
            <strong>3. Peur :</strong> ${block.hiddenLayers.fear}
          </div>
          <div class="p-3 bg-purple-50/70 border border-purple-100 rounded-xl text-purple-950">
            <strong>4. Regret :</strong> ${block.hiddenLayers.regret}
          </div>
        </div>
      </div>

      <!-- Mantra et Piste d'action -->
      <div class="p-5 rounded-2xl bg-primary-light/40 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span class="text-[11px] font-bold text-primary uppercase tracking-wider block mb-0.5">Mantra de Reconnexion de John Gray</span>
          <p class="font-serif italic text-sm text-gray-900 font-semibold">« ${block.mantra} »</p>
        </div>
        <button 
          onclick="startLetterForBlock('${block.name}')" 
          class="shrink-0 px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-smooth shadow-sm flex items-center gap-2"
        >
          <i data-lucide="feather" class="w-4 h-4"></i>
          Dissoudre par la Lettre
        </button>
      </div>
    </div>
  `;
  initLucideIcons();
}

window.startLetterForBlock = function(blockName) {
  state.currentLetterDraft.topic = `Libération du blocage : ${blockName}`;
  switchTab('letters');
  const topicInput = document.getElementById('letter-topic');
  if (topicInput) topicInput.value = state.currentLetterDraft.topic;
};

// ==========================================
// MODULE 4 : STUDIO DE LA LETTRE DES SENTIMENTS
// ==========================================
const LETTER_STEPS = [
  {
    step: 1,
    title: '1. Colère & Frustration',
    subtitle: 'Niveau 1 : Exprimer ce qui vous met en colère sans fard ni censure',
    prompt: 'Exprimez librement vos ressentiments, ce qui vous fâche, ce qui vous semble injuste.',
    starter: 'Je suis en colère parce que...\nJe déteste quand...\nJ\'en ai assez de...\nJe n\'aime pas que...',
    field: 'anger',
    color: 'red'
  },
  {
    step: 2,
    title: '2. Tristesse & Déception',
    subtitle: 'Niveau 2 : Descendre dans la blessure, le chagrin et les déceptions',
    prompt: 'Sous la colère se cache toujours la douleur. Qu\'est-ce qui vous fait de la peine ?',
    starter: 'Je suis triste que...\nÇa me blesse quand...\nJ\'ai été déçu(e) par...\nJ\'ai mal parce que...',
    field: 'sadness',
    color: 'blue'
  },
  {
    step: 3,
    title: '3. Peur & Vulnérabilité',
    subtitle: 'Niveau 3 : Révéler ses insécurités, doutes et angoisses profondes',
    prompt: 'Sous la tristesse se trouve la peur. De quoi avez-vous peur ? Que redoutez-vous de perdre ?',
    starter: 'J\'ai peur que...\nJe suis effrayé(e) par...\nJ\'ai peur de ne pas...\nJ\'angoisse à l\'idée de...',
    field: 'fear',
    color: 'amber'
  },
  {
    step: 4,
    title: '4. Regret & Responsabilité',
    subtitle: 'Niveau 4 : Reconnaître sa propre part et formuler ses regrets sincères',
    prompt: 'Sans vous accuser stérilement, quelle est votre part de responsabilité ? Qu\'auriez-vous aimé faire différemment ?',
    starter: 'Je regrette d\'avoir...\nJe suis désolé(e) pour...\nPardonne-moi d\'avoir...\nJ\'aurais aimé...',
    field: 'regret',
    color: 'purple'
  },
  {
    step: 5,
    title: '5. Amour, Pardon & Gratitude',
    subtitle: 'Niveau 5 : La reconnexion au cœur, au pardon et à la paix',
    prompt: 'Après avoir libéré les 4 couches de douleur, votre cœur s\'ouvre naturellement à l\'amour et au pardon.',
    starter: 'Je te pardonne pour...\nJe comprends maintenant que...\nJe te remercie pour...\nCe que je désire pour nous, c\'est...',
    field: 'love',
    color: 'emerald'
  },
  {
    step: 6,
    title: '6. Lettre Réponse & d\'Auto-compassion',
    subtitle: 'La Réponse Idéale (Ce que votre cœur aspire à entendre)',
    prompt: 'Écrivez la lettre de réponse que vous auriez tant aimé recevoir de la personne (ou de vous-même / de la Vie). Une réponse pleine de compréhension inconditionnelle.',
    starter: 'Cher/Chère [Mon Prénom],\nJe t\'entends et je comprends parfaitement ta douleur...\nTu avais le droit de ressentir cela...\nJe suis désolé(e) pour ce qui s\'est passé...\nJe t\'aime et je suis fier/fière de toi...',
    field: 'response',
    color: 'rose'
  }
];

function initLetterStudio() {
  renderLetterTemplatesList();
  renderLetterStep();
  renderLettersHistory();
}

function renderLetterTemplatesList() {
  const container = document.getElementById('letter-templates-container');
  if (!container) return;

  container.innerHTML = LETTER_TEMPLATES.map((tmpl, idx) => `
    <div class="p-4 rounded-2xl bg-gray-50 border border-gray-200/70 hover:border-primary/40 transition-smooth space-y-2">
      <div class="flex items-center justify-between">
        <h5 class="font-bold text-xs text-gray-900">${tmpl.title}</h5>
        <span class="text-[10px] text-gray-400 font-semibold uppercase">Modèle</span>
      </div>
      <p class="text-[11px] text-gray-500">${tmpl.topic}</p>
      <button 
        onclick="loadTemplate(${idx})" 
        class="w-full py-1.5 bg-white border border-gray-200 hover:border-primary text-gray-700 hover:text-primary rounded-xl text-[11px] font-bold transition-smooth"
      >
        Charger ce modèle dans l'atelier
      </button>
    </div>
  `).join('');
}

window.loadTemplate = function(templateIndex) {
  const tmpl = LETTER_TEMPLATES[templateIndex];
  if (!tmpl) return;

  state.currentLetterDraft = {
    recipient: tmpl.recipient,
    topic: tmpl.topic,
    anger: tmpl.anger,
    sadness: tmpl.sadness,
    fear: tmpl.fear,
    regret: tmpl.regret,
    love: tmpl.love,
    response: tmpl.response,
    createdAt: null
  };

  const recInput = document.getElementById('letter-recipient');
  if (recInput) recInput.value = tmpl.recipient;
  const topInput = document.getElementById('letter-topic');
  if (topInput) topInput.value = tmpl.topic;

  state.activeLetterStep = 1;
  renderLetterStep();
  alert(`Modèle « ${tmpl.title} » chargé. Vous pouvez naviguer dans les 6 étapes et adapter le texte avec votre propre histoire.`);
};

function renderLetterStep() {
  const stepData = LETTER_STEPS[state.activeLetterStep - 1];
  const container = document.getElementById('letter-step-content');
  if (!container || !stepData) return;

  const currentVal = state.currentLetterDraft[stepData.field] || '';

  container.innerHTML = `
    <div class="mb-6">
      <div class="flex items-center justify-between gap-4 mb-2">
        <span class="text-xs font-bold uppercase tracking-wider text-primary">Niveau ${stepData.step} sur 6</span>
        <span class="text-xs text-gray-400 font-medium">Alchimie Émotionnelle de John Gray</span>
      </div>
      <h3 class="text-xl font-serif font-bold text-gray-900">${stepData.title}</h3>
      <p class="text-xs text-gray-600 mt-1">${stepData.subtitle}</p>
    </div>

    <div class="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 mb-4 text-xs text-amber-900 flex items-start gap-2">
      <i data-lucide="info" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
      <div>
        <p class="font-medium">${stepData.prompt}</p>
        <p class="text-amber-800/80 mt-1">Vous pouvez utiliser les phrases amorces ci-dessous pour débloquer votre stylo.</p>
      </div>
    </div>

    <div class="space-y-2 mb-4">
      <label class="block text-xs font-bold text-gray-700">Votre expression émotionnelle sincère :</label>
      <textarea 
        id="step-textarea" 
        rows="8" 
        placeholder="${stepData.starter}" 
        class="w-full p-4 rounded-2xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm text-gray-800 leading-relaxed transition-smooth"
      >${currentVal}</textarea>
    </div>

    <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
      <button 
        onclick="prevLetterStep()" 
        ${state.activeLetterStep === 1 ? 'disabled class="opacity-40 cursor-not-allowed"' : 'class="hover:bg-gray-100"'}
        class="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-1.5 transition-smooth"
      >
        <i data-lucide="arrow-left" class="w-4 h-4"></i> Étape précédente
      </button>

      <div class="flex items-center gap-2">
        <button 
          onclick="fillStarters('${stepData.field}')" 
          class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition-smooth"
        >
          Insérer les amorces
        </button>
        ${state.activeLetterStep < 6 ? `
          <button 
            onclick="nextLetterStep()" 
            class="px-5 py-2 bg-primary text-white hover:bg-primary/90 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-smooth shadow-sm"
          >
            Étape suivante <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        ` : `
          <button 
            onclick="finalizeLetter()" 
            class="px-5 py-2 bg-emerald-600 text-white hover:bg-emerald-700 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-smooth shadow-sm"
          >
            <i data-lucide="check" class="w-4 h-4"></i> Enregistrer la Lettre Complète
          </button>
        `}
      </div>
    </div>
  `;

  renderStepPills();
  initLucideIcons();
}

function renderStepPills() {
  const pillsContainer = document.getElementById('letter-step-pills');
  if (!pillsContainer) return;

  pillsContainer.innerHTML = LETTER_STEPS.map(s => {
    const isCurrent = s.step === state.activeLetterStep;
    const isFilled = Boolean(state.currentLetterDraft[s.field]);
    return `
      <button 
        onclick="goToLetterStep(${s.step})"
        class="flex-1 min-w-[120px] p-3 rounded-xl text-left border transition-smooth ${
          isCurrent 
            ? 'bg-primary text-white border-primary shadow-sm' 
            : isFilled 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
        }"
      >
        <span class="text-[10px] uppercase font-bold block opacity-80">Niveau ${s.step}</span>
        <span class="text-xs font-bold truncate block">${s.title.split('.')[1]}</span>
      </button>
    `;
  }).join('');
}

window.goToLetterStep = function(stepNum) {
  saveCurrentStepText();
  state.activeLetterStep = stepNum;
  renderLetterStep();
};

window.nextLetterStep = function() {
  saveCurrentStepText();
  if (state.activeLetterStep < 6) {
    state.activeLetterStep++;
    renderLetterStep();
  }
};

window.prevLetterStep = function() {
  saveCurrentStepText();
  if (state.activeLetterStep > 1) {
    state.activeLetterStep--;
    renderLetterStep();
  }
};

function saveCurrentStepText() {
  const textarea = document.getElementById('step-textarea');
  if (textarea) {
    const stepData = LETTER_STEPS[state.activeLetterStep - 1];
    state.currentLetterDraft[stepData.field] = textarea.value;
  }
  const recInput = document.getElementById('letter-recipient');
  if (recInput) state.currentLetterDraft.recipient = recInput.value;
  const topInput = document.getElementById('letter-topic');
  if (topInput) state.currentLetterDraft.topic = topInput.value;
}

window.fillStarters = function(fieldName) {
  const textarea = document.getElementById('step-textarea');
  const stepData = LETTER_STEPS[state.activeLetterStep - 1];
  if (textarea && stepData) {
    if (!textarea.value.trim()) {
      textarea.value = stepData.starter;
    } else {
      textarea.value += '\n\n' + stepData.starter;
    }
    textarea.focus();
  }
};

window.finalizeLetter = function() {
  saveCurrentStepText();

  if (!state.currentLetterDraft.recipient) {
    state.currentLetterDraft.recipient = 'Moi-même / Une personne de mon passé';
  }
  if (!state.currentLetterDraft.topic) {
    state.currentLetterDraft.topic = 'Libération émotionnelle générale';
  }

  const newLetter = {
    id: 'letter_' + Date.now(),
    recipient: state.currentLetterDraft.recipient,
    topic: state.currentLetterDraft.topic,
    anger: state.currentLetterDraft.anger,
    sadness: state.currentLetterDraft.sadness,
    fear: state.currentLetterDraft.fear,
    regret: state.currentLetterDraft.regret,
    love: state.currentLetterDraft.love,
    response: state.currentLetterDraft.response,
    createdAt: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  };

  state.letters.unshift(newLetter);
  saveToLocalStorage();

  state.currentLetterDraft = {
    recipient: '',
    topic: '',
    anger: '',
    sadness: '',
    fear: '',
    regret: '',
    love: '',
    response: '',
    createdAt: null
  };
  state.activeLetterStep = 1;

  const recInput = document.getElementById('letter-recipient');
  if (recInput) recInput.value = '';
  const topInput = document.getElementById('letter-topic');
  if (topInput) topInput.value = '';

  renderLetterStep();
  renderLettersHistory();
  updateDashboardStats();

  alert('Magnifique ! Votre Lettre des Sentiments a été enregistrée. Selon John Gray, avoir traversé la colère, la tristesse, la peur et le regret vous ouvre les portes de la paix intérieure.');
};

function renderLettersHistory() {
  const container = document.getElementById('letters-history-list');
  if (!container) return;

  if (state.letters.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
        <i data-lucide="mail" class="w-8 h-8 text-gray-400 mx-auto mb-2"></i>
        <p class="text-xs text-gray-500 font-semibold">Aucune Lettre des Sentiments enregistrée pour le moment.</p>
        <p class="text-[11px] text-gray-400 mt-1">Commencez une rédaction ci-dessus ou chargez un modèle pour libérer un conflit.</p>
      </div>
    `;
    initLucideIcons();
    return;
  }

  container.innerHTML = state.letters.map((letter) => `
    <div class="p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:border-amber-200 transition-smooth">
      <div class="flex items-start justify-between gap-4 mb-2">
        <div>
          <span class="text-[10px] text-primary font-bold uppercase tracking-wider">${letter.createdAt}</span>
          <h4 class="font-serif font-bold text-gray-900 text-base">Destinataire : ${letter.recipient}</h4>
          <p class="text-xs text-gray-500 font-medium">Sujet : ${letter.topic}</p>
        </div>
        <div class="flex items-center gap-2">
          <button 
            onclick="viewLetterDetails('${letter.id}')" 
            class="px-3.5 py-1.5 bg-primary-light text-primary hover:bg-primary/20 text-xs font-bold rounded-xl transition-smooth flex items-center gap-1.5"
          >
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Lire
          </button>
          <button 
            onclick="deleteLetter('${letter.id}')" 
            class="p-2 text-gray-400 hover:text-red-600 rounded-xl hover:bg-red-50 transition-smooth"
            title="Supprimer"
          >
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
        <span class="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg font-semibold">
          <i data-lucide="check-circle" class="w-3 h-3"></i> 5 Niveaux Traversés
        </span>
        ${letter.response ? '<span class="text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-lg font-semibold">+ Lettre Réponse Réparatrice</span>' : ''}
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

window.viewLetterDetails = function(letterId) {
  const letter = state.letters.find(l => l.id === letterId);
  const modal = document.getElementById('letter-view-modal');
  const content = document.getElementById('letter-modal-content');
  if (!modal || !content || !letter) return;

  content.innerHTML = `
    <div class="p-6 sm:p-8 space-y-6 printable-letter">
      <div class="border-b border-gray-200 pb-4">
        <span class="text-xs text-primary font-bold uppercase tracking-wider">Lettre des Sentiments selon John Gray</span>
        <h2 class="text-2xl font-serif font-bold text-gray-900 mt-1">Destinataire : ${letter.recipient}</h2>
        <p class="text-xs text-gray-500 mt-1">Rédigée le ${letter.createdAt} — Sujet : ${letter.topic}</p>
      </div>

      <div class="space-y-4">
        <div class="p-4 rounded-2xl bg-red-50/70 border border-red-100">
          <h4 class="text-xs font-bold text-red-800 uppercase tracking-wider mb-1">1. Colère & Frustration</h4>
          <p class="text-xs text-gray-800 whitespace-pre-line leading-relaxed">${letter.anger || '(Aucun texte)'}</p>
        </div>

        <div class="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
          <h4 class="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">2. Tristesse & Déception</h4>
          <p class="text-xs text-gray-800 whitespace-pre-line leading-relaxed">${letter.sadness || '(Aucun texte)'}</p>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-100">
          <h4 class="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">3. Peur & Insécurité</h4>
          <p class="text-xs text-gray-800 whitespace-pre-line leading-relaxed">${letter.fear || '(Aucun texte)'}</p>
        </div>

        <div class="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
          <h4 class="text-xs font-bold text-purple-800 uppercase tracking-wider mb-1">4. Regret & Responsabilité</h4>
          <p class="text-xs text-gray-800 whitespace-pre-line leading-relaxed">${letter.regret || '(Aucun texte)'}</p>
        </div>

        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
          <h4 class="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">5. Amour, Pardon & Gratitude</h4>
          <p class="text-xs text-gray-800 whitespace-pre-line leading-relaxed">${letter.love || '(Aucun texte)'}</p>
        </div>

        ${letter.response ? `
          <div class="p-5 rounded-2xl bg-rose-50/80 border border-rose-200">
            <h4 class="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2">Lettre Réponse Réparatrice (Ce que mon âme désirait entendre)</h4>
            <p class="text-xs text-rose-950 whitespace-pre-line leading-relaxed italic">${letter.response}</p>
          </div>
        ` : ''}
      </div>

      <div class="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 no-print">
        <button 
          onclick="window.print()" 
          class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl flex items-center gap-1.5 transition-smooth"
        >
          <i data-lucide="printer" class="w-4 h-4"></i> Imprimer / Sauvegarder en PDF
        </button>
        <button 
          onclick="closeLetterModal()" 
          class="px-5 py-2 bg-primary text-white hover:bg-primary/90 text-xs font-bold rounded-xl transition-smooth"
        >
          Fermer
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucideIcons();
};

window.closeLetterModal = function() {
  const modal = document.getElementById('letter-view-modal');
  if (modal) modal.classList.add('hidden');
};

window.deleteLetter = function(letterId) {
  if (confirm('Voulez-vous supprimer cette lettre de votre coffre-fort local ?')) {
    state.letters = state.letters.filter(l => l.id !== letterId);
    saveToLocalStorage();
    renderLettersHistory();
    updateDashboardStats();
  }
};

// ==========================================
// MODULE 5 : DÉSIRS D'ÂME VS EGO
// ==========================================
function initDesiresQuiz() {
  const evaluateBtn = document.getElementById('eval-desire-btn');
  if (!evaluateBtn) return;

  evaluateBtn.onclick = () => {
    const goalTitle = document.getElementById('desire-title').value.trim();
    if (!goalTitle) {
      alert('Veuillez préciser votre projet ou objectif.');
      return;
    }

    const q1 = document.querySelector('input[name="desire_q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="desire_q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="desire_q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="desire_q4"]:checked')?.value;

    if (!q1 || !q2 || !q3 || !q4) {
      alert('Veuillez répondre aux 4 questions diagnostiques.');
      return;
    }

    let soulScore = 0;
    if (q1 === 'soul') soulScore += 25;
    if (q2 === 'soul') soulScore += 25;
    if (q3 === 'soul') soulScore += 25;
    if (q4 === 'soul') soulScore += 25;

    const resultBox = document.getElementById('desire-result-box');
    if (!resultBox) return;

    let interpretation = '';
    let advice = '';

    if (soulScore >= 75) {
      interpretation = 'Désir d\'Âme Authentique (Aligné sur votre être profond)';
      advice = 'Ce désir naît de la joie, de l\'expansion et de la contribution. John Gray enseigne que ces objectifs se réalisent avec fluidité car ils ne dépendent pas du jugement extérieur. Vous appréciez déjà le chemin.';
    } else if (soulScore >= 50) {
      interpretation = 'Désir Mixte (Mélange d\'Âme et de besoin de validation)';
      advice = 'Votre intention a une base saine, mais l\'Ego cherche encore à prouver votre valeur aux autres. Pour l\'amplifier, concentrez-vous sur le plaisir de l\'action plutôt que sur le statut ou la reconnaissance.';
    } else {
      interpretation = 'Désir de l\'Ego (Né du manque et de la comparaison)';
      advice = 'Attention : Selon John Gray, obtenir ce que l\'on désire depuis un espace de carence ou de rancœur ne rend jamais heureux ("l\'herbe est toujours plus verte ailleurs"). Remplissez d\'abord vos réservoirs d\'amour de soi avant de poursuivre cet objectif.';
    }

    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `
      <div class="p-6 rounded-3xl ${soulScore >= 75 ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : soulScore >= 50 ? 'bg-amber-50 border-amber-200 text-amber-950' : 'bg-red-50 border-red-200 text-red-950'} border space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider">Diagnostic John Gray</span>
          <span class="text-sm font-bold">${soulScore}% Désir d'Âme</span>
        </div>
        <h4 class="font-serif font-bold text-xl">${interpretation}</h4>
        <p class="text-xs leading-relaxed font-medium">${advice}</p>
        
        <div class="p-4 bg-white/90 rounded-2xl text-xs space-y-2 text-gray-800">
          <p class="font-bold">Les 5 Lois de Concrétisation selon John Gray :</p>
          <ol class="list-decimal pl-4 space-y-1.5 text-gray-700">
            <li><strong>Intention claire :</strong> Définir ce que vous voulez sans signaux intérieurs ambivalents.</li>
            <li><strong>Appréciation du présent :</strong> Être reconnaissant pour votre situation actuelle (« vouloir ce que l'on possède »).</li>
            <li><strong>Action inspirée :</strong> Poser des actes quotidiens par enthousiasme et non par anxiété.</li>
            <li><strong>Lâcher-prise confiant :</strong> Ne pas s'attacher maladivement au « comment » ni au calendrier précis.</li>
            <li><strong>Identité souveraine :</strong> Se rappeler que votre valeur d'être humain est infinie et ne dépend d'aucun trophée.</li>
          </ol>
        </div>
      </div>
    `;
    resultBox.scrollIntoView({ behavior: 'smooth' });
  };
}

// ==========================================
// MODULE 6 : MÉDITATION DU CŒUR & GRATITUDE
// ==========================================
let audioCtx = null;

function playSingingBowlTone() {
  if (!state.meditation.audioEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(432, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(216, audioCtx.currentTime + 3);

    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 3.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 3.5);
  } catch (e) {
    console.log('Audio non disponible', e);
  }
}

function initMeditation() {
  const startBtn = document.getElementById('med-start-btn');
  const resetBtn = document.getElementById('med-reset-btn');
  if (!startBtn || !resetBtn) return;

  startBtn.onclick = () => {
    if (state.meditation.isRunning) {
      pauseMeditation();
    } else {
      startMeditation();
    }
  };

  resetBtn.onclick = () => {
    resetMeditation();
  };
}

function startMeditation() {
  state.meditation.isRunning = true;
  const startBtn = document.getElementById('med-start-btn');
  const circle = document.getElementById('med-breathing-circle');
  const breathText = document.getElementById('med-breathing-phase');

  if (startBtn) {
    startBtn.innerHTML = '<i data-lucide="pause" class="w-4 h-4"></i> Pause';
    startBtn.classList.replace('bg-primary', 'bg-amber-600');
  }
  if (circle) circle.classList.add('breathing-active');

  playSingingBowlTone();

  let breathCount = 0;
  updateBreathingLabel(breathText, 0);

  state.meditation.timerInterval = setInterval(() => {
    if (state.meditation.remainingSeconds > 0) {
      state.meditation.remainingSeconds--;
      updateTimerDisplay();

      breathCount = (breathCount + 1) % 10;
      updateBreathingLabel(breathText, breathCount);
      if (breathCount === 0 || breathCount === 5) {
        // pulsation douce
      }
    } else {
      resetMeditation();
      playSingingBowlTone();
      alert('Session de Méditation du Cœur terminée. Votre corps est détendu, votre esprit est clair.');
    }
  }, 1000);

  initLucideIcons();
}

function updateBreathingLabel(el, sec) {
  if (!el) return;
  if (sec < 5) {
    el.textContent = 'Inspirez doucement dans l\'espace du cœur... (Ouvrez-vous à la vie)';
  } else {
    el.textContent = 'Expirez lentement en relâchant toute crispation... (Lâcher-prise)';
  }
}

function pauseMeditation() {
  state.meditation.isRunning = false;
  clearInterval(state.meditation.timerInterval);
  const startBtn = document.getElementById('med-start-btn');
  const circle = document.getElementById('med-breathing-circle');
  if (startBtn) {
    startBtn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i> Reprendre';
    startBtn.classList.replace('bg-amber-600', 'bg-primary');
  }
  if (circle) circle.classList.remove('breathing-active');
  initLucideIcons();
}

function resetMeditation() {
  state.meditation.isRunning = false;
  clearInterval(state.meditation.timerInterval);
  state.meditation.remainingSeconds = state.meditation.timerSeconds;
  updateTimerDisplay();

  const startBtn = document.getElementById('med-start-btn');
  const circle = document.getElementById('med-breathing-circle');
  const breathText = document.getElementById('med-breathing-phase');

  if (startBtn) {
    startBtn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i> Démarrer la Méditation';
    startBtn.classList.replace('bg-amber-600', 'bg-primary');
  }
  if (circle) circle.classList.remove('breathing-active');
  if (breathText) breathText.textContent = 'Préparez-vous à respirer dans votre cœur';

  initLucideIcons();
}

function updateTimerDisplay() {
  const timerText = document.getElementById('med-timer-display');
  if (!timerText) return;
  const mins = Math.floor(state.meditation.remainingSeconds / 60);
  const secs = state.meditation.remainingSeconds % 60;
  timerText.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

window.setMeditationDuration = function(seconds) {
  if (state.meditation.isRunning) pauseMeditation();
  state.meditation.timerSeconds = seconds;
  state.meditation.remainingSeconds = seconds;
  updateTimerDisplay();
};

// Journal de Gratitude ("Vouloir ce que l'on a")
function initGratitude() {
  const saveBtn = document.getElementById('save-gratitude-btn');
  if (!saveBtn) return;

  saveBtn.onclick = () => {
    const item1 = document.getElementById('gratitude-1')?.value.trim();
    const item2 = document.getElementById('gratitude-2')?.value.trim();
    const item3 = document.getElementById('gratitude-3')?.value.trim();

    if (!item1 && !item2 && !item3) {
      alert('Veuillez renseigner au moins une appréciation pour aujourd\'hui.');
      return;
    }

    const newLog = {
      id: 'grat_' + Date.now(),
      date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
      item1: item1 || '',
      item2: item2 || '',
      item3: item3 || ''
    };

    state.gratitudeLogs.unshift(newLog);
    saveToLocalStorage();

    if (document.getElementById('gratitude-1')) document.getElementById('gratitude-1').value = '';
    if (document.getElementById('gratitude-2')) document.getElementById('gratitude-2').value = '';
    if (document.getElementById('gratitude-3')) document.getElementById('gratitude-3').value = '';

    renderGratitudeList();
    updateDashboardStats();
    alert('Vos gratitudes ont été ancrées dans votre journal local. Vous cultivez l\'alchimie d\'apprécier ce que vous possédez.');
  };

  renderGratitudeList();
}

function renderGratitudeList() {
  const container = document.getElementById('gratitude-history-list');
  if (!container) return;

  if (state.gratitudeLogs.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <i data-lucide="sun" class="w-6 h-6 text-amber-500 mx-auto mb-1.5"></i>
        <p class="text-xs text-gray-500 font-semibold">Votre journal d'appréciation est vide pour l'instant.</p>
        <p class="text-[11px] text-gray-400">Renseignez les 3 points ci-dessus pour ancrer la joie de ce que vous avez déjà.</p>
      </div>
    `;
    initLucideIcons();
    return;
  }

  container.innerHTML = state.gratitudeLogs.map(log => `
    <div class="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-2">
      <div class="flex items-center justify-between border-b border-gray-100 pb-2">
        <span class="text-[11px] font-bold text-primary capitalize">${log.date}</span>
        <button onclick="deleteGratitude('${log.id}')" class="text-gray-400 hover:text-red-600 transition-smooth">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
      <ul class="space-y-1 text-xs text-gray-700">
        ${log.item1 ? `<li class="flex items-start gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i> <span>${log.item1}</span></li>` : ''}
        ${log.item2 ? `<li class="flex items-start gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i> <span>${log.item2}</span></li>` : ''}
        ${log.item3 ? `<li class="flex items-start gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i> <span>${log.item3}</span></li>` : ''}
      </ul>
    </div>
  `).join('');

  initLucideIcons();
}

window.deleteGratitude = function(logId) {
  state.gratitudeLogs = state.gratitudeLogs.filter(g => g.id !== logId);
  saveToLocalStorage();
  renderGratitudeList();
  updateDashboardStats();
};

// ==========================================
// SYSTÈME D'EXPORT / SAUVEGARDE & RESTAURATION
// ==========================================
function initBackupSystem() {
  const exportBtn = document.getElementById('export-data-btn');
  if (exportBtn) {
    exportBtn.onclick = () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
        tanks: state.tanks,
        letters: state.letters,
        gratitudeLogs: state.gratitudeLogs,
        exportedAt: new Date().toISOString()
      }, null, 2));
      const dlAnchor = document.createElement('a');
      dlAnchor.setAttribute("href", dataStr);
      dlAnchor.setAttribute("download", `john_gray_journal_backup_${Date.now()}.json`);
      document.body.appendChild(dlAnchor);
      dlAnchor.click();
      dlAnchor.remove();
    };
  }
}
