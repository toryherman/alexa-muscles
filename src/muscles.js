/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
module.exports = {
  MUSCLES: {
    'abductor digiti minimi of the foot': { // hand or foot?
      'name': 'abductor digiti minimi of the foot',
			'origin': ['medial and lateral process of posterior calcaneal tuberosity'],
      'insertion': ['lateral side of base of proximal phalanx of the fifth toe and fifth metatarsal'],
      'action': ['flexes and abducts fifth toe', 'supports lateral longitudinal arch'],
      'nerve': ['lateral plantar (S2, 3)']
    },
    'abductor digiti minimi of the hand': {
      'name': 'abductor digiti minimi of the hand',
			'origin': ['pisiform bone', 'pisohamate ligament', 'flexor retinaculum'],
      'insertion': ['ulnar side of base of proximal phalanx of little finger and extensor expansion'],
      'action': ['abducts little finger at metacarpophalangeal joint'],
      'nerve': ['deep branch of ulnar nerve (C8, T1)']
    },
    'abductor hallucis': {
      'name': 'abductor hallucis',
			'origin': ['medial process of posterior calcaneal tuberosity', 'flexor retinaculum'],
      'insertion': ['medial aspect of base of proximal phalanx of big toe via medial sesamoid'],
      'action': ['flexes and abducts big toe', 'supports medial longitudinal arch'],
      'nerve': ['medial plantar nerve (S1, 2)']
    },
    'abductor pollicis brevis': { // did you mean brevis?
      'name': 'abductor pollicis brevis',
			'origin': ['<phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of scaphoid', 'flexor retinaculum'],
      'insertion': ['radial sesamoid of proximal phalanx of thumb', 'tendor of extensor pollicis longus'],
      'action': ['abducts thumb at metacarpophalangeal and carpometacarpal joints'],
      'nerve': ['recurrent branch of median nerve (C8, T1)']
    },
    'abductor pollicis longus': {
      'name': 'abductor pollicis longus',
			'origin': ['upper posterior surface of ulna', 'middle third of posterior surface of radius', 'interosseous membrane'],
      'insertion': ['over tendons of radial extensors and <phoneme alphabet="ipa" ph="breɪ.ki.oʊ.reɪ.di.æl.ɪs">brachioradialis</phoneme> to base of first metacarpal and trapezium'],
      'action': ['abducts and extends thumb at carpometacarpal joint'],
      'nerve': ['posterior interosseous nerve (C6, 7)']
    },
    'adductor brevis': {
      'name': 'adductor brevis',
			'origin': ['inferior ramus of body of pubis'],
      'insertion': ['upper third of linea aspera'],
      'action': ['adducts hip'],
      'nerve': ['anterior division of <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> nerve (L2, 3)']
    },
    'adductor hallucis': {
      'name': 'adductor hallucis',
			'origin': ['for oblique head: base of 2 3 and 4 metatarsals', 'for transverse head: plantar metatarsal ligaments and deep transverse ligament'],
      'insertion': ['lateral side of base of proximal phalanx of big toe', 'lateral sesamoid'],
      'action': ['adducts and flexes metatarsophalangeal joint of big toe', 'supports transverse arch'],
      'nerve': ['deep branch of lateral plantar nerve (S2, 3)']
    },
    'adductor longus': {
      'name': 'adductor longus',
			'origin': ['body of pubis inferior and medial to pubic <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme>'],
      'insertion': ['lower two thirds of medial linea aspera'],
      'action': ['adducts and medially rotates hip'],
      'nerve': ['anterior division of <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> nerve (L2, 3)']
    },
    'adductor magnus': {
      'name': 'adductor magnus',
			'origin': ['adductor portion: <phoneme alphabet="ipa" ph="ˈɪsˌkioʊ.pjubɪk">ischiopubic</phoneme> ramus', 'hamstring portion: lower outer quadrant of posterior surface of <phoneme alphabet="ipa" ph="ˈɪs.kil">ischial</phoneme> tuberosity'],
      'insertion': ['adductor portion: lower gluteal line and linea aspera', 'hamstring portion: adductor <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme>'],
      'action': ['adductor portion: adducts and medially rotates hip', 'hamstring portion: extends hip'],
      'nerve': ['adductor portion: posterior division of <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> nerve (L2 through 4)', 'hamstring portion: tibial portion of sciatic (L4 through S3)']
    },
    'adductor pollicis': {
      'name': 'adductor pollicis',
			'origin': ['for oblique head: base of second and third metacarpals, trapezoid, and capitate', 'for transverse head: palmar border and shaft of third metacarpal'],
      'insertion': ['ulnar sesamoid', 'ulnar side of base of proximal phalanx', 'tendon of extensor pollicis longus'],
      'action': ['adducts carpometacarpal joint of thumb'],
      'nerve': ['deep branch of ulnar nerve (T1)']
    },
    'anconeus': {
      'name': 'anconeus',
			'origin': ['smooth surface of lower extremity of posterior aspect of lateral <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> of humerus'],
      'insertion': ['lateral side of <phoneme alphabet="ipa" ph="əˈlɛk.rə.nɑn">olecranon</phoneme>'],
      'action': ['weakly extends elbow', 'abducts ulna in pronation'],
      'nerve': ['radial nerve (C7, 8)']
    },
    'articularis cubiti': {
      'name': '<phoneme alphabet="ipa" ph="ɑrˈtɪk.ju.leɪr.ɪs">articularis</phoneme> cubiti',
			'origin': ['deep distal surface of medial head of triceps'],
      'insertion': ['posterior capsule of elbow joint'],
      'action': ['lifts capsule away from joint'],
      'nerve': ['radial nerve (C6, 7, 8)']
    },
    'articularis genu': {
      'name': '<phoneme alphabet="ipa" ph="ɑrˈtɪk.ju.leɪr.ɪs">articularis</phoneme> genu',
			'origin': ['two slips from anterior femur below vastus intermedialius'],
      'insertion': ['apex of suprastellar bursa'],
      'action': ['retracts bursa as knee extends'],
      'nerve': ['posterior division of femoral nerve (L3, 4)']
    },
    'aryepiglotticus': {
      'name': 'aryepiglotticus',
			'origin': ['apex of <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'insertion': ['lateral border of epiglottis'],
      'action': ['aids closure of additus of larynx'],
      'nerve': ['recurrent laryngeal branch of vagus nerve (X)']
    },
    'auricularis': {
      'name': '<phoneme alphabet="ipa" ph="ɔr.ɪk.ju.leɪr.ɪs">auricularis</phoneme>',
			'origin': ['cartilage of auricle'],
      'insertion': ['galeal <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['adjusts position of ear'],
      'nerve': ['temporal branch of facial nerve (7)']
    },
    'biceps brachii': {
      'name': 'biceps brachii',
			'origin': ['for long head: supraglenoid <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of scapula', 'for short head: coracoid process of scapula with <phoneme alphabet="ipa" ph="ˌkoʊ.rɪ.koʊ.breɪ.ki.æl.ɪs">coracobrachialis</phoneme>'],
      'insertion': ['posterior border of bicipital tuberosity of radius', 'bicipital <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> to deep fascia and subcutaneous ulna'],
      'action': ['supinates forearm', 'flexes elbow', 'weakly flexes shoulder'],
      'nerve': ['musculocutaneous nerve (C5, 6)']
    },
    'biceps femoris': {
      'name': 'biceps <phoneme alphabet="ipa" ph="fɛˈmoʊr.ɪs">femoris</phoneme>',
			'origin': ['for long head: upper inner quadrant of posterior surface of <phoneme alphabet="ipa" ph="ˈɪs.kil">ischial</phoneme> tuberosity', 'for short head: middle third of linea aspear, lateral <phoneme alphabet="ipa" ph="su.prə.kɑn.dɪ.lɑr">supracondylar</phoneme> ridge of femur'],
      'insertion': ['styloid process of head of fibula', 'lateral collateral ligament', 'lateral tibial <phoneme alphabet="ipa" ph="kɑndaɪl">condyle</phoneme>'],
      'action': ['flexes and laterally rotates knee', 'long head: extends hip'],
      'nerve': ['for long head: tibial portion of sciatic nerve', 'for short head: common peroneal portion of sciatic nerve (L5 S1)']
    },
    'brachialis': {
      'name': '<phoneme alphabet="ipa" ph="breɪ.ki.æl.ɪs">brachialis</phoneme>',
			'origin': ['anterior lower half of humerus', 'medial and lateral intermuscular septa'],
      'insertion': ['coronoid process and tuberosity of ulna'],
      'action': ['flexes elbow'],
      'nerve': ['musculocutaneous nerve (C5, 6)', 'radial nerve (C7)']
    },
    'brachioradialis': {
      'name': '<phoneme alphabet="ipa" ph="breɪ.ki.oʊ.reɪ.di.æl.ɪs">brachioradialis</phoneme>',
			'origin': ['upper two thirds of lateral <phoneme alphabet="ipa" ph="su.prə.kɑn.dɪ.lɑr">supracondylar</phoneme> ridge of humerus', 'lateral intermuscular septum'],
      'insertion': ['base of styloid process of radius'],
      'action': ['flexes arm at elbow', 'brings forearm into midprone position'],
      'nerve': ['radial nerve (C5, 6)']
    },
    'buccinator': {
      'name': '<phoneme alphabet="ipa" ph="ˈbʌk.sɪn.eɪ.dɚ">buccinator</phoneme>',
			'origin': ['external alveolar margins of maxilla and mandible by molar teeth, to maxillary <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> and pterygoid hamulus and posterior mylohyoid line respectively, then via pterygomandibular <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme> between bones'],
      'insertion': ['decussates at modiolus of mouth and interdigitates with opposite side'],
      'action': ['aids mastication', 'tenses cheeks in blowing and whistling', 'aids closure of mouth'],
      'nerve': ['buccal branch of facial nerve (7)']
    },
    'bulbospongiosus': {
      'name': '<phoneme alphabet="ipa" ph="bʌl.boʊ.spʌn.d͡ʒiˈoʊ.sɪs">bulbospongiosus</phoneme>',
			'origin': ['perineal body', 'midline <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme> over corpus spongiosum in male'],
      'insertion': ['superficial perineal membrane', 'dorsal penile or clitoral <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['male: aids emptying of urine and ejaculate from urethra', 'female: closes vaginal introitus'],
      'nerve': ['perineal branch of pudendal nerve (S2, 3, 4)']
    },
    'constrictor of pharynx inferior': { // or inferior constrictor
      'name': 'constrictor of pharynx inferior',
			'origin': ['cricopharyngeus: lateral aspect of arch of <phoneme alphabet="ipa" ph="kraɪ.kɔɪd">cricoid</phoneme> cartilage', 'thyropharyngeus: oblique line of laminar of thyroid cartilage and fibrous cricothyroid arch'],
      'insertion': ['cricopharyngeus: continuous with muscle of opposite side, behind pharynx', 'thyropharyngeus: lower pharyngeal <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme>'],
      'action': ['aids swallowing', 'cricopharyngeus acts as upper esophageal sphincter'],
      'nerve': ['pharyngeal plexus (9, 10, and sympathetic) via pharyngeal branch of 10 with its motor fibers from cranial accessory nerve (11)']
    },
    'constrictor of pharynx middle': { // or middle constrictor
      'name': 'constrictor of pharynx middle',
			'origin': ['lower third of stylohyoid ligament', 'lesser cornu and superior border of greater cornu of hyoid bone'],
      'insertion': ['middle portion of pharyngeal <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme>'],
      'action': ['aids swallowing'],
      'nerve': ['pharyngeal plexus (9, 10, and sympathetic), via pharyngeal branch of 10 with its motor fibers from cranial accessory nerve (11)']
    },
    'constrictor of pharynx superior': { // or superior constrictor
      'name': 'constrictor of pharynx superior',
			'origin': ['lower two thirds of medial pterygoid plate', 'pterygomandibular <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme> and posterior end of mylohyoid line on mandible'],
      'insertion': ['upper midline pharyngeal <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme> and pharyngeal <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of clivus of occiput'],
      'action': ['aids swallowing'],
      'nerve': ['pharyngeal plexus (9, 10, and sympathetic) via pharyngeal branch of 10 with its motor fibers from cranial accessory nerve (11)']
    },
    'coracobrachialis': {
      'name': '<phoneme alphabet="ipa" ph="ˌkoʊ.rɪ.koʊ.breɪ.ki.æl.ɪs">coracobrachialis</phoneme>',
			'origin': ['coracoid process of scapula with biceps brachii'],
      'insertion': ['upper half of medial border of humerus'],
      'action': ['flexes and weakly adducts arm'],
      'nerve': ['musculocutaneous nerve (C5, 6, 7) from lateral cord']
    },
    'corrugator supercilii': {
      'name': 'corrugator supercilii',
			'origin': ['medial superciliary arch'],
      'insertion': ['skin of medial forehead'],
      'action': ['wrinkles forehead'],
      'nerve': ['temporal branch of facial nerve (7)']
    },
    'cremaster': {
      'name': 'cremaster',
			'origin': ['lower border of internal oblique', 'transversus abdominis in inguinal canal'],
      'insertion': ['loops around spermatic cord and tunica vaginalis and some fibers return to attach to pubic <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme>'],
      'action': ['retract testis'],
      'nerve': ['genital branch (L2) of genitofemoral nerve (L1, 2)']
    },
    'cricothyroid': {
      'name': 'cricothyroid',
			'origin': ['<phoneme alphabet="ipa" ph="ˈæn.te.ro">antero</phoneme> lateral aspect of <phoneme alphabet="ipa" ph="kraɪ.kɔɪd">cricoid</phoneme> cartilage'],
      'insertion': ['inferior cornu and lower laminar of thyroid cartilage'],
      'action': ['lengthens and tenses vocal cords by tilting thyroid cartilage forwards'],
      'nerve': ['external branch of superiorlaryngeal branch of vagus nerve (10)']
    },
    'dartos': {
      'name': 'dartos',
			'origin': ['subcutaneous tissue of scrotum', 'superficial to superficial fascia (colles)'],
      'insertion': ['skin and midline fibrous septum of scrotum'],
      'action': ['corrugates scrotal skin'],
      'nerve': ['sympathetic fibers from genital branch (L2) of genitofemoral nerve (L1, 2)']
    },
    'deep transverse perinei': {
      'name': 'deep transverse <phoneme alphabet="ipa" ph="pɚˈɪn.i.aɪ">perinei</phoneme>',
			'origin': ['medial aspect of <phoneme alphabet="ipa" ph="ˈɪsˌkioʊ.pjubɪk">ischiopubic</phoneme> ramus', 'body of <phoneme alphabet="ipa" ph="ˈɪsˌkiʌm">ischium</phoneme>'],
      'insertion': ['midline <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme> and perineal body'],
      'action': ['fixes perineal body', 'supports pelvic viscera'],
      'nerve': ['perineal branch of pudendal nerve (S2, 3, 4)']
    },
    'deltoid': {
      'name': 'deltoid',
			'origin': ['lateral third of clavicle', '<phoneme alphabet="ipa" ph="əˈkro.mi.ʌn">acromion</phoneme>', 'spine of scapula to deltoid <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme>'],
      'insertion': ['middle of lateral surface of humerus (deltoid tuberosity)'],
      'action': ['abducts arm', 'anterior fibers flex and medially rotate', 'posterior fibers extend and lateral rotate'],
      'nerve': ['axillary nerve (C5, 6) from posterior cord']
    },
    'depressor anguli oris': {
      'name': 'depressor anguli oris',
			'origin': ['outer surface of mandible posterior to oblique line'],
      'insertion': ['modiolus at angle of mouth'],
      'action': ['depresses and draws angle of mouth laterally'],
      'nerve': ['mandibular branch of facial nerve (7)']
    },
    'depressor labii inferioris': {
      'name': 'depressor labii inferioris',
			'origin': ['outer surface of mandible along oblique line'],
      'insertion': ['skin of lower lip'],
      'action': ['depresses and draws lower lip laterally'],
      'nerve': ['mandibular branch of facial nerve (7)']
    },
    'diaphragm': {
      'name': 'diaphragm',
			'origin': ['vertebral: crura from bodies of L1 2 (left), L1 3 (right)', 'costal: medial and lateral arcuate ligaments, inner aspect of lower six ribs', 'sternal: two slips from posterior aspect of <phoneme alphabet="ipa" ph="ˈzaɪ.fɔɪd">xiphoid</phoneme>'],
      'insertion': ['central tendon'],
      'action': ['inspiration', 'assists in raising intra-abdominal pressure'],
      'nerve': ['phrenic nerve (motor) (C3, 4, 5)', 'sensory: phrenic, intercostals (6 through 12) and upper two lumbar nerve roots']
    },
    'digastric': {
      'name': 'digastric',
			'origin': ['anterior belly: digastric fossa on posterior surface of symphysis menti', 'posterior belly: base of medial aspect of mastoid process'],
      'insertion': ['fibrous loop to lesser cornu of hyoid bone'],
      'action': ['elevates hyoid bone', 'aids swallowing', 'depresses mandible'],
      'nerve': ['anterior belly: mylohyoid nerve (5)', 'posterior belly: facial nerve (7)']
    },
    'erector spinae spinalis': { // did you mean spinalis?
      'name': 'erector spinae <phoneme alphabet="ipa" ph="spɪˈnæ.lɪs">spinalis</phoneme>',
			'origin': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes'],
      'insertion': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes six levels above'],
      'action': ['laterally flexes spine'],
      'nerve': ['posterior primary rami']
    },
    'erector spinae iliocostalis': {
      'name': 'erector spinae iliocostalis',
			'origin': ['iliac crest', 'sacrum', 'lumbar vertebrae'],
      'insertion': ['ribs', 'cervical transverse processes'],
      'action': ['extends and laterally flexes spine'],
      'nerve': ['posterior primary rami']
    },
    'erector spinae longissimus': {
      'name': 'erector spinae longissimus',
			'origin': ['transverse processes'],
      'insertion': ['transverse processes several levels above'],
      'action': ['extends spine'],
      'nerve': ['posterior primary rami']
    },
    'extensor carpi radialis brevis': {
      'name': 'extensor carpi <phoneme alphabet="ipa" ph="reɪ.diˈæl.ɪs">radialis</phoneme> brevis',
			'origin': ['common extensor origin on anterior aspect of lateral <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> of humerus'],
      'insertion': ['posterior base of third metacarpal'],
      'action': ['extends and abducts hand at wrist'],
      'nerve': ['posterior interosseous nerve (C7, 8)']
    },
    'extensor carpi radialis longus': {
      'name': 'extensor carpi <phoneme alphabet="ipa" ph="reɪ.diˈæl.ɪs">radialis</phoneme> longus',
			'origin': ['lower third of lateral <phoneme alphabet="ipa" ph="su.prə.kɑn.dɪ.lɑr">supracondylar</phoneme> ridge of humerus', 'lateral intermuscular septum'],
      'insertion': ['posterior base of second metacarpal'],
      'action': ['extends and abducts hand at wrist'],
      'nerve': ['radial nerve (C6, 7)']
    },
    'extensor carpi ulnaris': {
      'name': 'extensor carpi <phoneme alphabet="ipa" ph="ʌl.neɪr.ɪs">ulnaris</phoneme>',
			'origin': ['common extensor origin on anterior aspect of lateral <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> of humerus'],
      'insertion': ['base of fifth metacarpal via groove by ulnar styloid'],
      'action': ['extends and adducts hand at wrist'],
      'nerve': ['posterior interosseous']
    },
    'extensor digiti minimi': {
      'name': 'extensor digiti minimi',
			'origin': ['common extensor origin on anterior aspect of lateral <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> of humerus'],
      'insertion': ['extensor expansion of little finger'],
      'action': ['extends all joints of little finger'],
      'nerve': ['posterior interosseous nerve (C7, 8)']
    },
    'extensor digitorum brevis': {
      'name': 'extensor digitorum brevis',
			'origin': ['superior surface of anterior calcaneus'],
      'insertion': ['four tendons into proximal phalanx of big toe', 'long extensor tendons to toes two, three, and four'],
      'action': ['extends toes when foot fully <phoneme alphabet="ipa" ph="ˈdor.si.flɛkst">dorsiflexed</phoneme>'],
      'nerve': ['deep peroneal nerve (L5, S1)']
    },
    'extensor digitorum longus': {
      'name': 'extensor digitorum longus',
			'origin': ['upper two thirds of anterior shaft of fibula', 'interosseous membrane', 'superior tibiofibular joint'],
      'insertion': ['extensor expansion of lateral four toes'],
      'action': ['extends toes', 'extends foot at ankle'],
      'nerve': ['deep peroneal nerve (L5, S1)']
    },
    'extensor hallucis brevis': {
      'name': 'extensor hallucis brevis',
			'origin': ['superior surface of anterior calcaneus'],
      'insertion': ['proximal phalanx of big toe'],
      'action': ['extends great toe'],
      'nerve': ['deep peroneal nerve (L5, S1)']
    },
    'extensor hallucis longus': {
      'name': 'extensor hallucis longus',
			'origin': ['middle half of anterior shaft of fibula'],
      'insertion': ['base of distal phalanx of great toe'],
      'action': ['extends big toe and foot', 'inverts foot', 'tightens subtalar joints'],
      'nerve': ['deep peroneal nerve (L5, S1)']
    },
    'extensor indicis': {
      'name': 'extensor indicis',
			'origin': ['lower posterior shaft of ulna below extensor pollicis longus', 'adjacent interosseous membrane'],
      'insertion': ['extensor expansion of index finger'],
      'action': ['extends all joints of index finger'],
      'nerve': ['posterior interosseous nerve (C7, 8)']
    },
    'extensor pollicis brevis': {
      'name': 'extensor pollicis brevis',
			'origin': ['lower third of posterior shaft of radius and adjacent interosseous membrane'],
      'insertion': ['over tendons of radial extensors', '<phoneme alphabet="ipa" ph="breɪ.ki.oʊ.reɪ.di.æl.ɪs">brachioradialis</phoneme> to base of proximal phalanx of thumb'],
      'action': ['extends metacarpophalangeal joint of thumb'],
      'nerve': ['posterior interosseous nerve (C7, 8)']
    },
    'extensor pollicis longus': {
      'name': 'extensor pollicis longus',
			'origin': ['middle third of posterior ulna', 'adjacent interosseous membrane'],
      'insertion': ['base of distal phalanx of thumb via Lister\'s <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme>'],
      'action': ['extends interphalangeal and metacarpophalangeal joints of thumb'],
      'nerve': ['posterior interosseous nerve (C7, 8)']
    },
    'external oblique abdominis': { // external oblique or external abdominal oblique
      'name': 'external oblique abdominis',
			'origin': ['anterior angles of lower eight ribs'],
      'insertion': ['outer anterior half of iliac crest', 'inguinal ligament', 'pubic <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> and crest', '<phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> of anterior rectus sheath'],
      'action': ['supports abdominal wall', 'assists forced expiration', 'aids raising intra-abdominal pressure', 'abducts and rotates trunk'],
      'nerve': ['anterior primary rami (T7 through 12)']
    },
    'flexor carpi radialis': {
      'name': 'flexor carpi <phoneme alphabet="ipa" ph="reɪ.diˈæl.ɪs">radialis</phoneme>',
			'origin': ['common flexor origin of medial <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> of humerus'],
      'insertion': ['bases of second and third metacarpals via groove in trapezium and slip to scaphoid'],
      'action': ['flexes and abducts wrist'],
      'nerve': ['median nerve']
    },
    'flexor carpi ulnaris': {
      'name': 'flexor carpi <phoneme alphabet="ipa" ph="ʌl.neɪr.ɪs">ulnaris</phoneme>',
			'origin': ['for humeral head: common flexor origin of medial <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme>', 'for ulnar head: <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> from medial <phoneme alphabet="ipa" ph="əˈlɛk.rə.nɑn">olecranon</phoneme> and upper three quarters subcutaneous border of ulna'],
      'insertion': ['pisiform', 'hook of hamate', 'base of fifth metacarpal via pisohamate and pisometacarpal ligaments'],
      'action': ['flexes and adducts wrist', 'fixes pisiform during action of hypothenar muscles'],
      'nerve': ['ulnar nerve (C8, T1)']
    },
    'flexor digiti minimi brevis of foot': { // hand or foot?
      'name': 'flexor digiti minimi brevis of foot',
			'origin': ['base of fifth metatarsal', 'sheath of peroneus longus'],
      'insertion': ['lateral side of base of proximal phalanx of little toe'],
      'action': ['flexes metatarsophalangeal joint of little toe'],
      'nerve': ['superficial branch of lateral plantar nerve (S2, 3)']
    },
    'flexor digiti minimi brevis of hand': {
      'name': 'flexor digiti minimi brevis of hand',
			'origin': ['flexor retinaculum', 'hook of hamate'],
      'insertion': ['ulnar side of base of proximal phalanx of little finger'],
      'action': ['flexes metacarpophalangeal joint of little finger'],
      'nerve': ['deep branch of ulnar nerve (C8, T1)']
    },
    'flexor digitorum brevis': {
      'name': 'flexor digitorum brevis',
			'origin': ['medial process of posterior calcaneal tuberosity'],
      'insertion': ['four tendons to four lateral toes to borders of middle phalanx'],
      'action': ['laterally flexes four toes', 'supports medial and lateral longitudinal arches'],
      'nerve': ['medial plantar nerve (S1, 2)']
    },
    'flexor digitorum longus': {
      'name': 'flexor digitorum longus',
			'origin': ['posterior shaft of tibia below <phoneme alphabet="ipa" ph="so.liəl">soleal</phoneme> line and by broad <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> from fibula'],
      'insertion': ['base of distal phalanges of lateral four toes'],
      'action': ['distally flexes phalanges of lateral four toes and foot at ankle', 'supports lateral longitudinal arches'],
      'nerve': ['tibial nerve (S1, 2)']
    },
    'flexor digitorum profundus': {
      'name': 'flexor digitorum profundus',
			'origin': ['medial <phoneme alphabet="ipa" ph="əˈlɛk.rə.nɑn">olecranon</phoneme>', 'upper three quarters of anterior and medial surface of ulna'],
      'insertion': ['distal phalanges of medial four fingers'],
      'action': ['distally flexes interphalangeal joints', 'proximally flexes interphalangeal and metacarpophalangeal joints and wrist'],
      'nerve': ['median nerve', 'ulnar nerve']
    },
    'flexor digitorum superficialis': {
      'name': 'flexor digitorum <phoneme alphabet="ipa" ph="su.pɚ.fɪʃ.iˈæl.ɪs">superficialis</phoneme>',
			'origin': ['for humeral head: common flexor origin of medial <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> humerus and medial ligament of elbow', 'for ulnar head: medial border of coronoid process and fibrous arch', 'for radial head: entire length of anterior oblique line'],
      'insertion': ['tendons split to insert onto sides of middle phalanges of medial four fingers'],
      'action': ['proximally flexes interphalangeal joints and secondarily metacarpophalangeal joints and wrist'],
      'nerve': ['median nerve (C7, 8)']
    },
    'flexor hallucis brevis': {
      'name': 'flexor hallucis brevis',
			'origin': ['cuboid', 'lateral cuneiform', '<phoneme alphabet="ipa" ph="tɪ.biˈæl.ɪs">tibialis</phoneme> posterior insertion over the two remaining cuneiforms'],
      'insertion': ['medial tendon to medial side, and lateral tendon to lateral side, of base of proximal phalanx of big toe via sesamoids'],
      'action': ['flexes metatarsophalangeal joint of big toe', 'supports medial longitudinal arch'],
      'nerve': ['medial plantar nerve (S2, 3)']
    },
    'flexor hallucis longus': {
      'name': 'flexor hallucis longus',
			'origin': ['lower two thirds of posterior fibula between median crest and posterior border', 'lower intermuscular septum and <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> of flexor digitorum longus'],
      'insertion': ['base of distal phalanx of big toe and slips to medial two tendons of flexor digitorum longus'],
      'action': ['distally flexes phalanx of big toe', 'flexes foot at ankle', 'supports medial longitudinal arch'],
      'nerve': ['tibial nerve (S2, 3)']
    },
    'flexor pollicis brevis': {
      'name': 'flexor pollicis brevis',
			'origin': ['flexor retinaculum and <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of trapezium'],
      'insertion': ['base of proximal phalanx of thumb'],
      'action': ['flexes metacarpophalangeal joint of thumb'],
      'nerve': ['recurrent branch of median nerve (C8, T1)']
    },
    'flexor pollicis longus': {
      'name': 'flexor pollicis longus',
			'origin': ['anterior surface of radius below anterior oblique line and adjacent interosseous membrane'],
      'insertion': ['base of distal phalanx of thumb'],
      'action': ['distally flexes phalanx of thumb'],
      'nerve': ['anterior interosseous nerve (C7, 8)']
    },
    'frontalis': {
      'name': 'frontalis',
			'origin': ['occipital: highest nuchal line and mastoid process', 'frontal: superior fibers of upper facial muscles'],
      'insertion': ['galeal <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['wrinkles forehead', 'fixes galeal <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'nerve': ['posterior auricular and temporal branches of facial nerve (7)']
    },
    'gastrocnemius': {
      'name': 'gastrocnemius',
			'origin': ['for lateral head: posterior surface of lateral <phoneme alphabet="ipa" ph="kɑndaɪl">condyle</phoneme> of femur and highest of three facets on lateral <phoneme alphabet="ipa" ph="kɑndaɪl">condyle</phoneme>', 'for medial head: posterior surface of femur above medial <phoneme alphabet="ipa" ph="kɑndaɪl">condyle</phoneme>'],
      'insertion': ['tendo calcaneus to middle of three facets on posterior aspect of calcaneus'],
      'action': ['plantar flexes foot', 'flexes knee'],
      'nerve': ['tibial nerve (S1, 2)']
    },
    'gemellus inferior': {
      'name': 'gemellus inferior',
			'origin': ['upper border of <phoneme alphabet="ipa" ph="ˈɪs.kil">ischial</phoneme> tuberosity'],
      'insertion': ['middle part of medial aspect of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['laterally rotates and stabilizes hip'],
      'nerve': ['nerve to quadratis <phoneme alphabet="ipa" ph="fɛˈmoʊr.ɪs">femoris</phoneme> (L4, 5, S1)']
    },
    'gemellus superior': {
      'name': 'gemellus superior',
			'origin': ['spine of <phoneme alphabet="ipa" ph="ˈɪsˌkiʌm">ischium</phoneme>'],
      'insertion': ['middle part of medial aspect of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['laterally rotates and stabilizes hip'],
      'nerve': ['nerve to <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> internus (L5, S1, 2)']
    },
    'genioglossus': {
      'name': 'genioglossus',
			'origin': ['superior mental spine on posterior surface of symphysis menti'],
      'insertion': ['central mass of tongue and mucous membrane'],
      'action': ['protracts tongue'],
      'nerve': ['hypoglossal nerve (12)']
    },
    'geniohyoid': {
      'name': 'geniohyoid',
			'origin': ['inferior mental spine on posterior surface of symphysis menti'],
      'insertion': ['superior border of body of hyoid bone'],
      'action': ['elevates and protracts hyoid bone', 'depresses mandible'],
      'nerve': ['C1 fibers carried by hypoglossal nerve (12)']
    },
    'gluteus maximus': {
      'name': 'gluteus maximus',
			'origin': ['outer surface of ilium behind posterior gluteal line and posterior third of iliac crest lumbar fascia', 'lateral mass of sacrum', 'sacrotuberous ligament', 'coccyx'],
      'insertion': ['deepest quarter into gluteal tuberosity of femur', 'remaining three quarters into iliotibial tract'],
      'action': ['extends and laterally rotates hip', 'maintains extension of knee via iliotibial tract'],
      'nerve': ['inferior gluteal nerve (L5, S1, 2)']
    },
    'gluteus medius': {
      'name': 'gluteus medius',
			'origin': ['outer surface of ilium between posterior and middle gluteal lines'],
      'insertion': ['posterolateral surface of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['abducts and medially rotates hip', 'tilts pelvis on walking'],
      'nerve': ['superior gluteal nerve (L4, 5, S1)']
    },
    'gluteus minimus': {
      'name': 'gluteus minimus',
			'origin': ['outer surface of ilium between middle and inferior gluteal lines'],
      'insertion': ['anterior surface of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['abducts and medially rotates hip', 'tilts pelvis on walking'],
      'nerve': ['superior gluteal nerve (L4, 5, S1)']
    },
    'gracilis': {
      'name': '<phoneme alphabet="ipa" ph="ˈgræs əˌlɪs">gracilis</phoneme>',
			'origin': ['outer surface of <phoneme alphabet="ipa" ph="ˈɪsˌkioʊ.pjubɪk">ischiopubic</phoneme> ramus'],
      'insertion': ['upper medial shaft of tibia below sartorius'],
      'action': ['adducts hip', 'flexes knee and medially rotates flexed knee'],
      'nerve': ['anterior division of <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> nerve (L2, 3)']
    },
    'hyoglossus': {
      'name': '<phoneme alphabet="ipa" ph="ˈhaɪ.oʊ.glɔ.sɪs">hyoglossus</phoneme>',
			'origin': ['superior border of greater cornu of hyoid bone'],
      'insertion': ['lateral sides of tongue'],
      'action': ['depresses tongue'],
      'nerve': ['hypoglossal nerve (12)']
    },
    'iliacus': {
      'name': 'iliacus',
			'origin': ['iliac fossa within abdomen'],
      'insertion': ['lowermost surface of lesser <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['flexes and medially rotates hip'],
      'nerve': ['femoral nerve in abdomen (L2, 3)']
    },
    'inferior oblique': {
      'name': 'inferior oblique',
			'origin': ['orbital surface of maxilla behind orbital margin'],
      'insertion': ['inferior quadrant of <phoneme alphabet="ipa" ph="ˈskleɪr.ə">sclera</phoneme> behind equator of eyeball'],
      'action': ['elevates eye in adduction', 'laterally rotates eye in abduction'],
      'nerve': ['inferior division of oculomotor nerve (3)']
    },
    'inferior rectus': {
      'name': 'inferior rectus',
			'origin': ['inferior tendinous ring within orbit'],
      'insertion': ['inferior <phoneme alphabet="ipa" ph="ˈskleɪr.ə">sclera</phoneme> anterior to equator of eyeball'],
      'action': ['depresses eye', 'laterally rotates eye in adduction'],
      'nerve': ['inferior division of oculomotor nerve (3)']
    },
    'infraspinatus': {
      'name': '<phoneme alphabet="ipa" ph="ɪn.frə.spɪn.eɪt.əs">infraspinatus</phoneme>',
			'origin': ['medial three quarters of <phoneme alphabet="ipa" ph="ɪn.frə.spaɪn.əs">infraspinous</phoneme> fossa of scapula', 'fibrous intermuscular septa'],
      'insertion': ['middle facet of greater tuberosity of humerus', 'capsule of shoulder joint'],
      'action': ['laterally rotates arm', 'stabilizes shoulder joint'],
      'nerve': ['suprascapular nerve (C5, 6)']
    },
    'intercostals external': { // external intercostals? external, innermost, or internal?
      'name': 'intercostals external',
			'origin': ['inferior border of ribs as far back as posterior angles'],
      'insertion': ['superior border of ribs below'],
      'action': ['fixes intercostal spaces during respiration', 'aids forced inspiration by elevating ribs'],
      'nerve': ['muscular collateral branches of intercostal nerves']
    },
    'intercostals innermost': {
      'name': 'intercostals innermost',
			'origin': ['internal aspect of ribs above and below'],
      'insertion': ['internal aspect of ribs above and below'],
      'action': ['fixes intercostal spaces during respiration'],
      'nerve': ['muscular collateral branches of intercostal nerves']
    },
    'intercostals internal': {
      'name': 'intercostals internal',
			'origin': ['inferior border of ribs as far back as posterior angles'],
      'insertion': ['superior border of ribs below'],
      'action': ['fixes intercostal spaces during respiration', 'aids forced inspiration by elevating ribs'],
      'nerve': ['muscular collateral branches of intercostal nerves']
    },
    'internal oblique abdominis': { // internal abdominal oblique?
      'name': 'internal oblique abdominis',
			'origin': ['lumbar fascia', 'anterior two thirds of iliac crest', 'lateral two thirds of inguinal ligament'],
      'insertion': ['costal margin', '<phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> of rectus sheath', 'conjoint tendon to pubic crest and <phoneme alphabet="ipa" ph="pɛkˈtɪn.i.əl">pectineal</phoneme> line'],
      'action': ['supports abdominal wall', 'assists forced respiration', 'aids raising intra-abdominal pressure', 'abducts and rotates trunk'],
      'nerve': ['anterior primary rami (T7 through 12)']
    },
    'interossei dorsal of hand': { // dorsal interossei? hand or foot?
      'name': 'interossei dorsal of hand',
			'origin': ['bipennate from inner aspects of shafts of all metacarpals'],
      'insertion': ['proximal phalanges', 'dorsal extensor expansion on radial side of index and middle fingers and ulnar side of middle and ring fingers'],
      'action': ['abducts from axis of middle finger', 'flexes metacarpophalangeal joint while extending interphalangeal joints'],
      'nerve': ['deep branch of ulnar nerve (T1)']
    },
    'interossei dorsal of foot': { // dorsal interossei? hand or foot?
      'name': 'interossei dorsal of foot',
			'origin': ['bipennate from inner aspects of shafts of all metatarsals'],
      'insertion': ['bases of proximal phalanges', 'dorsal extensor expansions of medial side of second toe and lateral sides of second, third, and fourth toes'],
      'action': ['abducts second, third, and fourth toes from axis of second toe', 'assists lumbricals in extending interphalangeal joints while flexing metatarsophalangeal joints'],
      'nerve': ['lateral plantar nerve (S2, 3)']
    },
    'interossei palmar of hand': { // palmar interossei?
      'name': 'interossei palmar of hand',
			'origin': ['anterior shafts of second, fourth, and fifth metacarpals'],
      'insertion': ['proximal phalanges', 'dorsal extensor expansion on ulnar side of index and radial side of ring and little fingers and to ulnar sesamoid of thumb'],
      'action': ['adducts to axis of middle finger', 'flexes metacarpophalangeal joint while extending interphalangeal joints'],
      'nerve': ['deep branch of ulnar nerve (T1)']
    },
    'interossei plantar of foot': { // plantar interossei?
      'name': 'interossei plantar of foot',
			'origin': ['inferomedial shafts of third, fourth, and fifth metatarsals'],
      'insertion': ['medial sides of bases of proximal phalanges with slips to dorsal extensor expansions of third, fourth, and fifth toes'],
      'action': ['adducts third, fourth, and fifth toes to axis of second toe', 'assists lumbricals in extending interphalangeal joints while flexing metatarsophalangeal joints'],
      'nerve': ['deep branch of lateral plantar nerve (S2, 3)']
    },
    'interspinales': {
      'name': 'interspinales',
			'origin': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes'],
      'insertion': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes one above'],
      'action': ['extension of spine'],
      'nerve': ['posterior primary rami']
    },
    'intertransversarii': {
      'name': 'intertransversarii',
			'origin': ['transverse processes'],
      'insertion': ['transverse processes one above'],
      'action': ['laterally flexes spine'],
      'nerve': ['posterior primary rami']
    },
    'intrinsic muscle of tongue': { // muscles?
      'name': 'intrinsic muscle of tongue',
			'origin': ['superior and inferior longitudinal', 'transverse and vertical elements'],
      'insertion': ['mucous membrane', 'septum', 'other muscles of tongue'],
      'action': ['alters shape of tongue', 'aids mastication, speech, and swallowing'],
      'nerve': ['hypoglossal nerve (12)']
    },
    'ischiocavernosus': {
      'name': '<phoneme alphabet="ipa" ph="ˈɪsˌkioʊ.kæ.vɚˈnoʊ.sɪs">ischiocavernosus</phoneme>',
			'origin': ['medial aspect of <phoneme alphabet="ipa" ph="ˈɪsˌkiʌm">ischium</phoneme>', '<phoneme alphabet="ipa" ph="ˈɪsˌkioʊ.pjubɪk">ischiopubic</phoneme> ramus'],
      'insertion': ['inferolateral <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> over crura of penis or clitoris'],
      'action': ['stabilizes erect penis'],
      'nerve': ['perineal branch of pudendal nerve (S2, 3, 4)']
    },
    'lateral cricoarytenoid': {
      'name': 'lateral <phoneme alphabet="ipa" ph="kraɪ.koʊ əˈrɪt.ɪn.ɔɪd">cricoarytenoid</phoneme>',
			'origin': ['lateral aspect of arch of <phoneme alphabet="ipa" ph="kraɪ.kɔɪd">cricoid</phoneme>'],
      'insertion': ['muscular process of <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'action': ['adducts and medially rotates <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'nerve': ['recurrent laryngeal branch of vagus nerve (10)']
    },
    'lateral pterygoid': {
      'name': 'lateral pterygoid',
			'origin': ['for upper head: infratemporal surface of <phoneme alphabet="ipa" ph="ˈsfi.nɔɪd">sphenoid</phoneme> bone', 'for lower head: lateral surface of lateral pterygoid plate'],
      'insertion': ['pterygoid fovea below <phoneme alphabet="ipa" ph="kɑn.dɪ.lɔɪd">condyloid</phoneme> process of mandible', 'intra-articular cartilage of temporomandibular joint'],
      'action': ['depresses and protracts mandible to open mouth', 'pulls forward cartilage of joint during opening of mouth', 'aids in chewing'],
      'nerve': ['nerves to lateral pterygoid']
    },
    'lateral rectus': {
      'name': 'lateral rectus',
			'origin': ['lateral tendinous ring within orbit'],
      'insertion': ['lateral <phoneme alphabet="ipa" ph="ˈskleɪr.ə">sclera</phoneme> anterior to equator of eyeball'],
      'action': ['abducts eye'],
      'nerve': ['abducent nerve (6)']
    },
    'latissimus dorsi': {
      'name': '<phoneme alphabet="ipa" ph="ləˈtɪsˌɪm.ɪs ˈdor.saɪ">latissimus dorsi</phoneme>',
			'origin': ['spine T7', '<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes and <phoneme alphabet="ipa" ph="ˈsup.rɪ.saɪ.nɪs">suprasinous</phoneme> ligaments of all lower thoracic, lumbar, and sacral vertebrae', 'lumbar fascia', 'posterior third iliac crest', 'last four ribs', 'inferior angle of scapula'],
      'insertion': ['floor of bicipital groove of humerus'],
      'action': ['extends, adducts, and medially rotates arm', 'helps with deep inspiration and forced expiration'],
      'nerve': ['<phoneme alphabet="ipa" ph="ðor.æs.ə.dors.əl">thoracodorsal</phoneme> nerve (C6, 7, 8)']
    },
    'levator anguli oris': {
      'name': 'levator anguli oris',
			'origin': ['anterior surface of maxilla below infra-orbital foramen'],
      'insertion': ['outer end of upper lip and modiolus'],
      'action': ['elevates angle of mouth'],
      'nerve': ['buccal branch of facial nerve (7)']
    },
    'levator ani-coccygeus': { // coccygeus
      'name': 'levator ani-coccygeus',
			'origin': ['<phoneme alphabet="ipa" ph="sæk.rəˈspaɪ.nɪs">sacrospinous</phoneme> ligament'],
      'insertion': ['<phoneme alphabet="ipa" ph="ɑn.o kɑk.sɪd͡ʒ.iəl">anococcygeal</phoneme> body', 'coccyx'],
      'action': ['supports pelvic viscera'],
      'nerve': ['anterior primary rami (S4, 5)']
    },
    'levator ani-iliococcygeus': { // iliococcygeus
      'name': 'levator ani-ilio-coccygeus',
			'origin': ['posterior half of fascial line over <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> internus', '<phoneme alphabet="ipa" ph="ˈɪs.kil">ischial</phoneme> spine'],
      'insertion': ['<phoneme alphabet="ipa" ph="ɑn.o kɑk.sɪd͡ʒ.iəl">anococcygeal</phoneme> body'],
      'action': ['supports pelvic viscera'],
      'nerve': ['anterior primary rami (S3, 4)']
    },
    'levator ani-pubococcygeus': { // puboccycgeus
      'name': 'levator ani-pubo-coccygeus',
			'origin': ['posterior surface of pubis', 'anterior half of fascial line over <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> internus'],
      'insertion': ['<phoneme alphabet="ipa" ph="ɑn.o kɑk.sɪd͡ʒ.iəl">anococcygeal</phoneme> body'],
      'action': ['supports pelvic viscera'],
      'nerve': ['anterior primary rami (S3, 4)']
    },
    'levator ani-puborectalis': { // puborectalis
      'name': 'levator ani-puborectalis',
			'origin': ['posterior surface of pubis'],
      'insertion': ['midline sling posterior to rectum'],
      'action': ['supports and aids continence of rectum by maintaining anorectal angle'],
      'nerve': ['anterior primary rami (S3, 4)']
    },
    'levator ani-pubovaginalis': { // pubovaginalis
      'name': 'levator ani-pubovaginalis',
			'origin': ['posterior surface of pubis'],
      'insertion': ['midline <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme> posterior to vagina or prostate'],
      'action': ['supports anterior pelvic viscera'],
      'nerve': ['anterior primary rami (S3, 4)']
    },
    'levator labii superioris': {
      'name': 'levator labii superioris',
			'origin': ['medial <phoneme alphabet="ipa" ph="ɪn.frə.orb.ɪt.əl">infraorbital</phoneme> margin'],
      'insertion': ['skin and muscle of upper lip'],
      'action': ['elevates and everts upper lip'],
      'nerve': ['buccal branch of facial nerve (7)']
    },
    'levator labii superioris alaeque nasi': {
      'name': 'levator labii superioris <phoneme alphabet="ipa" ph="əˈlɑ.kwə">alaeque</phoneme> <phoneme alphabet="ipa" ph="ˈneɪ.zi">nasi</phoneme>',
			'origin': ['upper frontal process of maxilla'],
      'insertion': ['skin of lateral nostril', 'upper lip'],
      'action': ['dilates nostril', 'elevates upper lip'],
      'nerve': ['buccal branch of facial nerve (7)']
    },
    'levator palpebrae superioris': {
      'name': 'levator <phoneme alphabet="ipa" ph="ˈpæl.pə.bri">palpebrae</phoneme> superioris',
			'origin': ['inferior aspect of lesser wing of <phoneme alphabet="ipa" ph="ˈsfi.nɔɪd">sphenoid</phoneme> bone'],
      'insertion': ['superior tarsal plate', 'skin of upper eyelid'],
      'action': ['elevates and retracts upper eyelid'],
      'nerve': ['superior division of oculomotor nerve (3)', 'sympathetic to smooth muscle portion']
    },
    'levator scapulae': {
      'name': 'levator scapulae',
			'origin': ['posterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəls">tubercles</phoneme> of transverse processes of C1 through 4'],
      'insertion': ['upper part of medial border of scapula'],
      'action': ['raises medial border of scapula'],
      'nerve': ['anterior primary rami of C3 and C4', 'dorsal scapular nerve (C5)']
    },
    'levator veli palatini': {
      'name': 'levator veli palatini',
			'origin': ['apex of inferior surface of petrous temporal bone', 'medial rim of auditory tube'],
      'insertion': ['palatine <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['elevates, retracts, and laterally deviates soft palate', 'opens auditory tube on swallowing'],
      'nerve': ['pharyngeal branch of vagus nerve (10) with its motot fibers from cranial accessory nerve (11)']
    },
    'levatores costarum': {
      'name': 'levatores costarum',
			'origin': ['transverse processes C7 to T11'],
      'insertion': ['posterior surface and angle of rib below'],
      'action': ['elevates ribs'],
      'nerve': ['posterior primary rami']
    },
    'longus capitis': {
      'name': 'longus capitis',
			'origin': ['anterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəls">tubercles</phoneme> of transverse processes of C3 through 6'],
      'insertion': ['anterior basilar occipital bone'],
      'action': ['flexes cervical spine and atlanto-occipital joint'],
      'nerve': ['anterior primary rami (C1 through 3)']
    },
    'longus colli': {
      'name': 'longus colli',
			'origin': ['anterior body of T1 through 3', 'anterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəls">tubercles</phoneme> of transverse processes of C3 through 7'],
      'insertion': ['anterior arch of atlas (C1)', 'bodies of C2 through 4'],
      'action': ['flexes and rotates cervical spine'],
      'nerve': ['anterior primary rami (C2 through 6)']
    },
    'lumbricals of foot': { // lumbricals? foot or hand?
      'name': 'lumbricals of foot',
			'origin': ['lateral three: bipennate origin from cleft between the four tendons of flexor digitorum longus', 'medial one: unipennate origin from medial aspect of first tendon'],
      'insertion': ['dorsal extensor expansion'],
      'action': ['extends toes at interphalangeal joints', 'flexes metatarsophalangeal joints'],
      'nerve': ['first: medial plantar nerve (L4, 5)', '2 through 4: deep branch of lateral plantar nerve (S2, 3)']
    },
    'lumbricals of hand': { // lumbricals? foot or hand?
      'name': 'lumbricals of hand',
			'origin': ['four tendons of flexor digitorum profundus', 'radial 2: radial side only', 'ulnar 2: cleft between tendons'],
      'insertion': ['extensor expansion of fingers 2 through 5 on the radial side'],
      'action': ['flexes metacarpophalangeal joints', 'extends interphalangeal joints of fingers'],
      'nerve': ['lateral 2: median nerve (C8, T1)', 'medial 2: deep branch of ulnar nerve (C8, T1)']
    },
    'masseter': {
      'name': 'masseter',
			'origin': ['anterior two thirds of zygomatic arch', 'zygomatic process of maxilla'],
      'insertion': ['lateral surface of angle', 'lower ramus of mandible'],
      'action': ['elevates mandible'],
      'nerve': ['anterior division of mandibular nerve (5)']
    },
    'medial pterygoid': {
      'name': 'medial pterygoid',
			'origin': ['for deep head: medial side of lateral pterygoid plate and fossa between medial and lateral plates', 'for superficial head: tuberosity of maxilla and pyramidal process of palatine bone'],
      'insertion': ['medial aspect of angle of mandible'],
      'action': ['elevates the mandible', 'assists closing the jaw', 'assists the lateral pterygoids in moving the jaw side to side'],
      'nerve': ['nerve to medial pterygoid']
    },
    'medial rectus': {
      'name': 'medial rectus',
			'origin': ['medial tendinous ring with orbit'],
      'insertion': ['medial <phoneme alphabet="ipa" ph="ˈskleɪr.ə">sclera</phoneme> anterior to equator of eyeball'],
      'action': ['adducts eye'],
      'nerve': ['inferior division oculomotor nerve (3)']
    },
    'mentalis': {
      'name': 'mentalis',
			'origin': ['incisive fossa on anterior aspect of mandible'],
      'insertion': ['skin of chin'],
      'action': ['elevates and wrinkles skin of chin', 'protrudes lower lip'],
      'nerve': ['mandibular branch of facial nerve (7)']
    },
    'musculus uvulae': { // m. uvulae?
      'name': 'musculus uvulae',
			'origin': ['posterior border of hard palate'],
      'insertion': ['palatine <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['shapes uvula'],
      'nerve': ['pharyngeal branch of vagus nerve (10) with its motor fibers from cranial accessory nerve (11)']
    },
    'mylohyoid': {
      'name': 'mylohyoid',
			'origin': ['mylohyoid line on internal aspect of mandible'],
      'insertion': ['anterior three quarters: midline <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme>', 'posterior quarter: superior border of body of hyoid bone'],
      'action': ['elevates hyoid bone', 'supports and raises floor of mouth', 'aids in mastication and swallowing'],
      'nerve': ['mylohyoid nerve (5)']
    },
    'nasalis': { // compressor, dilator, and depressor
      'name': '<phoneme alphabet="ipa" ph="ˈnæs.ə.liz">nasalis</phoneme>',
			'origin': ['frontal process of maxilla'],
      'insertion': ['nasal <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['opens and closes nostrils'],
      'nerve': ['buccal branch of facial nerve (7)']
    },
    'oblique arytenoid': {
      'name': 'oblique <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme>',
			'origin': ['muscular process of <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'insertion': ['superior pole of opposite <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'action': ['adducts <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilages'],
      'nerve': ['recurrent laryngeal branch of vagus nerve (10)']
    },
    'obliquus capitis inferior': {
      'name': 'obliquus capitis inferior',
			'origin': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> process of axis (C2)'],
      'insertion': ['lateral mass of atlas (C1)'],
      'action': ['rotates atlanto-axial joint'],
      'nerve': ['sub-occipital nerve']
    },
    'obliquus capitis superior': {
      'name': 'obliquus capitis superior',
			'origin': ['lateral mass of atlas (C1)'],
      'insertion': ['lateral half of interior nuchal line'],
      'action': ['laterally flexes atlanto-occipital joint'],
      'nerve': ['sub-occipital nerve']
    },
    'obturator externus': {
      'name': '<phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> externus',
			'origin': ['outer <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> membrane', 'rim of pubis and <phoneme alphabet="ipa" ph="ˈɪsˌkiʌm">ischium</phoneme> bordering membrane'],
      'insertion': ['trochanteric fossa on medial surface of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme>'],
      'action': ['laterally rotates hip'],
      'nerve': ['posterior division of <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> nerve (L2, 3, 4)']
    },
    'obturator internus': { // obturator internus a? b?
      'name': '<phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> internus',
			'origin': ['inner surface of <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> membrane', 'rim of pubis and <phoneme alphabet="ipa" ph="ˈɪsˌkiʌm">ischium</phoneme> bordering membrane'],
      'insertion': ['middle part of medial aspect of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['laterally rotates and stabilizes hip'],
      'nerve': ['nerve to <phoneme alphabet="ipa" ph="ɑb.tu.reɪ.tɚ">obturator</phoneme> internus (L5, S1, 2)']
    },
    'omohyoid': {
      'name': '<phoneme alphabet="ipa" ph="o.mo.haɪ.oɪd">omohyoid</phoneme>',
			'origin': ['suprascapular ligament', 'adjacent scapula'],
      'insertion': ['inferior border of body of hyoid bone'],
      'action': ['depresses hyoid bone and larynx'],
      'nerve': ['<phoneme alphabet="ipa" ph="ˈɑn.sə">ansa</phoneme> <phoneme alphabet="ipa" ph="sɚ.vɪ.kæ.lɪs">cervicalis</phoneme> nerve (C1, 2, 3)']
    },
    'opponen digiti minimi': {
      'name': 'opponen digiti minimi',
			'origin': ['flexor retinaculum', 'hook of hamate'],
      'insertion': ['ulnar border of shaft of fifth metacarpal'],
      'action': ['flexes and laterally rotates carpometacarpal and metacarpophalangeal joints of little finger'],
      'nerve': ['deep branch of ulnar nerve (C8, T1)']
    },
    'opponen pollicis': {
      'name': 'opponen pollicis',
			'origin': ['flexor retinaculum', '<phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of trapezium'],
      'insertion': ['whole radial border of first metacarpal'],
      'action': ['flexes and medially rotates carpometacarpal and metacarpophalangeal joints of thumb'],
      'nerve': ['recurrent branch of median nerve (C8, T1)']
    },
    'orbicularis oculi': {
      'name': 'orbicularis oculi',
			'origin': ['medial orbital margin', 'lacrimal sac'],
      'insertion': ['lateral palpebral <phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme>'],
      'action': ['closes eyelids', 'aids passage and drainage of tears'],
      'nerve': ['temporal and zygomatic branches of facial nerve (7)']
    },
    'orbicularis oris': {
      'name': 'orbicularis oris',
			'origin': ['near midline of anterior surface of maxilla and mandible', 'modiolus at angle of mouth'],
      'insertion': ['mucous membrane of margin of lips', '<phoneme alphabet="ipa" ph="reɪ.fi">raphe</phoneme> with <phoneme alphabet="ipa" ph="ˈbʌk.sɪn.eɪ.dɚ">buccinator</phoneme> at modiolus'],
      'action': ['narrows orifice of mouth', 'purses lips', 'puckers edges of lips'],
      'nerve': ['incisivus labii superioris and inferioris']
    },
    'palatoglossus': {
      'name': 'palatoglossus',
			'origin': ['palatine <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'insertion': ['posterolateral tongue'],
      'action': ['elevates posterior tongue', 'closes oropharyngeal isthmus', 'aids initiation of swallowing'],
      'nerve': ['pharyngeal branch of vagus nerve (10) with its motor fibers from cranial accessory nerve (11)']
    },
    'palatopharyngeus': {
      'name': 'palatopharyngeus',
			'origin': ['palatine <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>', 'posterior margin of hard palate'],
      'insertion': ['upper border of thyroid cartilage'],
      'action': ['elevates pharynx and larynx', 'closes <phoneme alphabet="ipa" ph="neɪ.zo">naso</phoneme> pharyngeal isthmus in swallowing'],
      'nerve': ['pharyngeal branch of vagus nerve (10) with its motor fibers from cranial accessory nerve (11)']
    },
    'palmaris brevis': {
      'name': '<phoneme alphabet="ipa" ph="pælˈmeɪr.ɪs">palmaris</phoneme> brevis',
			'origin': ['flexor retinaculum', 'palmar <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'insertion': ['skin of palm in dermis'],
      'action': ['steadies and corrugates skin of palm to help with grip'],
      'nerve': ['superficial branch of ulnar nerve (C8, T1)']
    },
    'palmaris longus': {
      'name': '<phoneme alphabet="ipa" ph="pælˈmeɪr.ɪs">palmaris</phoneme> longus',
			'origin': ['common flexor origin of medial <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> of humerus'],
      'insertion': ['flexor retinaculum', 'palmar <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['flexis wrist', 'tenses palmar <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'nerve': ['median nerve (C7, 8)']
    },
    'pectineus': {
      'name': '<phoneme alphabet="ipa" ph="pɛkˈtɪn.i.ʌs">pectineus</phoneme>',
			'origin': ['<phoneme alphabet="ipa" ph="pɛkˈtɪn.i.əl">pectineal</phoneme> line of pubis', 'narrow area of superior pubic ramus below it'],
      'insertion': ['vertical line between spiral line and gluteal crest below lesser <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['flexes, adducts, and medially rotates hip'],
      'nerve': ['anterior division of femoral nerve (L2, 3)']
    },
    'pectoralis major': {
      'name': 'pectoralis major',
			'origin': ['for clavicular head: anterior border of medial of the clavicle', 'for sternocostal head: lateral <phoneme alphabet="ipa" ph="mə.nu.bri.əm">manubrium</phoneme> and sternum, six upper costal cartilages, and external oblique <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'insertion': ['lateral lip of bicipital groove of humerus', 'anterior lip of deltoid tuberosity'],
      'action': ['for clavicular head: flexes and adducts arm', 'for sternocostal head: adducts and medially rotates arm'],
      'nerve': ['medial pectoral nerve', 'lateral pectoral nerve (C6, 7, 8)']
    },
    'pectoralis minor': {
      'name': 'pectoralis minor',
			'origin': ['third', 'fourth', 'fifth ribs'],
      'insertion': ['medial and upper surface of coracoid process of scapula'],
      'action': ['elevates ribs', 'protracts scapula'],
      'nerve': ['medial pectoral nerve (C8, T1)']
    },
    'peroneus brevis': {
      'name': 'peroneus brevis',
			'origin': ['lower two thirds of lateral shaft of fibula'],
      'insertion': ['tuberosity of base of fifth metatarsal'],
      'action': ['plantar flexes and everts foot', 'supports lateral longitudinal arch'],
      'nerve': ['superficial peroneal nerve (L5, S1)']
    },
    'peroneus longus': {
      'name': 'peroneus longus',
			'origin': ['upper two thirds of lateral shaft of fibula', 'head of fibula and superior tibiofibular joint'],
      'insertion': ['plantar aspect of base of first metatarsal and medial cuneiform'],
      'action': ['plantar flexes and everts foot', 'support lateral longitudinal and transverse arches'],
      'nerve': ['superficial peroneal nerve (L5, S1)']
    },
    'peroneus tertius': {
      'name': 'peroneus tertius',
			'origin': ['third quarter of anterior shaft of fibula'],
      'insertion': ['shaft and base of fifth metatarsal'],
      'action': ['extends and everts foot'],
      'nerve': ['deep peroneal nerve (L5, S1)']
    },
    'piriformis': {
      'name': 'piriformis',
			'origin': ['second, third, and fourth costotransverse base of anterior sacrum'],
      'insertion': ['anterior part of medial aspect of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['laterally rotates and stabilizes hip'],
      'nerve': ['anterior primary rami of S1, 2']
    },
    'plantaris': {
      'name': 'plantaris',
			'origin': ['lateral <phoneme alphabet="ipa" ph="su.prə.kɑn.dɪ.lɑr">supracondylar</phoneme> ridge of femur above lateral head of gastrocnemius'],
      'insertion': ['tendo calcaneus'],
      'action': ['plantar flexes foot', 'flexes knee'],
      'nerve': ['tibial nerve (S1, 2)']
    },
    'platysma': {
      'name': 'platysma',
			'origin': ['skin over lower neck and upper lateral chest'],
      'insertion': ['inferior border of mandible', 'skin over lower face and angle of mouth'],
      'action': ['depresses and wrinkles skin of lower face and mouth', 'aids forced depression of mandible'],
      'nerve': ['cervical branch of facial nerve (7)']
    },
    'popliteus': {
      'name': '<phoneme alphabet="ipa" ph="pʌˈplɪt.i.ʌs">popliteus</phoneme>',
			'origin': ['posterior shaft of tibia above <phoneme alphabet="ipa" ph="so.liəl">soleal</phoneme> line and below tibial <phoneme alphabet="ipa" ph="kɑndaɪls">condyles</phoneme>'],
      'insertion': ['middle of three facets on lateral surface of lateral <phoneme alphabet="ipa" ph="kɑndaɪl">condyle</phoneme> of femur'],
      'action': ['unlocks extended knee by lateral rotation of femur on tibia', 'pulls back lateral meniscus'],
      'nerve': ['tibial nerve (L5, S1)']
    },
    'posterior cricoarytenoid': {
      'name': 'posterior <phoneme alphabet="ipa" ph="kraɪ.koʊ əˈrɪt.ɪn.ɔɪd">cricoarytenoid</phoneme>',
			'origin': ['posterior aspect of <phoneme alphabet="ipa" ph="kraɪ.kɔɪd">cricoid</phoneme> cartilage'],
      'insertion': ['muscular process of <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'action': ['abducts and laterally rotates <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'nerve': ['recurrent laryngeal branch of vagus nerve (10)']
    },
    'procerus': {
      'name': 'procerus',
			'origin': ['nasal bone and cartilages'],
      'insertion': ['skin of medial forehead'],
      'action': ['wrinkles and frowns forehead'],
      'nerve': ['temporal branch of facial nerve (7)']
    },
    'pronator quadratus': {
      'name': 'pronator quadratus',
			'origin': ['lower quarter of <phoneme alphabet="ipa" ph="ˈæn.te.ro">antero</phoneme> medial shaft of ulna'],
      'insertion': ['lower quarter of <phoneme alphabet="ipa" ph="ˈæn.te.ro">antero</phoneme> lateral shaft of radius'],
      'action': ['pronates forearm'],
      'nerve': ['anterior interosseous nerve (C8)']
    },
    'pronator teres': {
      'name': 'pronator <phoneme alphabet="ipa" ph="ˈteɪr.iz">teres</phoneme>',
			'origin': ['for humeral head: medial <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme>, medial <phoneme alphabet="ipa" ph="su.prə.kɑn.dɪ.lɑr">supracondylar</phoneme> ridge, and medial intermuscular septum', 'for ulnar head: medial border of coronoid process'],
      'insertion': ['middle of lateral surface of body of radius'],
      'action': ['pronates forearm', 'flexes elbow'],
      'nerve': ['median nerve (C6, 7)']
    },
    'psoas major': {
      'name': 'psoas major',
			'origin': ['transverse process of L1 through 5', 'bodies of T12 through L5', 'intervertebral discs below bodies of T12 through L4'],
      'insertion': ['middle surface of lesser <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme> of femur'],
      'action': ['flexes and laterally rotates hip'],
      'nerve': ['anterior primary rami of L1, 2']
    },
    'psoas minor': {
      'name': 'psoas minor',
			'origin': ['bodies of T12 and L1'],
      'insertion': ['fascia over psoas major', 'iliacus'],
      'action': ['weakly flexes trunk'],
      'nerve': ['anterior primary rami of L1']
    },
    'pyramidalis': {
      'name': '<phoneme alphabet="ipa" ph="pɪˈræ.mɪ.dæ.lɪs">pyramidalis</phoneme>',
			'origin': ['pubic crest anterior to origin of rectus abdominis'],
      'insertion': ['lower linea alba'],
      'action': ['reinforces lower rectus sheath'],
      'nerve': ['subcostal nerve (T12)']
    },
    'quadratus femoris': {
      'name': 'quadratus <phoneme alphabet="ipa" ph="fɛˈmoʊr.ɪs">femoris</phoneme>',
			'origin': ['lateral border of <phoneme alphabet="ipa" ph="ˈɪs.kil">ischial</phoneme> tuberosity'],
      'insertion': ['quadrate <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of femur'],
      'action': ['laterally rotates and stabilizes hip'],
      'nerve': ['nerve to quadratus <phoneme alphabet="ipa" ph="fɛˈmoʊr.ɪs">femoris</phoneme> (L4, 5, S1)']
    },
    'quadratus lumborum': {
      'name': 'quadratus lumborum',
			'origin': ['apexes of transverse process of L1 through 4', '<phoneme alphabet="ipa" ph="ˈɪl.i.oˌlʌm.bɑr">iliolumbar</phoneme> ligament', 'posterior third of iliac crest'],
      'insertion': ['inferior border of twelfth rib'],
      'action': ['laterally flexes trunk', 'fixes twelfth rib during respiration'],
      'nerve': ['anterior primary rami (T12 through L3)']
    },
    'quadratus plantae': {
      'name': 'quadratus plantae',
			'origin': ['for lateral head: tuberosity of calcaneus', 'for medial head: medial side of calcaneus'],
      'insertion': ['tendons of flexor digitorum longus'],
      'action': ['flexes toes'],
      'nerve': ['lateral plantar nerve (S2, S3)']
    },
    'rectus abdominis': {
      'name': 'rectus abdominis',
			'origin': ['pubic crest', 'pubic symphysis'],
      'insertion': ['fifth, sixth, and seventh costal cartilages', 'medial inferiorcostal margin', 'posterior aspect of <phoneme alphabet="ipa" ph="ˈzaɪ.fɔɪd">xiphoid</phoneme>'],
      'action': ['flexes trunk', 'aids forced expiration', 'raises intra-abdominal pressure'],
      'nerve': ['anterior primary rami (T7 through 12)']
    },
    'rectus capitis anterior': { // anterior? lateralis? posterior major? posterior minor?
      'name': 'rectus capitis anterior',
			'origin': ['lateral mass of atlas (C1)'],
      'insertion': ['basilar occipital bone anterior to occipital <phoneme alphabet="ipa" ph="kɑndaɪl">condyle</phoneme>'],
      'action': ['flexes atlanto-occipital joint'],
      'nerve': ['anterior primary rami of C1']
    },
    'rectus capitis lateralis': {
      'name': 'rectus capitis <phoneme alphabet="ipa" ph="læ.dərˈæl.ɪs">lateralis</phoneme>',
			'origin': ['lateral mass of atlas (C1)'],
      'insertion': ['jugular process of occipital bone'],
      'action': ['laterally flexes atlanto-occipital joint'],
      'nerve': ['anterior primary rami of C1']
    },
    'rectus capitis posterior major': {
      'name': 'rectus capitis posterior major',
			'origin': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> process of axis (C2)'],
      'insertion': ['lateral half of inferior nuchal line'],
      'action': ['extends and rotates atlanto-occipital joint'],
      'nerve': ['sub-occipital nerve']
    },
    'rectus capitis posterior minor': {
      'name': 'rectus capitis posterior minor',
			'origin': ['posterior process of atlas (C1)'],
      'insertion': ['medial half of inferior nuchal line'],
      'action': ['extends and rotates atlanto-occipital joint'],
      'nerve': ['sub-occipital nerve']
    },
    'rectus femoris': {
      'name': 'rectus <phoneme alphabet="ipa" ph="fɛˈmoʊr.ɪs">femoris</phoneme>',
			'origin': ['for straight head: anterior inferior iliac spine', 'for reflected head: ilium above acetabulum'],
      'insertion': ['quadriceps tendon to patella'],
      'action': ['extends leg at knee', 'flexes thigh at hip'],
      'nerve': ['posterior division of femoral nerve (L3, 4)']
    },
    'rhomboid major': { // rhomboid? major or minor?
      'name': 'rhomboid major',
			'origin': ['spines of T2 through T5', '<phoneme alphabet="ipa" ph="ˈsup.rɪ.saɪ.nɪs">suprasinous</phoneme> ligaments'],
      'insertion': ['lower half of posteromedial border of scapula'],
      'action': ['retracts and rotates scapula'],
      'nerve': ['dorsal scapular nerve (C5)']
    },
    'rhomboid minor': {
      'name': 'rhomboid minor',
			'origin': ['nuchal ligaments', '<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes of C7 through T1'],
      'insertion': ['medial border of scapula'],
      'action': ['retracts and rotates scapula'],
      'nerve': ['dorsal scapular  nerve (C5)']
    },
    'risorius': {
      'name': 'risorius',
			'origin': ['deep fascia of face and parotid'],
      'insertion': ['modiolus', 'skin at angle of mouth'],
      'action': ['retracts angle of mouth'],
      'nerve': ['buccal branch of facial nerve (7)']
    },
    'salpingopharyngeus': {
      'name': '<phoneme alphabet="ipa" ph="sælˌping.o.fəˈrɪn.d͡ʒi.əs">salpingopharyngeus</phoneme>',
			'origin': ['inferior cartilage and mucosa of pharyngeal orifice of auditory tube'],
      'insertion': ['upper border of thyroid cartilage', 'inferior constrictor muscle fibers'],
      'action': ['elevates pharynx and larynx', 'aids swallowing', 'opens auditory canal during swallowing'],
      'nerve': ['pharyngeal branch of vagus nerve (10) with its motor fibers from cranial accessory nerve (11)']
    },
    'sartorius': {
      'name': 'sartorius',
			'origin': ['anterior superior iliac spine of pelvic bone'],
      'insertion': ['upper medial surface of shaft of tibia'],
      'action': ['flexes, abducts, and laterally rotates thigh at hip', 'flexes and medially rotates leg at knee'],
      'nerve': ['anterior division of femoral nerve (L3, 4)']
    },
    'scalenus anterior': {
      'name': 'scalenus anterior',
			'origin': ['anterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəls">tubercles</phoneme> of transverse processes of C3 through 6'],
      'insertion': ['scalene <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> on superior aspect of first rib'],
      'action': ['aids inspiration', 'laterally flexes neck'],
      'nerve': ['anterior primary rami of C5, 6']
    },
    'scalenus medius': {
      'name': 'scalenus medius',
			'origin': ['posterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəls">tubercles</phoneme> of transverse processes of C2 through 7'],
      'insertion': ['superior aspect of neck of first rib'],
      'action': ['aids inspiration'],
      'nerve': ['anterior primary rami of C3 through 8']
    },
    'scalenus minimus': {
      'name': 'scalenus minimus',
			'origin': ['anterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of transverse process of C7'],
      'insertion': ['suprapleural membrane'],
      'action': ['supports suprapleural membrane'],
      'nerve': ['anterior primary rami of C7']
    },
    'scalenus posterior': {
      'name': 'scalenus posterior',
			'origin': ['posterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəls">tubercles</phoneme> of transverse processes of C4 through 6'],
      'insertion': ['posterolateral surface of second rib'],
      'action': ['aids inspiration'],
      'nerve': ['anterior primary rami of C6 through 8']
    },
    'semimembranosus': {
      'name': '<phoneme alphabet="ipa" ph="sɛ.mi.mɛm.brə.noʊ.sɪs">semimembranosus</phoneme>',
			'origin': ['upper outer quadrant of posterior surface of <phoneme alphabet="ipa" ph="ˈɪs.kil">ischial</phoneme> tuberosity'],
      'insertion': ['medial <phoneme alphabet="ipa" ph="kɑndaɪl">condyle</phoneme> of tibia'],
      'action': ['flexes and medially rotates knee', 'extends hip'],
      'nerve': ['tibial portion of sciatic nerve (L5, S1)']
    },
    'semitendinosus': {
      'name': '<phoneme alphabet="ipa" ph="sɛ.mi.tɛn.dɪ.noʊ.sɪs">semitendinosus</phoneme>',
			'origin': ['upper inner quadrant of posterior surface of <phoneme alphabet="ipa" ph="ˈɪs.kil">ischial</phoneme> tuberosity'],
      'insertion': ['upper medial shaft of tibia'],
      'action': ['flexes and medially rotates knee', 'extends hip'],
      'nerve': ['tibial portion of sciatic nerve (L5, S1)']
    },
    'serratus anterior': {
      'name': '<phoneme alphabet="ipa" ph="səˈreɪ.tɪs">serratus</phoneme> anterior',
			'origin': ['upper eight ribs', 'anterior intercostal membranes from midclavicular line'],
      'insertion': ['inner medial border of scapula'],
      'action': ['laterally rotates and protracts scapula'],
      'nerve': ['long thoracic nerve (C5, 6, 7)']
    },
    'serratus posterior inferior': {
      'name': '<phoneme alphabet="ipa" ph="səˈreɪ.tɪs">serratus</phoneme> posterior inferior',
			'origin': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes', '<phoneme alphabet="ipa" ph="su.prə.spaɪ.nɪs">supraspinous</phoneme> ligaments of T11 through L2'],
      'insertion': ['posterior aspect of ribs 9 through 12'],
      'action': ['assists forced expiration'],
      'nerve': ['anterior primary rami (T9 through 12)']
    },
    'serratus posterior superior': {
      'name': '<phoneme alphabet="ipa" ph="səˈreɪ.tɪs">serratus</phoneme> posterior superior',
			'origin': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes', '<phoneme alphabet="ipa" ph="su.prə.spaɪ.nɪs">supraspinous</phoneme> ligaments of C7 through T2'],
      'insertion': ['posterior aspect of second through fifth ribs'],
      'action': ['assists forced inspiration'],
      'nerve': ['anterior primary rami (T2 through 5)']
    },
    'soleus': {
      'name': 'soleus',
			'origin': ['<phoneme alphabet="ipa" ph="so.liəl">soleal</phoneme> line and middle third of posterior border of tibia', 'upper quarter of posterior shaft of fibula'],
      'insertion': ['tendo calcaneus'],
      'action': ['plantar flexes foot'],
      'nerve': ['tibial nerve (S1, 2)']
    },
    'sphincter ani': {
      'name': 'sphincter ani',
			'origin': ['circular anatomical sphincter'],
      'insertion': ['deep, superficial, and subcutaneous portions'],
      'action': ['maintains continence of feces'],
      'nerve': ['inferior rectal branch of pudendal nerve (S2, 3, 4)']
    },
    'sphincter urethrae': {
      'name': 'sphincter urethrae',
			'origin': ['circular anatomical sphincter'],
      'insertion': ['fuses with deep transverse <phoneme alphabet="ipa" ph="pɚˈɪn.i.aɪ">perinei</phoneme>'],
      'action': ['maintains continence of urine'],
      'nerve': ['perineal branch of pudendal nerve (S2, 3, 4)']
    },
    'splenius capitis': {
      'name': 'splenius capitis',
			'origin': ['lower nuchal ligament', '<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes', '<phoneme alphabet="ipa" ph="su.prə.spaɪ.nɪs">supraspinous</phoneme> ligaments T1 through 3'],
      'insertion': ['lateral occiput between superior and inferior nuchal lines'],
      'action': ['extends and rotates cervical spine'],
      'nerve': ['posterior primary rami of C3, 4']
    },
    'splenius cervicis': {
      'name': 'splenius cervicis',
			'origin': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes', '<phoneme alphabet="ipa" ph="su.prə.spaɪ.nɪs">supraspinous</phoneme> ligaments of T3 through 6'],
      'insertion': ['posterior <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəls">tubercles</phoneme> of transverse processes of C1 through 3'],
      'action': ['extends and rotates cervical spine'],
      'nerve': ['posterior primary rami of C5, 6']
    },
    'stapedius': {
      'name': 'stapedius',
			'origin': ['posterior wall of middle ear'],
      'insertion': ['neck of stapes'],
      'action': ['protects and critically dampens ossicular chain'],
      'nerve': ['facial nerve (7)']
    },
    'sternocleidomastoid': {
      'name': '<phoneme alphabet="ipa" ph="ˌstɝ.no.klaɪd.oˈmæstɔɪd">sternocleidomastoid</phoneme> ',
			'origin': ['anterior and superior <phoneme alphabet="ipa" ph="mə.nu.bri.əm">manubrium</phoneme>', 'superior medial third of clavicle'],
      'insertion': ['lateral aspect of mastoid process', 'anterior half of superior nuchal line'],
      'action': ['flexes and laterally rotates cervical spine', 'protracts head', 'extends neck'],
      'nerve': ['spinal accessory nerve']
    },
    'sternohyoid': {
      'name': '<phoneme alphabet="ipa" ph="ˌstɝ.noˈhaɪ.ɔɪd">sternohyoid</phoneme>',
			'origin': ['superior lateral posterior aspect of <phoneme alphabet="ipa" ph="mə.nu.bri.əm">manubrium</phoneme>'],
      'insertion': ['inferior border of body of hyoid bone'],
      'action': ['depresses hyoid bone and larynx'],
      'nerve': ['<phoneme alphabet="ipa" ph="ˈɑn.sə">ansa</phoneme> <phoneme alphabet="ipa" ph="sɚ.vɪ.kæ.lɪs">cervicalis</phoneme> nerve (C1, 2, 3)']
    },
    'sternothyroid': {
      'name': 'sternothyroid',
			'origin': ['medial posterior aspect of <phoneme alphabet="ipa" ph="mə.nu.bri.əm">manubrium</phoneme>'],
      'insertion': ['oblique line of lamina of thyroid cartilage'],
      'action': ['depresses larynx'],
      'nerve': ['<phoneme alphabet="ipa" ph="ˈɑn.sə">ansa</phoneme> <phoneme alphabet="ipa" ph="sɚ.vɪ.kæ.lɪs">cervicalis</phoneme> nerve (C1, 2, 3)']
    },
    'styloglossus': {
      'name': 'styloglossus',
			'origin': ['anterior surface and apex of styloid process', 'upper quarter stylohyoid ligament'],
      'insertion': ['superolateral sides of tongue'],
      'action': ['retracts and elevates tongue', 'aids initiation of swallowing'],
      'nerve': ['hypoglossal nerve (12)']
    },
    'stylohyoid': {
      'name': 'stylohyoid',
			'origin': ['base of styloid process'],
      'insertion': ['base of greater cornu of hyoid bone'],
      'action': ['elevates and retracts hyoid bone', 'aids swallowing', 'elevates larynx'],
      'nerve': ['mandibular branch of facial nerve (7)']
    },
    'stylopharyngeus': {
      'name': 'stylopharyngeus',
			'origin': ['medial aspect of styloid process'],
      'insertion': ['posterolateral border of thyroid cartilage'],
      'action': ['elevates larynx and pharynx', 'aids swallowing'],
      'nerve': ['muscular branch of glosso-pharyngeal nerve (9)']
    },
    'subclavius': {
      'name': 'subclavius',
			'origin': ['costochondral junction of first rib'],
      'insertion': ['subclavian groove on interior surface of middle third of clavicle'],
      'action': ['depresses and steadies clavicle'],
      'nerve': ['nerve to subclavius (C5, 6)']
    },
    'subcostalis': {
      'name': 'subcostalis',
			'origin': ['internal posterior aspects of lower six ribs'],
      'insertion': ['internal aspects of ribs two to three levels below'],
      'action': ['depresses lower ribs'],
      'nerve': ['muscular collateral branches of intercostal nerves']
    },
    'subscapularis': {
      'name': '<phoneme alphabet="ipa" ph="sʌbˈskæp.ju.leɪr.ɪs">subscapularis</phoneme>',
			'origin': ['medial two thirds of subscapular fossa'],
      'insertion': ['lesser tuberosity of humerus', 'upper medial lip of bicipital groove', 'capsule of shoulder joint'],
      'action': ['medially rotates arm', 'stabilizes shoulder joint'],
      'nerve': ['upper and lower subscapular nerves (C5, 6)']
    },
    'superficial transverse perinei': {
      'name': 'superficial transverse <phoneme alphabet="ipa" ph="pɚˈɪn.i.aɪ">perinei</phoneme>',
			'origin': ['body of <phoneme alphabet="ipa" ph="ˈɪsˌkiʌm">ischium</phoneme>'],
      'insertion': ['perineal body'],
      'action': ['fixes perineal body'],
      'nerve': ['perineal branch of pudendal nerve (S2, 3, 4)']
    },
    'superior oblique': {
      'name': 'superior oblique',
			'origin': ['body of <phoneme alphabet="ipa" ph="ˈsfi.nɔɪd">sphenoid</phoneme> above tendinous ring'],
      'insertion': ['posterosuperior quadrant of <phoneme alphabet="ipa" ph="ˈskleɪr.ə">sclera</phoneme> behind equator of eyeball'],
      'action': ['depresses eye in adduction', 'medially rotates eye in abduction'],
      'nerve': ['trochlear nerve (4)']
    },
    'superior rectus': {
      'name': 'superior rectus',
			'origin': ['superior tendinous ring within orbit'],
      'insertion': ['superior <phoneme alphabet="ipa" ph="ˈskleɪr.ə">sclera</phoneme> anterior to equator of eyeball'],
      'action': ['elevates eye', 'medially rotates eye in adduction'],
      'nerve': ['superior division of oculomotor nerve (3)']
    },
    'supinator': {
      'name': 'supinator',
			'origin': ['lateral <phoneme alphabet="ipa" ph="ɛpɪkɑndaɪl">epicondyle</phoneme> of humerus', 'supinator crest of ulna', 'radial collateral ligament', 'annular ligament'],
      'insertion': ['lateral proximal radial shaft'],
      'action': ['supinates forearm'],
      'nerve': ['posterior interosseous nerve (C5, 6)']
    },
    'supraspinatus': {
      'name': '<phoneme alphabet="ipa" ph="su.prə.spɪ.neɪ.dɪs">supraspinatus</phoneme>',
			'origin': ['medial three quarters of <phoneme alphabet="ipa" ph="su.prə.spaɪ.nɪs">supraspinous</phoneme> fossa of scapula'],
      'insertion': ['superior facet on greater tuberosity of humerus', 'capsule of shoulder joint'],
      'action': ['abducts arm', 'stabilizes shoulder joint'],
      'nerve': ['suprascapular nerve (C5, 6)']
    },
    'temporalis': {
      'name': 'temporalis',
			'origin': ['temporal fossa between inferior temporal line and infratemporal crest'],
      'insertion': ['medial and anterior aspect of coronoid process of mandible'],
      'action': ['elevates mandible'],
      'nerve': ['deep temporal branchs from anterior division of mandibular nerve (5)']
    },
    'temporoparietalis': {
      'name': '<phoneme alphabet="ipa" ph="tɛmˈpor.oʊ.pəˌraɪ.ə.tæl.ɪs">temporoparietalis</phoneme>',
			'origin': ['<phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> above auricularis'],
      'insertion': ['galeal <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['fixes galeal <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'nerve': ['temporal branch of facial nerve (7)']
    },
    'tensor fascia lata': {
      'name': 'tensor fascia lata',
			'origin': ['iliac crest'],
      'insertion': ['iliotibial tract'],
      'action': ['maintains extension of knee', 'abducts hip'],
      'nerve': ['superior gluteal nerve (L4, 5, S1)']
    },
    'tensor tympani': {
      'name': 'tensor tympani',
			'origin': ['cartilaginous and bony margins of auditory tube'],
      'insertion': ['handle of malleus'],
      'action': ['protects and critically dampens ossicular chain'],
      'nerve': ['nerve to medial pterygoid']
    },
    'tensor veli palatini': {
      'name': 'tensor veli palatini',
			'origin': ['scaphoid fossa', 'medial aspect of spine of <phoneme alphabet="ipa" ph="ˈsfi.nɔɪd">sphenoid</phoneme> bone'],
      'insertion': ['palatine <phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme>'],
      'action': ['tenses soft palate prior to elevation'],
      'nerve': ['never to medial pterygoid']
    },
    'teres major': {
      'name': '<phoneme alphabet="ipa" ph="ˈteɪr.iz">teres</phoneme> major',
			'origin': ['posterior aspect of the inferior angle of scapula'],
      'insertion': ['medial lip of bicipital groove of humerus'],
      'action': ['medially rotates and adducts arm', 'stabilizes shoulder joint'],
      'nerve': ['lower subscapular nerve (C5, 6)']
    },
    'teres minor': {
      'name': '<phoneme alphabet="ipa" ph="ˈteɪr.iz">teres</phoneme> minor',
			'origin': ['lateral border of scapula'],
      'insertion': ['inferior facet of greater tuberosity of humerus', 'capsule of shoulder joint'],
      'action': ['laterally rotates arm', 'stabilizes shoulder joint'],
      'nerve': ['axillary nerve (C5, 6)']
    },
    'thyroarytenoid': {
      'name': '<phoneme alphabet="ipa" ph="θaɪ.ro əˈrɪt.ɪn.ɔɪd">thyroarytenoid</phoneme>',
			'origin': ['inner surface of thyroid cartilage'],
      'insertion': ['vocal process of <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'action': ['shortens and relaxes vocal cords by medial rotation and protraction of <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'nerve': ['recurrent laryngeal branch of vagus nerve (10)']
    },
    'thyroepiglotticus': {
      'name': 'thyroepiglotticus',
			'origin': ['lower posterior surface of thyroid cartilage'],
      'insertion': ['lateral border of epiglottis'],
      'action': ['aids closure of additus to larynx'],
      'nerve': ['recurrent laryngeal branch of vagus nerve (10)']
    },
    'thyrohyoid': {
      'name': 'thyrohyoid',
			'origin': ['oblique line of lamina of thyroid cartilage'],
      'insertion': ['inferior border of body of hyoid bone'],
      'action': ['elevates larynx', 'depresses hyoid bone'],
      'nerve': ['C1 fibers carried by hypoglossal nerve (12)']
    },
    'tibialis anterior': {
      'name': '<phoneme alphabet="ipa" ph="tɪ.biˈæl.ɪs">tibialis</phoneme> anterior',
			'origin': ['upper half of lateral shaft of tibia', 'interosseous membrane'],
      'insertion': ['inferomedial aspect of medial cuneiform', 'base of first metatarsal'],
      'action': ['extends and inverts foot at ankle', 'supports medial longitudinal arch of foot'],
      'nerve': ['deep peroneal nerve (L4, 5)']
    },
    'tibialis posterior': {
      'name': '<phoneme alphabet="ipa" ph="tɪ.biˈæl.ɪs">tibialis</phoneme> posterior',
			'origin': ['upper half of posterior shaft of tibia', 'upper half of fibula between medial nerve crest and interosseous border', 'interosseous'],
      'insertion': ['tuberosity of navicular bone', 'all tarsal bones except talus', 'spring ligament'],
      'action': ['plantar flexes and inverts foot', 'supports medial longitudinal arch of foot'],
      'nerve': ['tibial nerve (L4, 5)']
    },
    'transverse arytenoid': {
      'name': 'transverse <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme>',
			'origin': ['posterior surface and muscular process of <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'insertion': ['corresponding surfaces of opposite cartilage'],
      'action': ['adducts <phoneme alphabet="ipa" ph="əˈrɪt.ɪn.ɔɪd">arytenoid</phoneme> cartilage'],
      'nerve': ['recurrent laryngeal branch of vagus nerve (10)']
    },
    'transversospinalis multifidus': {
      'name': '<phoneme alphabet="ipa" ph="trænsˈvɝ.so.spɪˌnæ.lɪs">transversospinalis</phoneme> <phoneme alphabet="ipa" ph="mʌlˈtɪf.ɪˌdʌs">multifidus</phoneme>',
			'origin': ['laminae of vertebra'],
      'insertion': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes two to three levels above'],
      'action': ['extends spine'],
      'nerve': ['posterior primary rami']
    },
    'transversospinalis rotatores': {
      'name': '<phoneme alphabet="ipa" ph="trænsˈvɝ.so.spɪˌnæ.lɪs">transversospinalis</phoneme> rotatores',
			'origin': ['transverse processes'],
      'insertion': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes one above'],
      'action': ['rotates spine'],
      'nerve': ['posterior primary rami']
    },
    'transversospinalis semispinalis': {
      'name': '<phoneme alphabet="ipa" ph="trænsˈvɝ.so.spɪˌnæ.lɪs">transversospinalis</phoneme> <phoneme alphabet="ipa" ph="sɛm.i.spɪˌnæ.lɪs">semispinalis</phoneme>',
			'origin': ['transverse processes'],
      'insertion': ['<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes above', 'occipital bone'],
      'action': ['extends head and spine', 'laterally flexes spine'],
      'nerve': ['posterior primary rami']
    },
    'transversus abdominis': {
      'name': 'transversus abdominis',
			'origin': ['costal margin', 'lumbar fascia', 'anterior two thirds of iliac crest', 'lateral half of inguinal ligament'],
      'insertion': ['<phoneme alphabet="ipa" ph="æp.ə.nu.ros.ɪs">aponeurosis</phoneme> of posterior and anterior rectus sheath', 'conjoint tendon pubic crest and <phoneme alphabet="ipa" ph="pɛkˈtɪn.i.əl">pectineal</phoneme> line'],
      'action': ['supports abdominal wall', 'aids forced expiration and raising of intra-abdominal pressure'],
      'nerve': ['anterior primary rami (T7 through 12)']
    },
    'transversus thoracis': {
      'name': 'transversus <phoneme alphabet="ipa" ph="θorˈæs.ɪs">thoracis</phoneme>',
			'origin': ['lower third of inner aspect of sternum', 'lower three costosternal junctions'],
      'insertion': ['second to sixth costal cartilages'],
      'action': ['depresses upper ribs'],
      'nerve': ['muscular collateral branchs of intercostal nerves']
    },
    'trapezius': {
      'name': 'trapezius',
			'origin': ['medial third of superior nuchal line', 'nuchal ligament', '<phoneme alphabet="ipa" ph="spaɪ.nɪs">spinous</phoneme> processes', '<phoneme alphabet="ipa" ph="su.prə.spaɪ.nɪs">supraspinous</phoneme> ligaments to T12'],
      'insertion': ['external occipital protuberance', 'nuchal ligament', 'medial superior nuchal line', 'posterior border of the lateral third of clavicle', '<phoneme alphabet="ipa" ph="əˈkro.mi.ʌn">acromion</phoneme> process', 'spine of scapula'],
      'action': ['laterally rotates, elevates, and retracts scapula'],
      'nerve': ['spinal accessory nerve (C1 through 5)']
    },
    'triceps': { // triceps brachii?
      'name': 'triceps',
			'origin': ['for long head: infraglenoid <phoneme alphabet="ipa" ph="ˈtu.bɚ.kəl">tubercle</phoneme> of scapula', 'for lateral head: upper half of posterior humerus', 'for medial head: lower half of posterior humerus'],
      'insertion': ['<phoneme alphabet="ipa" ph="əˈlɛk.rə.nɑn">olecranon</phoneme> process of ulna'],
      'action': ['extends elbow', 'long head stabilizes shoulder joint', 'medial head retracts capsule of elbow joint on extension'],
      'nerve': ['radial nerve (C7, 8)']
    },
    'vastus intermedius': {
      'name': 'vastus intermedius',
			'origin': ['anterior and lateral shaft of femur'],
      'insertion': ['quadriceps tendon to patella'],
      'action': ['extends knee'],
      'nerve': ['posterior division of femoral nerve (L3, 4)']
    },
    'vastus lateralis': {
      'name': 'vastus <phoneme alphabet="ipa" ph="læ.dərˈæl.ɪs">lateralis</phoneme>',
			'origin': ['upper <phoneme alphabet="ipa" ph="ɪn.tɝ.oˈtroʊ.kæn.teɪr.ɪk">interotrochanteric</phoneme> line', 'base of greater <phoneme alphabet="ipa" ph="troʊˈkæn.tɚ">trochanter</phoneme>', 'lateral linea aspera', 'lateral <phoneme alphabet="ipa" ph="su.prə.kɑn.dɪ.lɑr">supracondylar</phoneme> ridge', 'lateral intermuscular septum'],
      'insertion': ['lateral quadriceps tendon to patella'],
      'action': ['extends knee'],
      'nerve': ['posterior division of femoral nerve (L3, 4)']
    },
    'vastus medialis': {
      'name': 'vastus medialis',
			'origin': ['lower <phoneme alphabet="ipa" ph="ɪn.tɝ.oˈtroʊ.kæn.teɪr.ɪk">interotrochanteric</phoneme> line', 'spiral line', 'medial linea aspera', 'medial intermuscular septum'],
      'insertion': ['medial quadriceps tendon to patella'],
      'action': ['extends knee', 'stabilizes patella'],
      'nerve': ['posterior division of femoral nerve (L3, 4)']
    },
    'zygomaticus major': {
      'name': 'zygomaticus major',
			'origin': ['anterior surface of zygomatic bone'],
      'insertion': ['modiolus at angle of mouth'],
      'action': ['elevates and draws angle of mouth laterally'],
      'nerve': ['buccal branch of facial nerve (7)']
    },
    'zygomaticus minor': {
      'name': 'zygomaticus minor',
			'origin': ['lateral <phoneme alphabet="ipa" ph="ɪn.frə.orb.ɪt.əl">infraorbital</phoneme> margin'],
      'insertion': ['skin and muscle of upper lip'],
      'action': ['elevates and everts upper lip'],
      'nerve': ['buccal branch of facial nerve (7)']
    }
  }
};
