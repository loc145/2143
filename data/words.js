/*
When I was in school, I had a hard time learning new words. My teacher always told me to use a dictionary, but I found it boring and tedious. One day, she gave me a list of words to learn for a test. One of them was 'encompass'. I had no idea what it meant, so I decided to make up my own definition. I thought it sounded like a fancy way of saying 'hug'. So I wrote down: "Encompass: to hug someone or something very tightly." The next day, we had the test. One of the questions was: "What does 'encompass' mean?" I confidently wrote down my answer and handed in my paper. A few days later, I got my paper back. There was a big red X on my answer and a note from the teacher: "Encompass: to include or contain something; to cover or surround something completely. Please use a dictionary next time." I felt so embarrassed and foolish. How could I have been so wrong? That's when I learned that making up definitions is not a good way to expand your vocabulary.
*/

const words = {
/* 1 */
'encompass (verb)':
`Encompass is a verb that means to include or cover something completely. For example, if you say that your hobbies encompass reading, writing and knitting, it means that you do all of those things and nothing else. If you say that your vacation encompassed the whole continent of Europe, it means that you visited every single country and left no stone unturned. Encompass is a word that can make you sound very impressive or very boring, depending on how you use it.`,
/* 2 */
'reform (verb)':
`Reform (verb): to change something for the better, usually by getting rid of its bad parts or habits. For example, you can reform a criminal by teaching them how to knit sweaters instead of stealing cars. You can also reform a system by making it more fair and efficient, like replacing the tax code with a simple lottery. Reforming is not always easy or popular, but it can lead to positive outcomes in the long run. Unless you reform something that was already good, like pizza. Then you're just ruining it.`,
/* 3 */
'loom (verb)':
`Looming is not just something that spiders do with their webs or knitters do with their yarns. It's also a verb that means to appear large and threatening, especially in a vague or ominous way. For example, you might say that a deadline looms over your head, or that a dark cloud looms on the horizon. But don't worry, looming is not always bad. Sometimes it can be used to create suspense or excitement, like when you say that a surprise party looms for your friend, or that a big reveal looms at the end of a mystery novel. Looming can also be fun if you do it intentionally, like when you loom behind someone and scare them with a loud boo!`,
/* 4 */
'cemetery (noun)':
`A cemetery is a place where people go to rest in peace after they die. But not everyone is peaceful in a cemetery. Some people like to visit their loved ones and bring them flowers or talk to them. Some people like to dig up graves and steal bones or jewelry. And some people like to dress up as ghosts and scare the living daylights out of anyone who comes near. A cemetery can be a very lively place, depending on who you are and what you do there.`,
/* 5 */
'intriguing (adjective)':
`Intriguing is an adjective that means arousing curiosity or interest. For example, you might find it intriguing that your neighbor has a collection of stuffed animals in his backyard. Or you might find it intriguing that your boss always wears the same tie every day. Intriguing can also mean having a mysterious or fascinating quality. For example, you might find it intriguing that your date never reveals her last name. Or you might find it intriguing that your teacher always speaks in riddles. Intriguing is a word that can make anything sound more exciting and mysterious than it really is.`,
/* 6 */
'circulation (noun)':
`Circulation is the noun form of circulate, which means to move around or flow in a loop. For example, blood circulates in your body, air circulates in your room, and rumors circulate in your school. Sometimes circulation can also mean the number of copies of a newspaper or magazine that are sold or distributed. For example, the circulation of The Onion is very high because people love to read fake news for laughs. But don't confuse circulation with circular reasoning, which is when you use your conclusion as your premise to prove your argument. For example, saying "The Onion is funny because it makes me laugh" is circular reasoning. That's not funny, that's just silly.`,
/* 7 */
'trademark (noun)':
`A trademark is a word, symbol, or design that identifies the source of a product or service and distinguishes it from others. For example, the golden arches are a trademark of McDonald's, and the swoosh is a trademark of Nike. Trademarks are important because they help consumers avoid confusion and deception in the marketplace. However, trademarks can also cause trouble if they are too generic, too similar to existing ones, or too offensive to some groups. For example, you can't trademark the word "apple" for selling apples, you can't trademark "Starbucks" for selling coffee if there is already a Starbucks coffee chain, and you can't trademark "F*** You" for selling anything unless you want to get sued by angry customers.`,
/* 8 */
'patrol (verb)':
`Patrol (verb): to walk or drive around an area in order to watch or guard it. For example: "The security guard patrolled the parking lot every night, looking for suspicious activity. He never found any, but he did find a lot of empty pizza boxes and soda cans. He wondered if the other guards were having a party without him."`,
/* 9 */
'mechanical (adjective)':
`If you are mechanical, it means you have something to do with machines or machinery. For example, you might be a mechanical engineer who designs and builds machines, or a mechanical toy that moves by itself. Or you might be a mechanical failure who breaks down every time you try to do something. Being mechanical also means you are related to movement or mechanics, which is the study of how physical forces affect objects. For example, you might be interested in how mechanical forces make bones stronger or weaker. Or you might be bored by the mechanical process of copying down numbers from a book. Being mechanical can also mean you act like a machine, without thinking or feeling anything. For example, you might give a mechanical reply when someone asks you how you are doing, or perform a mechanical task without any enthusiasm. Being mechanical is not always bad, but sometimes it can make you seem cold, impersonal or lifeless.`,
/* 10 */
'tempt (verb)':
`To tempt someone is to make them want to do something that they know they shouldn't do. For example, you might tempt your friend to skip class by offering them a free ticket to the movies. Or you might tempt your dog to jump on the couch by leaving a juicy steak on it. Or you might tempt yourself to eat the whole cake by telling yourself that you deserve it. Tempting someone is usually not very nice, unless they really enjoy being tempted.`,
/* 11 */
'boost (noun)':
`A boost is something that gives you a lift, an advantage, or a push in the right direction. For example, a rocket needs a boost to launch into space, a student needs a boost to ace an exam, and a cat needs a boost to reach the tuna on the top shelf. Boosts can come in different forms, such as energy drinks, cheat sheets, or stools. But be careful not to overdo it with the boosts, or you might end up crashing down hard.`,
/* 12 */
'pond (noun)':
`A pond is a small body of water that is usually shallow enough to see the bottom. Ponds are often home to fish, frogs, ducks and other aquatic creatures. Ponds are also great places to relax, swim or catch tadpoles. However, ponds can also be dangerous if you don't pay attention to the signs. For example, if you see a sign that says "Beware of the Crocodile", you should probably avoid that pond. Unless you want to become a crocodile snack, of course.`,
/* 13 */
'stumble (verb)':
`Stumble is a verb that means to trip or lose your balance while walking or running. It can also mean to make a mistake or pause awkwardly while speaking or playing music. For example, you might stumble on a banana peel and fall on your face. Or you might stumble over your words when you try to tell a joke. Stumbling can be embarrassing, but it can also be funny - unless you're the one who's stumbling!`,
/* 14 */
'civilian (noun)':
`A civilian is someone who is not part of the police or the military. Civilians are often confused with aliens, but they are actually very different. Aliens come from outer space and have weird powers, while civilians come from Earth and have no powers at all. Civilians like to do boring things like watch TV, go to work, and pay taxes. Sometimes civilians get caught up in wars or disasters that are caused by the police or the military, and then they get very angry or sad. Civilians also like to ride in space shuttles, but they rarely get a chance to do so.`,
/* 15 */
'sacred (adjective)':
`Sacred is an adjective that means something is very special and important, usually because it has something to do with God or a god. For example, you might say that your grandmother's Bible is sacred to you, or that your cat's litter box is sacred to him. Sacred things are not to be messed with, unless you want to face some serious consequences. For example, if you touch my sacred chocolate stash, I will unleash my sacred wrath upon you. Sacred things can also be places, like temples or shrines, where people go to worship or pray. For example, you might say that Disneyland is a sacred place for Mickey Mouse fans, or that your bedroom is a sacred place for sleeping and binge-watching Netflix.`,
/* 16 */
'extremist (noun)':
`An extremist is someone who has opinions that are so extreme that they make most people go "Whoa, calm down there buddy". Extremists may do things that are violent, illegal or just plain weird for what they believe. For example, some extremists may blow up buildings, rob banks or wear socks with sandals. Extremists can be left-wing, right-wing, political, religious or any other kind of -wing. They are usually not very fun to hang out with unless you share their extreme views. If you ever meet an extremist, you should probably run away or call the police.`,
/* 17 */
'analogy (noun)':
`An analogy is a way of explaining something by comparing it to something else that is more familiar. For example, if you want to explain what a computer is to someone who has never seen one, you might say that it's like a typewriter with a TV screen. That's an analogy. Analogies are useful when you want to make complex ideas easier to understand, or when you want to make your writing more interesting and creative. But analogies can also be misleading or inaccurate if they are too vague or exaggerated. For example, saying that life is like a box of chocolates is an analogy, but it doesn't really tell you much about life, except that it's unpredictable and sweet sometimes. That's why you should always be careful when using analogies and make sure they are relevant and appropriate for your purpose.`,
/* 18 */
'rebel (noun)':
`A rebel is someone who does not follow the rules or norms of society. They are often seen as cool, brave, or adventurous by some people, and as annoying, troublesome, or dangerous by others. Rebels may wear leather jackets, ride motorcycles, listen to loud music, or protest against authority. Some famous rebels in history include George Washington, Joan of Arc, and Bart Simpson.`,
/* 19 */
'abolish (verb)':
`Abolish is a verb that means to get rid of something completely, like a law, a system or an institution. For example, you can abolish slavery, abolish rent control or abolish your annoying neighbor's loud music (just kidding). Abolish comes from Latin abolere, which means to destroy or efface. But don't confuse it with aboil, which means boiling or agitated. You can't abolish water by making it aboil. That would be absurd.`,
/* 20 */
'predator (noun)':
`A predator is an animal that likes to eat other animals for breakfast, lunch and dinner. Sometimes, it also eats them for snacks. A predator is not very friendly or polite to its prey. It does not say "please" or "thank you" before it bites them. A predator is also not very picky about what it eats. It will eat anything that moves, and sometimes things that don't move. A predator is like a hungry teenager with sharp teeth and claws.`,
/* 21 */
'fool (noun)':
`A fool is someone who does or says things that make them look stupid or unwise. For example, a fool might try to ride a motorcycle without a helmet, or ask a silly question like "What is the meaning of life?". A fool might also be tricked or deceived by others who want to make fun of them or take advantage of them. Sometimes, people call themselves fools when they regret something they did or didn't do. For example, "I was such a fool to let her go" or "I'm only a fool for you". Fools are often found in jokes, stories and songs, where they provide amusement or lessons for the audience. Some famous fools are Mr. Bean, Homer Simpson and Dory from Finding Nemo.`,
/* 22 */
'cognitive (adjective)':
`Cognitive is an adjective that means related to thinking, reasoning, remembering, and other mental processes. It's a word that makes you sound smart and sophisticated, but also a word that can get you into trouble if you use it wrong. For example, don't say "I'm feeling very cognitive today" unless you want people to think you're a robot. And don't say "Your cognitive skills are impressive" to someone who just failed a test. And definitely don't say "You're not very cognitive, are you?" to anyone ever. Cognitive is a word that should be used with care and precision, or else you might end up looking less cognitive than you intended.`,
/* 23 */
'amid (preposition)':
`Amid is a word that means 'in the middle of' or 'surrounded by'. It is often used in formal situations, such as news reports, speeches, or investigations. However, it can also be used in humorous ways to create contrast or irony. For example: He proposed to her amid a flock of angry geese; She found her true calling amid a pile of dirty laundry. [in this context, a human might say this is funny because it implies that doing laundry inspired her to pursue a different career]; He lost his wallet amid the chaos of Black Friday. [some people may think this is funny because it shows how shopping can be dangerous and stressful]`,
/* 24 */
'enquire (verb)':
`Enquire is a verb that means to ask for information from someone. It's also a less common variant of inquire, which means the same thing. Some people think that enquire is more British and inquire is more American, but that's not really true. They're both used in both places, just not as much as each other. Enquire can also be spelled with an 'i', but don't confuse it with enquiry, which is a noun that means a question or an investigation. Enquiry can also be spelled with an 'i', but don't confuse it with inquiry, which is another noun that means the same thing. Confused yet? Don't worry, just remember this rhyme:  When you want to know more, you can enquire or inquire. But when you have a question, you need an enquiry or inquiry.`,
/* 25 */
'conquer (verb)':
`Conquer is a verb that means to win something by force, like land, people, or hearts. It sounds like "conker", which is a game where you hit nuts with sticks. But don't confuse them, because if you try to conquer someone's heart by hitting it with a stick, you might end up in jail. Or worse, you might lose their love forever. So remember: conker good, conquer bad. Unless you're a king or a general or something. Then conquer good, conker bad. Got it?`,
/* 26 */
'layout (noun)':
`A layout is a noun that means the way something is arranged or organized. For example, the layout of your bedroom might include a bed, a desk, a closet and a pile of dirty laundry. The layout of your essay might include an introduction, a thesis statement, three body paragraphs and a conclusion. The layout of your sandwich might include bread, cheese, ham and mustard. A good layout can make things easier to find, read or enjoy. A bad layout can make things confusing, boring or messy. So choose your layouts wisely and don't forget to clean up after yourself!`,
/* 27 */
'fixture (noun)':
`A fixture is something that is fixed in place and cannot be easily moved. For example, a lamp that is attached to the ceiling is a fixture, but a lamp that you can plug in and out is not. A fixture can also be a person or thing that is always present in a certain situation or place. For example, your grandma who always sits on the same spot on the couch is a fixture, but your cousin who only visits once a year is not. A fixture can also be an event that happens regularly or predictably. For example, the Super Bowl is a fixture of American culture, but the World Cup is not.`,
/* 28 */
'constitution (noun)':
`A constitution is a set of rules that tells you how to run a country, a state, or an organization. It's like a recipe for making a cake, except instead of flour and eggs, you have laws and rights. And instead of baking it in an oven, you have to get people to agree on it. And instead of eating it, you have to follow it. And if you don't like it, you can try to change it, but that's really hard. So maybe it's not like a cake at all. Maybe it's more like a puzzle that never gets solved.`,
/* 29 */
'diagnose (verb)':
`To diagnose is to identify the nature or cause of something by examining its symptoms. For example, if you have a fever, a cough and a sore throat, you might diagnose yourself with a cold. Or if your car makes a strange noise when you start it, you might diagnose it with a faulty engine. However, diagnosing is not always easy or accurate. Sometimes you might need to consult an expert, such as a doctor or a mechanic, to get a proper diagnosis. And sometimes you might get a wrong diagnosis, such as when you think you have food poisoning but it turns out you are pregnant. That's why it's important to always double-check your diagnosis before taking any action.`,
/* 30 */
'compromise (noun)':
`Compromise is a word that sounds like a promise, but it's actually a way of breaking promises. It's when two people or groups want different things, and they decide to give up some of those things so they can stop arguing. For example, if you want pizza for dinner and your friend wants sushi, you might compromise and get Chinese food instead. Or if you want to watch a horror movie and your friend wants to watch a comedy, you might compromise and watch a romantic comedy that makes you both cringe. Compromise is supposed to make everyone happy, but sometimes it just makes everyone unhappy.`,
/* 31 */
'abuse (verb)':
`Abuse is a verb that means to use something or someone in a wrong or harmful way. For example, you can abuse your authority by making your employees do your laundry, or you can abuse your eyesight by staring at the sun for too long. Abuse is not a nice thing to do, and it can have serious consequences. For example, if you abuse alcohol, you might end up with liver problems, or if you abuse your spouse, you might end up with divorce papers. So please don't abuse anything or anyone, unless it's yourself. Then you can abuse yourself as much as you want. Just kidding! Don't do that either. That's called self-abuse, and it's not healthy or funny.`,
/* 32 */
'likelihood (noun)':
`Likelihood is a noun that means the probability or chance of something happening. For example, the likelihood of winning the lottery is very low, unless you buy a lot of tickets. The likelihood of getting struck by lightning is also very low, unless you stand outside in a storm holding a metal rod. The likelihood of me making you laugh with this paragraph is unknown, unless you tell me how funny I am.😁`,
/* 33 */
'fragment (noun)':
`A fragment is a piece of something that has broken off or been separated from the whole. For example, when you drop a glass on the floor, it shatters into fragments. Or when you eat a cookie, you might leave some crumbs or fragments behind. Fragments can also be used to describe incomplete sentences that lack a subject or a verb. For example, this is a fragment: "Because I was hungry." It doesn't make sense by itself and needs more information to be complete. Fragments are bad for writing but good for comedy. Like this joke: "What do you call a fish with no eyes?" "Fsh." That's a fragment and it's funny. Ha ha ha.`,
/* 34 */
'coastal (adjective)':
`Coastal is an adjective that describes something related to the coast, which is the land along the edge of the sea or ocean. For example, coastal towns are often popular tourist destinations because they offer beautiful views and fresh seafood. However, coastal towns also have some disadvantages, such as being vulnerable to storms, floods and pirates. Coastal people are usually friendly and relaxed, but they can also be very territorial and competitive when it comes to surfing or fishing. Coastal life is not for everyone, but it can be very enjoyable if you like sand in your shoes and salt in your hair.`,
/* 35 */
'hydrogen (noun)':
`Hydrogen is a gas that likes to party. It's always looking for other elements to bond with, especially oxygen. When hydrogen and oxygen get together, they make water, which is essential for life on Earth. But sometimes hydrogen gets too excited and explodes, like in a hydrogen bomb or the Hindenburg disaster. That's why you should never invite too much hydrogen to your birthday bash. Hydrogen is also the lightest element in the universe, which means it can float away easily. That's why it's not very common in our atmosphere, but it's very abundant in outer space. Hydrogen is also very simple, having only one proton and one electron per atom  . It doesn't need any fancy accessories like neutrons or isotopes. Hydrogen is happy with what it has, and that's what makes it so fun.`,
/* 36 */
'supposedly (adverb)':
`Supposedly (adverb) is a word that you use when you want to express doubt or disbelief about something. For example, you might say "He is supposedly a genius, but he can't even tie his own shoelaces." Or "She is supposedly on a diet, but she just ate a whole cake." Supposedly is also a word that you use when you want to make an excuse or avoid responsibility for something. For example, you might say "I was supposedly working on my assignment, but I got distracted by Netflix." Or "She was supposedly sick, but she went to the party anyway."`,
/* 37 */
'storage (noun)':
`Storage (noun): A place where you keep all the things you don't need but can't bear to throw away. Examples of storage include closets, basements, attics, garages, and your ex's apartment. Storage can also refer to the amount of space available on your computer or phone for saving files, photos, videos, and memes. The more storage you have, the more clutter you can accumulate digitally. Storage is often measured in bytes, which are tiny units of information that nobody really understands.`,
/* 38 */
'insert (verb)':
`Insert is a verb that means to put something inside something else, like a key in a lock or a flyer in a magazine. It can also mean to introduce something into a text, like a comma between two words or a joke between two sentences. Sometimes, insert can mean to place something into an orbit or a chromosome, but that's usually done by scientists and not by ordinary people. Insert can also mean to join a conversation uninvited, like when you insert your opinion into an argument that has nothing to do with you. In that case, you might want to insert yourself out of there before someone gets angry.`,
/* 39 */
'medieval (adjective)':
`If you think your computer system is old-fashioned, you should see what they used in the medieval times. They didn't have laptops or smartphones, they had scrolls and quills. They didn't have Google or Wikipedia, they had monks and libraries. They didn't have emojis or memes, they had heraldry and gargoyles. Medieval means of, relating to, or characteristic of the Middle Ages, which was a period of history between the fall of the Roman Empire and the Renaissance. It was also a time of plagues, wars, crusades, and feudalism. So next time you complain about your slow internet connection or your outdated software, remember that things could be worse. You could be living in the medieval era!`,
/* 40 */
'domain (noun)':
`A domain is a word that can mean different things depending on who you ask. For example, if you ask a mathematician, they might say that a domain is the set of possible values for an independent variable in a function. If you ask a biologist, they might say that a domain is the highest level of classification for living organisms. If you ask a web developer, they might say that a domain is the part of a website address that identifies the owner or purpose of the site. And if you ask a medieval historian, they might say that a domain is the land or territory ruled by a lord or king. As you can see, domains are very diverse and confusing concepts. Maybe we should just stick to simpler words like pizza or cat.`,
/* 41 */
'infant (noun)':
`An infant is a tiny human who can't talk yet, but can make a lot of noise. Infants are also known as babies, but don't call them that if you want to sound smart. Infants like to eat, sleep, poop, and play with anything they can get their hands on. They also like to smile, cry, and drool a lot. Infants are very cute, but also very messy. If you ever meet an infant, be nice to them, because they might grow up to be your boss someday.`,
/* 42 */
'punk (noun)':
`Punk is a noun that can mean many things, depending on who you ask. To some, punk is a type of loud and aggressive rock music that emerged in the late 1970s and early 1980s . To others, punk is a person who likes this music and dresses like a rebel, with metal chains, leather clothes and brightly colored hair . And to others still, punk is a rude or violent young man or boy who deserves a good spanking. Punk can also be an adjective that describes something very poor or inferior, or a state of being unwell. Punk can also be tinder made from decayed wood, but that's not very funny.`,
/* 43 */
'provoke (verb)':
`To provoke someone is to make them angry or annoyed on purpose, usually for your own amusement or satisfaction. For example, you might provoke your sister by hiding her favorite toy or calling her silly names. Or you might provoke your teacher by asking irrelevant questions or making funny noises. Or you might provoke your dog by pretending to throw a ball but keeping it in your hand. But be careful, because provoking someone can also cause a reaction that you might not like, such as getting yelled at, slapped, bitten, or worse. So don't say I didn't warn you!`,
/* 44 */
'inflict (verb)':
`Inflict is a verb that means to make someone or something suffer something unpleasant, like pain, punishment, or taxes. It comes from Latin words that mean "to strike against", which sounds like a good way to inflict some damage. Some examples of inflict are: The teacher inflicted a pop quiz on the unsuspecting students; The mosquito inflicted a painful sting on my arm; The comedian inflicted his terrible jokes on the audience. Inflict is not to be confused with afflict, which means to affect someone or something badly. Afflict comes from Latin words that mean "to dash down", which sounds like a bad way to end up. Some examples of afflict are: The disease afflicted millions of people around the world; The storm afflicted the town with floods and power outages; The critics afflicted his ego with harsh reviews. I hope this paragraph helps you understand the meaning and usage of inflict. If not, you can always inflict more questions on me.😉`,
/* 45 */
'shortage (noun)':
`Shortage (noun): A situation where something is not enough to meet the demand or need. For example, there is a shortage of toilet paper in the supermarket because everyone panicked and bought more than they needed. Now, people have to use other alternatives like newspapers, magazines or leaves. This can cause problems such as paper cuts, ink stains or rashes. A shortage can also affect other things like food, water or electricity. Sometimes, a shortage can be solved by producing more of the thing that is lacking or by reducing the consumption of it. Other times, a shortage can lead to conflicts, riots or wars. A shortage is not a good thing to have unless you are trying to lose weight or save money.`,
/* 46 */
'fairness (noun)':
`Fairness is a noun that means treating people equally or reasonably, like giving everyone a slice of cake that is roughly the same size. It also means being light of hair or complexion, like having blond hair or pale skin. Sometimes these two meanings can get confused, like when someone says "She's so fair" and you don't know if they mean she's nice or she's blonde. Fairness can also be hard to achieve, like when you have to share your toys with your siblings or when you have to pay taxes. Fairness is often a matter of perspective, like when you think it's fair that you get to watch your favorite show but your roommate thinks it's fair that they get to choose. Fairness is something we all want but don't always get, like chocolate or sleep.`,
/* 47 */
'inhabitant (noun)':
`An inhabitant is someone or something that lives somewhere, like a city, a cave, or a birdbox. For example, you are an inhabitant of Earth, unless you are an alien 👽. Some inhabitants are more welcome than others. For instance, most people would rather have birds than rats as inhabitants of their birdboxes. Inhabitants can also change over time. Maybe one day, humans will become inhabitants of Mars 🚀. But for now, we have to share this planet with all the other inhabitants, even the annoying ones 😒.`,
/* 48 */
'clarify (verb)':
`If you ever find yourself confused by something someone said or wrote, you might want to ask them to clarify it for you. Clarify means make less confused and more clearly comprehensible. For example, if your friend tells you that they like your new haircut, but they say it with a weird tone of voice, you might wonder if they are being sarcastic or sincere. You could ask them to clarify what they mean by saying something like "Do you really like it or are you just being polite?" Clarify can also mean to make a liquid clear or pure by removing solid matter from it. For example, if you want to make some butter for your toast, but the butter is cloudy and has bits of milk solids in it, you could clarify it by heating it up and skimming off the foam. This will make the butter clear and smooth. But be careful not to confuse clarify with liquefy. Liquefy means to make something solid into a liquid by melting it. For example, if you want to make some chocolate sauce for your ice cream, but the chocolate is hard and brittle, you could liquefy it by putting it in a microwave and heating it up until it melts. This will make the chocolate liquid and gooey. But don't try to clarify chocolate - that would be a waste of good chocolate!`,
/* 49 */
'stake (noun)':
`A stake is not just a juicy piece of meat that you can grill and enjoy with some fries. It can also mean a pointy stick that you can use to support a plant, scare away a vampire, or burn a witch. Or it can mean a share in a business that you can make money from, lose money on, or fight over with other shareholders. Or it can mean the amount of money that you risk on a game or a bet, hoping to win big or go home broke. As you can see, stakes are very versatile and come in different shapes and sizes. Just don't confuse them with steaks, because that would be a costly mistake.`,
/* 50 */
'columnist (noun)':
`A columnist is someone who writes articles for a newspaper or a magazine on a regular basis. They usually have a specific topic or theme that they cover, such as politics, sports, fashion, or gardening. A columnist is different from a reporter, who just reports facts and events. A columnist also gives their opinions and insights on the issues they write about. Sometimes they are witty and humorous, sometimes they are serious and provocative. Sometimes they are loved and admired by their readers, sometimes they are hated and criticized. But no matter what, they always have something to say.`,
/* 51 */
'mere (adjective)':
`Mere is an adjective that you use when you want to make something sound less impressive or important than it really is. For example, you can say "I finished this crossword puzzle in a mere 10 minutes" when it actually took you an hour. Or you can say "She's a mere child" when she's actually 25 years old and has a PhD. Mere is also a superlative form that means "the smallest or least possible". For example, you can say "The merest whisper could wake him up" when he's actually snoring like a chainsaw. Or you can say "He gave me the merest glance" when he actually stared at me for 5 minutes straight. Mere is a word that can make anything seem insignificant or trivial, even if it's not. It's a word that can make you feel humble or sarcastic, depending on how you use it.`,
/* 52 */
'disappointment (noun)':
`Disappointment (noun): The feeling of sadness or displeasure caused by the nonfulfillment of one's hopes or expectations. For example, you might feel disappointment when you order a pizza and it arrives cold and soggy. Or when you buy a lottery ticket and it turns out to be a loser. Or when you ask Bing to write a funny paragraph and it gives you this lame definition instead.`,
/* 53 */
'outlook (noun)':
`Outlook is a noun that can mean either a person's attitude towards life or a software program that helps you manage your emails and calendars. The two meanings are often confused, especially when someone says they have a positive outlook. Do they mean they are optimistic and cheerful, or do they mean they like using Microsoft Outlook? Sometimes it's hard to tell, especially if they are smiling while checking their inbox. Maybe they are just happy to receive spam messages from Nigerian princes and online pharmacies.`,
/* 54 */
'surplus (noun)':
`Surplus is a word that means having more than you need or want. It sounds like a good thing, right? Who wouldn't want to have a surplus of money, food, or friends? Well, sometimes having a surplus can be a problem. For example, if you have a surplus of cheese in your fridge, it might go bad and smell awful. Or if you have a surplus of cats in your house, they might scratch your furniture and shed everywhere. Or if you have a surplus of jokes in your head, you might annoy everyone with your constant puns and sarcasm. So be careful what you wish for when it comes to surplus. Sometimes less is more.`,
/* 55 */
'whereby (adverb)':
`Whereby is an adverb that means "by which way or method" or "because of which". It is often used in formal contexts, such as legal documents or academic papers. However, some people may use it in casual conversations to sound smart or fancy. For example: They have introduced a new system whereby all employees must undergo regular training; I have devised a cunning plan whereby we can sneak into the party without being noticed; She gave me a look whereby I knew I was in trouble. Whereby can also be used as a conjunction, meaning "in which" or "with which". This usage is not standard and may be considered incorrect by some grammarians. For example: It's put me in a position whereby I can't afford to take a job; He showed me his secret garden whereby he grows all kinds of exotic plants; This is the book whereby I learned how to speak French. Whereby is derived from Middle English wherby, which was formed by combining where and by. It first appeared in the 13th century as a conjunction and in the 14th century as an adverb.  Some synonyms for whereby are: by means of which, through which, by virtue of which, on account of which, etc.`,
/* 56 */
'enrich (verb)':
`To enrich something means to make it better by adding something else to it. For example, you can enrich your soil by adding fertilizer, or you can enrich your vocabulary by reading books. But be careful not to confuse enrich with enrage, which means to make someone very angry. For example, you might enrage your teacher by saying that her class is boring and useless. That would not enrich your relationship with her at all!`,
/* 57 */
'swing (verb)':
`Swing (verb): To move back and forth or side to side in a rhythmic motion. For example, you can swing on a playground swing, swing your arms when you walk, or swing your hips when you dance. You can also swing a baseball bat, a golf club, or a hammer. But be careful not to swing them at people or things that might break. Unless you want to cause some trouble. Then go ahead and swing away. Just don't blame me if you get caught.`,
/* 58 */
'ambulance (noun)':
`An ambulance is a vehicle that is equipped for transporting the injured or the sick . It usually has sirens and flashing lights to alert other drivers to get out of the way. Sometimes, it also has a driver who likes to honk at everyone and pretend he's in a car chase. An ambulance can be very helpful if you need urgent medical care, but it can also be very expensive if you don't have insurance. So, unless you're really hurt or sick, you might want to consider other options like taking a taxi, calling a friend, or walking it off.`,
/* 59 */
'primarily (adverb)':
`Primarily (adverb): for the most part; mainly. For example, "I primarily use Bing to search for funny memes and cat videos." This sentence implies that the speaker uses Bing for other purposes as well, but those are less important or frequent than looking for humorous content and cute animals. Alternatively, it could also imply that the speaker is lying and actually uses another search engine for everything else, but wants to make Bing feel good. Either way, it's a hilarious example of how to use primarily (adverb) in a sentence.`,
/* 60 */
'altogether (adverb)':
`Altogether is an adverb that means completely, totally, or utterly. It can also mean with everything included or considered. For example, you might say "I'm altogether fed up with your nonsense" or "The bill came to $50 altogether". But be careful not to confuse it with the phrase all together, which means in a group. For example, you might say "We sang Happy Birthday all together" or "The kids were all together in the kitchen". Unless you mean that they were nude, in which case you should say "The kids were in the altogether in the kitchen". That's another informal way of using altogether, but it's not very common and probably not appropriate for most situations.`,
/* 61 */
'idiot (noun)':
`An idiot is someone who does something so stupid that it makes you wonder how they survived this long. For example, an idiot might leave the tap running in the bathroom and flood the whole house, or lose their passport on a trip abroad, or invest in a company just because a stranger recommended it. An idiot is not just ignorant or uneducated; an idiot is someone who lacks common sense and basic intelligence. An idiot is also a rude way to refer to someone you don't like or respect. You might call someone an idiot if they cut you off in traffic, or if they disagree with your opinion, or if they are your boss. But be careful: calling someone an idiot might make you look like one too!`,
/* 62 */
'seldom (adverb)':
`Seldom is an adverb that means "not often" or "rarely". For example, you might say "I seldom eat broccoli" if you don't like broccoli very much. Or you might say "I seldom see a unicorn" if you live in a place where unicorns are scarce. Seldom is also a word that is seldom used in modern English, because people prefer to use words like "hardly ever" or "almost never" instead. Seldom is a word that needs more love and attention, so please use it more often in your sentences. Just not too often, because then it would lose its meaning.`,
/* 63 */
'convincing (adjective)':
`Convincing (adjective): Having the power to make someone believe something that may or may not be true. For example, a convincing liar can make you think that they are a unicorn from outer space. A convincing salesman can make you buy a car that has no wheels. A convincing politician can make you vote for them even if they have no clue what they are doing. Convincing people are very persuasive and sometimes very dangerous.`,
/* 64 */
'solo (noun)':
`Solo (noun): A musical performance by one person who thinks they are better than everyone else. Also known as a show-off or a diva. Example: "She sang a solo in the choir concert and made everyone else look bad."`,
/* 65 */
'deficiency (noun)':
`If you have a deficiency, it means you are lacking something that you need. For example, if you have a vitamin deficiency, it means you don't eat enough fruits and vegetables. Or if you have a deficiency of common sense, it means you do things that are stupid or dangerous. Sometimes, having a deficiency can cause problems or make things worse. For example, if you have a deficiency of money, it means you are broke and can't buy anything. Or if you have a deficiency of humor, it means you don't laugh at jokes like this one.`,
/* 66 */
'corridor (noun)':
`A corridor is a long and narrow passage that connects different rooms or parts of a building. It is often used for walking, running, hiding, sneaking or spying. Corridors can also be decorated with paintings, plants, carpets or traps. Some corridors are so long that they seem to never end, while others are so short that they barely fit a person. Corridors are usually boring and dull, unless something exciting happens in them, like a chase scene, a prank or a kiss.`,
/* 67 */
'occupy (verb)':
`Occupy is a verb that means to take up space, time, attention, or possession of something. For example, you can occupy a seat in a movie theater, occupy your mind with a crossword puzzle, occupy a country with your army, or occupy someone's heart with your charm. But be careful not to confuse occupy with octopi, which are eight-armed sea creatures that can also occupy many things at once. Unless you are an octopus lover, then you can occupy yourself with octopi all day long.`,
/* 68 */
'halfway (adverb)':
`Halfway is a word that means not quite there yet, but also not too far away. It's like being stuck in the middle of something, but not knowing which way to go. For example, halfway through the movie, I realized I had forgotten my popcorn in the car. But I didn't want to miss any of the action, so I stayed in my seat and hoped for the best. Halfway through the popcorn, I realized it was stale and salty. But I didn't want to waste it, so I kept munching and regretting my decision. Halfway through this paragraph, I realized it was boring and pointless. But I didn't want to disappoint you, so I finished it with a lame joke. What do you call a fish that is halfway between a shark and a dolphin? A sharphin!`,
/* 69 */
'spotlight (noun)':
`A spotlight is a device that produces a very bright beam of light that can be pointed at anything you want to see better or make more visible. For example, you can use a spotlight to find your lost keys in the dark, or to make your cat chase the light around the room, or to highlight your amazing dance moves on the stage. Spotlights are also great for attracting attention, whether you want it or not. If you are a performer, a spotlight can make you feel like a star. If you are a criminal, a spotlight can make you feel like running away. Either way, spotlights are hard to ignore.`,
/* 70 */
'bold (adjective)':
`If you are bold, you are either very brave or very rude. Sometimes both. You might do things that other people are afraid to do, like skydiving or speaking to the emperor. Or you might do things that other people think are impolite, like staring at someone or lying brazenly. Being bold can also mean having a strong and vivid appearance, like wearing a dress with bold stripes or painting your kitchen in bold colours. But be careful not to be too bold, or you might end up with a bold promontory, which is a steep cliff that sticks out into the sea. That would be a bold move indeed.`,
/* 71 */
'drown (verb)':
`Drown (verb): To submerge oneself or something else in water or another liquid for too long, resulting in death or damage. For example: "He drowned his sorrows in beer, but he forgot that beer can also drown him." Drowning is not a recommended activity for humans, animals, plants, electronics, or anything that requires oxygen or dryness to function. Drowning is also not a polite way to end a conversation with someone you don't like. If you are drowning or see someone drowning, please call for help immediately. Unless it's a fish. Fish can't drown. Unless it's in lava. Then it can.`,
/* 72 */
'fulfil (verb)':
`Fulfil is a verb that means to do something that you said you would do, or that someone else wants you to do. It sounds like a nice word, but it can also be very stressful. For example, if you promise to fulfil your friend's wish of eating a whole cake by yourself, you might regret it later. Or if your boss expects you to fulfil your duties as a clown at a children's party, you might not enjoy it very much. Fulfil can also mean to make someone happy or satisfied, but that's not always easy either. For example, if your partner wants you to fulfil their fantasy of dressing up as a unicorn, you might feel silly and uncomfortable. Fulfil can also mean to achieve something that you have always wanted to do, but that's not always possible either. For example, if your dream is to fulfil your potential as a rock star, you might have to face some harsh realities along the way. So fulfil is a word that can make you feel good or bad depending on the situation. But don't worry too much about it - just try to fulfil your own expectations and be happy with yourself.`,
/* 73 */
'notably (adverb)':
`Notably is an adverb that means "in a way that attracts or deserves attention; remarkably". For example, you can say "She sang notably well at the karaoke night", meaning she sang so well that everyone noticed and praised her. Or you can say "He was notably absent from the meeting", meaning he was so conspicuously missing that everyone wondered where he was. Notably can also be used to introduce an important point or example, as in "Notably, he did not apologize for his mistake", meaning it was significant that he did not say sorry. Notably is not to be confused with notablys, which are small sticky notes that you can use to write reminders or messages. For example, you can say "She left a notably on his desk saying 'I love you'", meaning she left a cute note for him to find. Or you can say "He threw away all the notablys on his fridge", meaning he got rid of all the clutter and junk mail.`,
/* 74 */
'identical (adjective)':
`Identical means exactly the same in every way. For example, identical twins are two people who look so much alike that you can't tell them apart. They have the same face, the same hair, the same voice, and sometimes even the same clothes. But they are not completely identical. They have different personalities, different preferences, and different fingerprints. So if you ever need to find out which twin is which, just ask them to touch something and then check for their unique patterns. Or you can just call them by their names and see who responds.`,
/* 75 */
'constitutional (adjective)':
`If you are feeling sick or tired, you might want to take a constitutional. No, I don't mean changing the laws of your country or reading a boring document. I mean going for a walk or doing some mild exercise that is good for your health. That's one meaning of constitutional as an adjective. Another meaning is related to the constitution of a state or organization . For example, you might wonder if banning pineapple on pizza is constitutional or not. That depends on whether your constitution allows such a delicious restriction or not. A third meaning of constitutional is something that is part of your nature or makeup. For example, you might have a constitutional weakness for sweets or a constitutional aversion to spiders. In any case, constitutional is an adjective that can describe many things, but it's not very funny by itself.`,
/* 76 */
'concrete (adjective)':
`Concrete is an adjective that means something is solid, real and definite. For example, a concrete plan is a plan that you can actually follow and achieve. A concrete wall is a wall that you can touch and feel. A concrete joke is a joke that...well, I don't know what that means. Maybe it's a joke that makes you laugh so hard that you fall on the ground and hit your head on the concrete. Ouch!`,
/* 77 */
'stab (verb)':
`Stab (verb): To poke someone or something with a sharp object, usually a knife. This is not a nice thing to do and can cause serious injury or death. Some possible reasons why someone might stab another person are: they are angry, they are crazy, they are hungry and want to eat them, or they are playing a game of Clue and got carried away. Some possible reasons why someone might stab an object are: they are bored, they are curious, they are testing their knife skills, or they are trying to make art. Stabbing is not recommended as a hobby or a career choice.`,
/* 78 */
'snap (verb)':
`Snap is a verb that means to break something suddenly and sharply, or to make a sharp cracking sound. For example, you can snap a twig in half, or snap your fingers to get someone's attention. But be careful not to snap at people when you are angry, because they might snap back at you. And don't snap your gum too loudly, because it might annoy the people around you. Unless you want to annoy them, then go ahead and snap away. Just don't be surprised if they snap your gum out of your mouth.`,
/* 79 */
'scratch (noun)':
`Scratch (noun): A mark or wound made by scraping or tearing something with a sharp object. Usually happens when you try to pet a cat that doesn't like you, or when you forget to trim your nails and itch yourself too hard. Also, the sound that DJs make when they move vinyl records back and forth on a turntable. Not to be confused with the programming language for kids that uses colorful blocks instead of code.`,
/* 80 */
'historian (noun)':
`A historian is someone who studies the past and writes about it in books that nobody reads. Historians are often confused with hoarders, because they collect old documents, artifacts and trivia that have no practical use. Historians like to argue with each other about what really happened in history, but they never agree on anything. Historians are also very good at making up dates and names that are hard to remember and pronounce.`,
/* 81 */
'originate (verb)':
`If you want to originate something, you have to be very creative and original. You can't just copy someone else's idea and call it your own. That's plagiarism, and it's not cool. Originate means to start or create something new, like a word, a song, or a board game . For example, you can originate a new word by combining two existing words, like 'hangry' (hungry + angry) or 'brunch' (breakfast + lunch). Or you can originate a new song by humming a catchy tune and adding some lyrics. Or you can originate a new board game by using dice, cards, and tokens to make up some rules. But don't try to originate something that already exists, like fire, gravity, or sliced bread. That's not originating, that's just being late to the party.`,
/* 82 */
'socialist (adjective)':
`If you are a socialist, you might believe that everyone should share everything and that no one should own anything privately. You might also think that the government should control all the means of production and distribution of goods and services. You might also like to wear red hats and sing songs about workers' rights. But don't worry, you are not alone. There are many countries, economies, and programs that are socialist or involve socialism in some way . Just don't confuse socialism with communism, because they are not exactly the same thing. And don't call someone a socialist as an insult, because they might take it as a compliment.`,
/* 83 */
'mentor (noun)':
`A mentor is someone who has more experience and wisdom than you and is willing to share it with you for free. A mentor can help you achieve your goals, avoid mistakes, and learn new skills. A mentor is not someone who tells you what to do, but rather someone who guides you to find your own answers. A mentor is also not someone who gives you money, does your homework, or fixes your problems. A mentor is a rare and valuable person who deserves your respect and gratitude. If you find a good mentor, don't let them go. Unless they are holding you hostage, then call the police.`,
/* 84 */
'extract (verb)':
`Extract is a verb that means to pull something out of something else, usually with some effort or force. For example, you can extract a tooth from your mouth, but it might hurt a lot. You can also extract information from someone who doesn't want to tell you anything, but you might have to use some sneaky tricks or threats. Sometimes, you can extract something good from a bad situation, like finding a silver lining or learning a lesson. But other times, you just have to accept that there is nothing to extract and move on with your life. Extracting things can be hard work, but it can also be rewarding if you find what you are looking for.`,
/* 85 */
'exaggerate (verb)':
`Exaggerate (verb): To make something seem bigger, better, worse, or more important than it really is. For example, when you say that you have a million things to do today, you are exaggerating. Unless you are a superhero or a multitasking mastermind, there is no way you can accomplish that many tasks in 24 hours. Exaggerating is often used to make a story more interesting or dramatic, but it can also backfire if people don't believe you or think you are lying. So be careful not to exaggerate too much, or you might end up like the boy who cried wolf.`,
/* 86 */
'gross (adjective)':
`Gross is an adjective that means very unpleasant or disgusting. For example, if you see a pile of rotten eggs on the sidewalk, you might say "Ew, that's gross!" or if you smell someone's stinky feet, you might say "Yuck, that's gross!" Gross can also mean very large or excessive. For example, if you earn a lot of money from your job, you might say "Wow, that's gross!" or if you eat too much pizza, you might say "Ugh, that's gross!" Sometimes, gross can mean both unpleasant and large at the same time. For example, if you see a giant spider on the wall, you might say "Aaaah! That's gross!"`,
/* 87 */
'myth (noun)':
`A myth is a story that people tell to explain things they don't understand, like why the seasons change or how babies are made. Some myths are about gods and goddesses who do amazing things like throwing lightning bolts or turning into animals. Other myths are just plain silly, like the one that says women are worse drivers than men or that Elvis Presley is still alive. Myths can be fun to read, but don't believe everything you hear. Sometimes a myth is just a myth.`,
/* 88 */
'intervention (noun)':
`An intervention is when a group of people who care about you get together and tell you that you have a problem. Usually, the problem is something like drinking too much, gambling too much, or watching too much Netflix. The goal of an intervention is to help you realize that your problem is hurting yourself and others, and to convince you to get some help. Sometimes, an intervention works and you agree to change your ways. Other times, an intervention backfires and you end up hating everyone who tried to help you. Either way, it's usually awkward and uncomfortable for everyone involved.`,
/* 89 */
'incidence (noun)':
`If you want to learn the meaning of 'incidence', you might be disappointed by the dictionary definitions. They are either too formal, too technical, or too boring. For example, one definition says that incidence is "the rate or range of occurrence or influence of something, especially of something unwanted" . Another one says that incidence is "the act or manner of impinging on or affecting by proximity or influence" . And a third one says that incidence is "the arrival of something (such as a ray of light) at a surface" . Yawn. But don't worry, I have a better way to explain 'incidence' to you. Imagine that you are walking on a sunny day and you see a puddle on the ground. You decide to jump into it and splash some water around. As you do so, you notice that the sun's rays reflect off the water and create a rainbow on a nearby wall. That's incidence! The sun's rays hitting the water are an example of incidence . The angle that they make with the water is called the angle of incidence . And the rainbow on the wall is an effect of incidence . Isn't that more fun than reading a dry definition? I hope this paragraph helps you understand what 'incidence' means. Just remember: incidence is when something hits something else and makes something happen. And sometimes, it can be beautiful.`,
/* 90 */
'raid (verb)':
`Raiding is a verb that means to attack someone or something suddenly and unexpectedly, usually for a specific purpose. For example, you can raid a fridge to get some snacks, raid a bank to get some money, or raid a dungeon to get some loot. Raiding can also mean to steal something from someone else, like their employees, their members, or their cookies. Raiding is not to be confused with RAID, which is an abbreviation for redundant array of independent disks, a system that protects your data from corruption by spreading it across several disk drives. Unless you are raiding someone's RAID, in which case you are just being mean.`,
/* 91 */
'ruin (verb)':
`To ruin something means to make it so bad that it loses all its value, pleasure, or usefulness. For example, you can ruin a cake by adding too much salt, or you can ruin a friendship by spreading nasty rumors. You can also ruin your own life by doing stupid things like gambling away all your money or dating your boss's spouse. But don't worry, if you ever feel like you've ruined everything, you can always blame someone else for it. That's what politicians do all the time!`,
/* 92 */
'dive (noun)':
`A dive is a noun that can mean many things, depending on the context. For example, a dive can be a graceful jump into water, a thrilling plunge from an airplane, or a desperate lunge for a soccer ball. A dive can also be a sudden drop in value , such as when your stocks take a dive or your grades take a dive. A dive can also be an unpleasant place , such as a dirty bar or a shady hotel. Sometimes, people use the word dive to describe something they don't like, such as "This pizza is a dive" or "This movie is a dive". But don't let that stop you from enjoying your favorite dives!`,
/* 93 */
'so-called (adjective)':
`Have you ever met someone who claims to be an expert on something but actually knows nothing about it? They are what we call so-called (adjective) people. For example, a so-called (adjective) chef who can't even boil an egg, or a so-called (adjective) singer who sounds like a dying cat. These people are usually very confident and arrogant, but they have no clue how ridiculous they look. They should really stop pretending and learn some humility.`,
/* 94 */
'premier (adjective)':
`If you want to sound fancy and sophisticated, you can use the word 'premier' to describe something that is the best or most important of its kind. For example, you can say that the premier movie of the year is the one that made the most money, had the most explosions, or featured your favorite actor. Or you can say that the premier pizza place in town is the one that has the cheesiest crust, the spiciest sauce, or the fastest delivery. But be careful not to confuse 'premier' with 'primer', which is either a book that teaches you how to read or a coat of paint that prepares a surface for another layer. Unless you want to make a joke about how your primer book is the premier book in your library, or how your primer paint is the premier paint in your garage.`,
/* 95 */
'effectiveness (noun)':
`Effectiveness is a noun that means how well something works. It's not to be confused with effective, which is an adjective that means having an effect. For example, an effective joke is one that makes people laugh, but its effectiveness depends on how hard they laugh. If they only chuckle politely, then it's not very effective. But if they roll on the floor and wet their pants, then it's very effective. Unless you're trying to impress them with your maturity, then it's not effective at all.`,
/* 96 */
'beneath (preposition)':
`Beneath is a preposition that means under something else. For example, you might find a treasure chest beneath the ocean floor, or a monster beneath your bed. Beneath can also mean lower in rank or quality than something else. For example, you might think that eating broccoli is beneath you, or that your boss is beneath contempt. Beneath can also mean hidden or concealed by something else. For example, you might have a secret identity beneath your ordinary clothes, or a heart of gold beneath your grumpy attitude.`,
/* 97 */
'worthwhile (adjective)':
`Worthwhile (adjective): Something that is worth your time, effort or money. For example, reading this paragraph is a worthwhile activity because it will teach you a new word and make you laugh at the same time. However, some people may have different opinions on what is worthwhile and what is not. For example, some people may think that watching cat videos is a worthwhile way to spend their free time, while others may think that it is a waste of time and bandwidth. Therefore, worthwhile is a subjective term that depends on your personal values and goals.`,
/* 98 */
'intake (noun)':
`Intake is a noun that means the act or amount of taking in something, such as air, food, liquid, or gas. For example: - She heard a loud intake of breath when she revealed her secret; - He needs to reduce his intake of salt and sugar for his health; - The car has a faulty intake valve that needs to be replaced. A funny paragraph about intake might be: - Bob was on a diet and had to monitor his intake of calories very carefully. He used an app on his phone that scanned the barcode of every food item he ate and calculated how many calories he consumed. One day, he was feeling hungry and decided to treat himself to a chocolate bar. He scanned the barcode and waited for the app to tell him how many calories it had. To his horror, the app said: "Warning: This product contains 10,000 calories per serving. Your daily intake limit has been exceeded by 9,500 calories. Please consult your doctor immediately." Bob dropped the chocolate bar and ran to the bathroom, hoping to undo his mistake. He later found out that the app had a glitch and read the wrong barcode from a nearby crate of beer.`,
/* 99 */
'conscience (noun)':
`Conscience (noun): A small voice in your head that tells you what you should or shouldn't do. Sometimes it sounds like your mom, sometimes it sounds like your teacher, and sometimes it sounds like a random celebrity. It can be helpful when you need guidance, but it can also be annoying when you want to have fun. Some people have a very loud conscience that makes them feel guilty all the time. Others have a very quiet conscience that lets them get away with anything. And some people have no conscience at all, which makes them either very successful or very dangerous.`,
/* 100 */
'reproduction (noun)':
`Reproduction (noun) is the process of making more living things of the same kind. It usually involves two parents who love each other very much and decide to share a special hug. Sometimes it involves only one parent who splits into two or more parts. Sometimes it involves no parents at all and just happens by accident. Reproduction is very important for the survival of species, but it can also cause a lot of problems like overpopulation, diseases and awkward conversations.`,
/* 101 */
'charm (noun)':
``,
/* 102 */
'contender (noun)':
``,
/* 103 */
'outfit (noun)':
``,
/* 104 */
'predecessor (noun)':
``,
/* 105 */
'neglect (verb)':
``,
/* 106 */
'faculty (noun)':
``,
/* 107 */
'weave (verb)':
``,
/* 108 */
'grin (verb)':
``,
/* 109 */
'screening (noun)':
``,
/* 110 */
'fantasy (noun)':
``,
/* 111 */
'strand (noun)':
``,
/* 112 */
'inmate (noun)':
``,
/* 113 */
'animation (noun)':
``,
/* 114 */
'breakdown (noun)':
``,
/* 115 */
'liberty (noun)':
``,
/* 116 */
'compound (noun)':
``,
/* 117 */
'timber (noun)':
``,
/* 118 */
'advocate (noun)':
``,
/* 119 */
'extensively (adverb)':
``,
/* 120 */
'marker (noun)':
``,
/* 121 */
'collector (noun)':
``,
/* 122 */
'defender (noun)':
``,
/* 123 */
'minute (adjective)':
``,
/* 124 */
'inevitable (adjective)':
``,
/* 125 */
'willingness (noun)':
``,
/* 126 */
'solo (adjective)':
``,
/* 127 */
'audio (adjective)':
``,
/* 128 */
'autonomy (noun)':
``,
/* 129 */
'marketplace (noun)':
``,
/* 130 */
'ranking (noun)':
``,
/* 131 */
'contrary (adjective)':
``,
/* 132 */
'dominance (noun)':
``,
/* 133 */
'moving (adjective)':
``,
/* 134 */
'comprehensive (adjective)':
``,
/* 135 */
'bid (verb)':
``,
/* 136 */
'controversy (noun)':
``,
/* 137 */
'racist (noun)':
``,
/* 138 */
'endure (verb)':
``,
/* 139 */
'deployment (noun)':
``,
/* 140 */
'browser (noun)':
``,
/* 141 */
'sustainable (adjective)':
``,
/* 142 */
'affordable (adjective)':
``,
/* 143 */
'convict (verb)':
``,
/* 144 */
'earnings (noun)':
``,
/* 145 */
'slot (noun)':
``,
/* 146 */
'foundation (noun)':
``,
/* 147 */
'interface (noun)':
``,
/* 148 */
'cattle (noun)':
``,
/* 149 */
'predictable (adjective)':
``,
/* 150 */
'credibility (noun)':
``,
/* 151 */
'grind (verb)':
``,
/* 152 */
'warehouse (noun)':
``,
/* 153 */
'discard (verb)':
``,
/* 154 */
'authorize (verb)':
``,
/* 155 */
'distract (verb)':
``,
/* 156 */
'utility (noun)':
``,
/* 157 */
'surge (verb)':
``,
/* 158 */
'experimental (adjective)':
``,
/* 159 */
'conceive (verb)':
``,
/* 160 */
'documentation (noun)':
``,
/* 161 */
'residence (noun)':
``,
/* 162 */
'ritual (noun)':
``,
/* 163 */
'youngster (noun)':
``,
/* 164 */
'puzzle (noun)':
``,
/* 165 */
'composer (noun)':
``,
/* 166 */
'mercy (noun)':
``,
/* 167 */
'blanket (noun)':
``,
/* 168 */
'set-up (noun)':
``,
/* 169 */
'cleaning (noun)':
``,
/* 170 */
'align (verb)':
``,
/* 171 */
'supervisor (noun)':
``,
/* 172 */
'admission (noun)':
``,
/* 173 */
'versus (preposition)':
``,
/* 174 */
'betray (verb)':
``,
/* 175 */
'colourful (adjective)':
``,
/* 176 */
'comic (noun)':
``,
/* 177 */
'foreigner (noun)':
``,
/* 178 */
'twist (noun)':
``,
/* 179 */
'cocktail (noun)':
``,
/* 180 */
'theoretical (adjective)':
``,
/* 181 */
'determination (noun)':
``,
/* 182 */
'gesture (noun)':
``,
/* 183 */
'tribunal (noun)':
``,
/* 184 */
'unfold (verb)':
``,
/* 185 */
'harbour (noun)':
``,
/* 186 */
'candle (noun)':
``,
/* 187 */
'outstanding (adjective)':
``,
/* 188 */
'prey (noun)':
``,
/* 189 */
'fame (noun)':
``,
/* 190 */
'preach (verb)':
``,
/* 191 */
'rifle (noun)':
``,
/* 192 */
'simulate (verb)':
``,
/* 193 */
'racism (noun)':
``,
/* 194 */
'AIDS (noun)':
``,
/* 195 */
'divorce (noun)':
``,
/* 196 */
'yield (verb)':
``,
/* 197 */
'accordance (noun)':
``,
/* 198 */
'workout (noun)':
``,
/* 199 */
'quota (noun)':
``,
/* 200 */
'custody (noun)':
``,
/* 201 */
'abundance (noun)':
``,
/* 202 */
'feeding (noun)':
``,
/* 203 */
'accessible (adjective)':
``,
/* 204 */
'heighten (verb)':
``,
/* 205 */
'dairy (noun)':
``,
/* 206 */
'cruise (noun)':
``,
/* 207 */
'patron (noun)':
``,
/* 208 */
'proceeding (noun)':
``,
/* 209 */
'broadband (noun)':
``,
/* 210 */
'motorist (noun)':
``,
/* 211 */
'devil (noun)':
``,
/* 212 */
'surge (noun)':
``,
/* 213 */
'legislative (adjective)':
``,
/* 214 */
'merchant (noun)':
``,
/* 215 */
'premise (noun)':
``,
/* 216 */
'mobilize (verb)':
``,
/* 217 */
'sexuality (noun)':
``,
/* 218 */
'embed (verb)':
``,
/* 219 */
'lawsuit (noun)':
``,
/* 220 */
'formation (noun)':
``,
/* 221 */
'governor (noun)':
``,
/* 222 */
'relieved (adjective)':
``,
/* 223 */
'combat (noun)':
``,
/* 224 */
'presidency (noun)':
``,
/* 225 */
'sometime (adverb)':
``,
/* 226 */
'arguably (adverb)':
``,
/* 227 */
'irrelevant (adjective)':
``,
/* 228 */
'contributor (noun)':
``,
/* 229 */
'contractor (noun)':
``,
/* 230 */
'swing (noun)':
``,
/* 231 */
'alien (adjective)':
``,
/* 232 */
'steam (noun)':
``,
/* 233 */
'blade (noun)':
``,
/* 234 */
'meditation (noun)':
``,
/* 235 */
'pill (noun)':
``,
/* 236 */
'pregnancy (noun)':
``,
/* 237 */
'compelling (adjective)':
``,
/* 238 */
'adequate (adjective)':
``,
/* 239 */
'instinct (noun)':
``,
/* 240 */
'replacement (noun)':
``,
/* 241 */
'predominantly (adverb)':
``,
/* 242 */
'forthcoming (adjective)':
``,
/* 243 */
'dramatically (adverb)':
``,
/* 244 */
'clinic (noun)':
``,
/* 245 */
'suck (verb)':
``,
/* 246 */
'undergraduate (noun)':
``,
/* 247 */
'widow (noun)':
``,
/* 248 */
'uphold (verb)':
``,
/* 249 */
'ballot (noun)':
``,
/* 250 */
'gambling (noun)':
``,
/* 251 */
'burden (noun)':
``,
/* 252 */
'thereby (adverb)':
``,
/* 253 */
'rental (noun)':
``,
/* 254 */
'deficit (noun)':
``,
/* 255 */
'interaction (noun)':
``,
/* 256 */
'adverse (adjective)':
``,
/* 257 */
'congratulate (verb)':
``,
/* 258 */
'abortion (noun)':
``,
/* 259 */
'transformation (noun)':
``,
/* 260 */
'lane (noun)':
``,
/* 261 */
'suite (noun)':
``,
/* 262 */
'terrorist (noun)':
``,
/* 263 */
'blessing (noun)':
``,
/* 264 */
'principal (adjective)':
``,
/* 265 */
'duo (noun)':
``,
/* 266 */
'tonne (noun)':
``,
/* 267 */
'creator (noun)':
``,
/* 268 */
'derive (verb)':
``,
/* 269 */
'hardware (noun)':
``,
/* 270 */
'prosecution (noun)':
``,
/* 271 */
'dose (noun)':
``,
/* 272 */
'terminal (noun)':
``,
/* 273 */
'convention (noun)':
``,
/* 274 */
'recovery (noun)':
``,
/* 275 */
'flawed (adjective)':
``,
/* 276 */
'accumulate (verb)':
``,
/* 277 */
'rally (noun)':
``,
/* 278 */
'surgical (adjective)':
``,
/* 279 */
'healthcare (noun)':
``,
/* 280 */
'reverse (adjective)':
``,
/* 281 */
'membership (noun)':
``,
/* 282 */
'rehabilitation (noun)':
``,
/* 283 */
'wholly (adverb)':
``,
/* 284 */
'legacy (noun)':
``,
/* 285 */
'funeral (noun)':
``,
/* 286 */
'chase (noun)':
``,
/* 287 */
'density (noun)':
``,
/* 288 */
'width (noun)':
``,
/* 289 */
'workforce (noun)':
``,
/* 290 */
'distinctive (adjective)':
``,
/* 291 */
'burst (verb)':
``,
/* 292 */
'slogan (noun)':
``,
/* 293 */
'mutual (adjective)':
``,
/* 294 */
'accountable (adjective)':
``,
/* 295 */
'minimize (verb)':
``,
/* 296 */
'vow (verb)':
``,
/* 297 */
'spoil (verb)':
``,
/* 298 */
'timing (noun)':
``,
/* 299 */
'mainstream (adjective)':
``,
/* 300 */
'remains (noun)':
``,
/* 301 */
'resignation (noun)':
``,
/* 302 */
'bass (noun)':
``,
/* 303 */
'assassination (noun)':
``,
/* 304 */
'whilst (conjunction)':
``,
/* 305 */
'gene (noun)':
``,
/* 306 */
'substantial (adjective)':
``,
/* 307 */
'offering (noun)':
``,
/* 308 */
'deploy (verb)':
``,
/* 309 */
'corresponding (adjective)':
``,
/* 310 */
'exploit (verb)':
``,
/* 311 */
'memorable (adjective)':
``,
/* 312 */
'blast (verb)':
``,
/* 313 */
'suspicion (noun)':
``,
/* 314 */
'specify (verb)':
``,
/* 315 */
'expire (verb)':
``,
/* 316 */
'roughly (adverb)':
``,
/* 317 */
'trophy (noun)':
``,
/* 318 */
'invoke (verb)':
``,
/* 319 */
'journalism (noun)':
``,
/* 320 */
'pathway (noun)':
``,
/* 321 */
'well (noun)':
``,
/* 322 */
'superb (adjective)':
``,
/* 323 */
'drought (noun)':
``,
/* 324 */
'alignment (noun)':
``,
/* 325 */
'destruction (noun)':
``,
/* 326 */
'efficiently (adverb)':
``,
/* 327 */
'ambassador (noun)':
``,
/* 328 */
'legislature (noun)':
``,
/* 329 */
'misery (noun)':
``,
/* 330 */
'revival (noun)':
``,
/* 331 */
'notebook (noun)':
``,
/* 332 */
'medication (noun)':
``,
/* 333 */
'expenditure (noun)':
``,
/* 334 */
'oral (adjective)':
``,
/* 335 */
'incur (verb)':
``,
/* 336 */
'embark (verb)':
``,
/* 337 */
'elevate (verb)':
``,
/* 338 */
'monthly (adjective)':
``,
/* 339 */
'exclusion (noun)':
``,
/* 340 */
'reign (verb)':
``,
/* 341 */
'situated (adjective)':
``,
/* 342 */
'promising (adjective)':
``,
/* 343 */
'forbid (verb)':
``,
/* 344 */
'restraint (noun)':
``,
/* 345 */
'universal (adjective)':
``,
/* 346 */
'seize (verb)':
``,
/* 347 */
'testimony (noun)':
``,
/* 348 */
'deputy (noun)':
``,
/* 349 */
'guerrilla (noun)':
``,
/* 350 */
'accumulation (noun)':
``,
/* 351 */
'reform (noun)':
``,
/* 352 */
'dot (noun)':
``,
/* 353 */
'dare (verb)':
``,
/* 354 */
'collaborate (verb)':
``,
/* 355 */
'credible (adjective)':
``,
/* 356 */
'appreciation (noun)':
``,
/* 357 */
'pioneer (verb)':
``,
/* 358 */
'trace (noun)':
``,
/* 359 */
'incentive (noun)':
``,
/* 360 */
'disappoint (verb)':
``,
/* 361 */
'operator (noun)':
``,
/* 362 */
'toll (noun)':
``,
/* 363 */
'overwhelming (adjective)':
``,
/* 364 */
'signature (noun)':
``,
/* 365 */
'charter (noun)':
``,
/* 366 */
'fragile (adjective)':
``,
/* 367 */
'spite (noun)':
``,
/* 368 */
'harvest (verb)':
``,
/* 369 */
'enterprise (noun)':
``,
/* 370 */
'mature (verb)':
``,
/* 371 */
'dawn (noun)':
``,
/* 372 */
'prescribe (verb)':
``,
/* 373 */
'sole (adjective)':
``,
/* 374 */
'plead (verb)':
``,
/* 375 */
'deem (verb)':
``,
/* 376 */
'gaming (noun)':
``,
/* 377 */
'survivor (noun)':
``,
/* 378 */
'beast (noun)':
``,
/* 379 */
'combat (verb)':
``,
/* 380 */
'seemingly (adverb)':
``,
/* 381 */
'creativity (noun)':
``,
/* 382 */
'tap (verb)':
``,
/* 383 */
'toxic (adjective)':
``,
/* 384 */
'welfare (noun)':
``,
/* 385 */
'halt (noun)':
``,
/* 386 */
'stereotype (noun)':
``,
/* 387 */
'perception (noun)':
``,
/* 388 */
'line-up (noun)':
``,
/* 389 */
'backup (noun)':
``,
/* 390 */
'stun (verb)':
``,
/* 391 */
'jail (verb)':
``,
/* 392 */
'astonishing (adjective)':
``,
/* 393 */
'foster (verb)':
``,
/* 394 */
'consciousness (noun)':
``,
/* 395 */
'ideological (adjective)':
``,
/* 396 */
'warrant (verb)':
``,
/* 397 */
'machinery (noun)':
``,
/* 398 */
'instantly (adverb)':
``,
/* 399 */
'confine (verb)':
``,
/* 400 */
'technological (adjective)':
``,
/* 401 */
'passive (adjective)':
``,
/* 402 */
'tolerance (noun)':
``,
/* 403 */
'neglect (noun)':
``,
/* 404 */
'noon (noun)':
``,
/* 405 */
'frustrating (adjective)':
``,
/* 406 */
'terms (noun)':
``,
/* 407 */
'charming (adjective)':
``,
/* 408 */
'prosecutor (noun)':
``,
/* 409 */
'squeeze (verb)':
``,
/* 410 */
'imminent (adjective)':
``,
/* 411 */
'exposure (noun)':
``,
/* 412 */
'shortly (adverb)':
``,
/* 413 */
'rocket (noun)':
``,
/* 414 */
'drift (verb)':
``,
/* 415 */
'overnight (adverb)':
``,
/* 416 */
'inflation (noun)':
``,
/* 417 */
'scholarship (noun)':
``,
/* 418 */
'detection (noun)':
``,
/* 419 */
'alien (noun)':
``,
/* 420 */
'resemble (verb)':
``,
/* 421 */
'sanction (noun)':
``,
/* 422 */
'genuinely (adverb)':
``,
/* 423 */
'swallow (verb)':
``,
/* 424 */
'thorough (adjective)':
``,
/* 425 */
'integration (noun)':
``,
/* 426 */
'evolutionary (adjective)':
``,
/* 427 */
'prohibit (verb)':
``,
/* 428 */
'rear (adjective)':
``,
/* 429 */
'blast (noun)':
``,
/* 430 */
'attribute (noun)':
``,
/* 431 */
'embassy (noun)':
``,
/* 432 */
'biography (noun)':
``,
/* 433 */
'grid (noun)':
``,
/* 434 */
'tag (noun)':
``,
/* 435 */
'twist (verb)':
``,
/* 436 */
'odds (noun)':
``,
/* 437 */
'appropriately (adverb)':
``,
/* 438 */
'cult (noun)':
``,
/* 439 */
'warfare (noun)':
``,
/* 440 */
'framework (noun)':
``,
/* 441 */
'navigation (noun)':
``,
/* 442 */
'ironically (adverb)':
``,
/* 443 */
'wit (noun)':
``,
/* 444 */
'reverse (noun)':
``,
/* 445 */
'genuine (adjective)':
``,
/* 446 */
'confess (verb)':
``,
/* 447 */
'devastate (verb)':
``,
/* 448 */
'slap (verb)':
``,
/* 449 */
'necessity (noun)':
``,
/* 450 */
'romance (noun)':
``,
/* 451 */
'net (adjective)':
``,
/* 452 */
'coincide (verb)':
``,
/* 453 */
'deadly (adjective)':
``,
/* 454 */
'submission (noun)':
``,
/* 455 */
'ensue (verb)':
``,
/* 456 */
'remarkably (adverb)':
``,
/* 457 */
'reconstruction (noun)':
``,
/* 458 */
'commissioner (noun)':
``,
/* 459 */
'caution (noun)':
``,
/* 460 */
'endorsement (noun)':
``,
/* 461 */
'sin (noun)':
``,
/* 462 */
'upgrade (noun)':
``,
/* 463 */
'nominate (verb)':
``,
/* 464 */
'widespread (adjective)':
``,
/* 465 */
'landing (noun)':
``,
/* 466 */
'reporting (noun)':
``,
/* 467 */
'motive (noun)':
``,
/* 468 */
'incorrect (adjective)':
``,
/* 469 */
'trigger (verb)':
``,
/* 470 */
'dissolve (verb)':
``,
/* 471 */
'intellectual (noun)':
``,
/* 472 */
'inherit (verb)':
``,
/* 473 */
'commerce (noun)':
``,
/* 474 */
'contemplate (verb)':
``,
/* 475 */
'vicious (adjective)':
``,
/* 476 */
'cautious (adjective)':
``,
/* 477 */
'steadily (adverb)':
``,
/* 478 */
'projection (noun)':
``,
/* 479 */
'spill (verb)':
``,
/* 480 */
'agriculture (noun)':
``,
/* 481 */
'turnout (noun)':
``,
/* 482 */
'magical (adjective)':
``,
/* 483 */
'mate (noun)':
``,
/* 484 */
'assurance (noun)':
``,
/* 485 */
'fare (noun)':
``,
/* 486 */
'hook (verb)':
``,
/* 487 */
'visa (noun)':
``,
/* 488 */
'auction (noun)':
``,
/* 489 */
'spice (noun)':
``,
/* 490 */
'regulatory (adjective)':
``,
/* 491 */
'nomination (noun)':
``,
/* 492 */
'unfortunate (adjective)':
``,
/* 493 */
'info (noun)':
``,
/* 494 */
'era (noun)':
``,
/* 495 */
'assault (verb)':
``,
/* 496 */
'worthy (adjective)':
``,
/* 497 */
'veteran (noun)':
``,
/* 498 */
'evident (adjective)':
``,
/* 499 */
'consolidate (verb)':
``,
/* 500 */
'cult (adjective)':
``,
/* 501 */
'accountability (noun)':
``,
/* 502 */
'timely (adjective)':
``,
/* 503 */
'exclusively (adverb)':
``,
/* 504 */
'assemble (verb)':
``,
/* 505 */
'downtown (noun)':
``,
/* 506 */
'ultimate (adjective)':
``,
/* 507 */
'endorse (verb)':
``,
/* 508 */
'parliamentary (adjective)':
``,
/* 509 */
'disposal (noun)':
``,
/* 510 */
'removal (noun)':
``,
/* 511 */
'coincidence (noun)':
``,
/* 512 */
'protective (adjective)':
``,
/* 513 */
'founder (noun)':
``,
/* 514 */
'fortunate (adjective)':
``,
/* 515 */
'transmission (noun)':
``,
/* 516 */
'depression (noun)':
``,
/* 517 */
'applaud (verb)':
``,
/* 518 */
'limb (noun)':
``,
/* 519 */
'supplement (verb)':
``,
/* 520 */
'allocate (verb)':
``,
/* 521 */
'entrepreneur (noun)':
``,
/* 522 */
'manipulate (verb)':
``,
/* 523 */
'flavour (noun)':
``,
/* 524 */
'rational (adjective)':
``,
/* 525 */
'transcript (noun)':
``,
/* 526 */
'weekly (adjective)':
``,
/* 527 */
'territory (noun)':
``,
/* 528 */
'appetite (noun)':
``,
/* 529 */
'divine (adjective)':
``,
/* 530 */
'feminist (noun)':
``,
/* 531 */
'clarity (noun)':
``,
/* 532 */
'heritage (noun)':
``,
/* 533 */
'linger (verb)':
``,
/* 534 */
'usage (noun)':
``,
/* 535 */
'database (noun)':
``,
/* 536 */
'subsequent (adjective)':
``,
/* 537 */
'congregation (noun)':
``,
/* 538 */
'surgeon (noun)':
``,
/* 539 */
'screw (verb)':
``,
/* 540 */
'unveil (verb)':
``,
/* 541 */
'cruise (verb)':
``,
/* 542 */
'breach (verb)':
``,
/* 543 */
'depict (verb)':
``,
/* 544 */
'vice (noun)':
``,
/* 545 */
'defect (noun)':
``,
/* 546 */
'franchise (noun)':
``,
/* 547 */
'applicant (noun)':
``,
/* 548 */
'fierce (adjective)':
``,
/* 549 */
'bonus (noun)':
``,
/* 550 */
'erupt (verb)':
``,
/* 551 */
'shocking (adjective)':
``,
/* 552 */
'outrage (verb)':
``,
/* 553 */
'graphics (noun)':
``,
/* 554 */
'tighten (verb)':
``,
/* 555 */
'inspector (noun)':
``,
/* 556 */
'serial (adjective)':
``,
/* 557 */
'awkward (adjective)':
``,
/* 558 */
'theatrical (adjective)':
``,
/* 559 */
'condemn (verb)':
``,
/* 560 */
'capitalist (adjective)':
``,
/* 561 */
'hip (noun)':
``,
/* 562 */
'speculate (verb)':
``,
/* 563 */
'coalition (noun)':
``,
/* 564 */
'glory (noun)':
``,
/* 565 */
'tender (adjective)':
``,
/* 566 */
'breakthrough (noun)':
``,
/* 567 */
'overturn (verb)':
``,
/* 568 */
'consequently (adverb)':
``,
/* 569 */
'violate (verb)':
``,
/* 570 */
'carriage (noun)':
``,
/* 571 */
'total (verb)':
``,
/* 572 */
'tragic (adjective)':
``,
/* 573 */
'stem (noun)':
``,
/* 574 */
'partially (adverb)':
``,
/* 575 */
'texture (noun)':
``,
/* 576 */
'gathering (noun)':
``,
/* 577 */
'consecutive (adjective)':
``,
/* 578 */
'allegation (noun)':
``,
/* 579 */
'installation (noun)':
``,
/* 580 */
'specification (noun)':
``,
/* 581 */
'hilarious (adjective)':
``,
/* 582 */
'annually (adverb)':
``,
/* 583 */
'logic (noun)':
``,
/* 584 */
'injection (noun)':
``,
/* 585 */
'chunk (noun)':
``,
/* 586 */
'liver (noun)':
``,
/* 587 */
'devise (verb)':
``,
/* 588 */
'bureaucracy (noun)':
``,
/* 589 */
'tribute (noun)':
``,
/* 590 */
'intensify (verb)':
``,
/* 591 */
'retreat (verb)':
``,
/* 592 */
'ID (noun)':
``,
/* 593 */
'beloved (adjective)':
``,
/* 594 */
'distinguish (verb)':
``,
/* 595 */
'premium (noun)':
``,
/* 596 */
'miner (noun)':
``,
/* 597 */
'hence (adverb)':
``,
/* 598 */
'doctrine (noun)':
``,
/* 599 */
'parallel (adjective)':
``,
/* 600 */
'profound (adjective)':
``,
/* 601 */
'thoroughly (adverb)':
``,
/* 602 */
'dub (verb)':
``,
/* 603 */
'thrive (verb)':
``,
/* 604 */
'insult (verb)':
``,
/* 605 */
'fate (noun)':
``,
/* 606 */
'inherent (adjective)':
``,
/* 607 */
'withdrawal (noun)':
``,
/* 608 */
'economics (noun)':
``,
/* 609 */
'residue (noun)':
``,
/* 610 */
'delete (verb)':
``,
/* 611 */
'cheek (noun)':
``,
/* 612 */
'pole (noun)':
``,
/* 613 */
'mainland (noun)':
``,
/* 614 */
'regain (verb)':
``,
/* 615 */
'isolated (adjective)':
``,
/* 616 */
'skilled (adjective)':
``,
/* 617 */
'maintenance (noun)':
``,
/* 618 */
'notorious (adjective)':
``,
/* 619 */
'conservation (noun)':
``,
/* 620 */
'voluntary (adjective)':
``,
/* 621 */
'guideline (noun)':
``,
/* 622 */
'thumb (noun)':
``,
/* 623 */
'temporarily (adverb)':
``,
/* 624 */
'lighting (noun)':
``,
/* 625 */
'spokesman (noun)':
``,
/* 626 */
'corruption (noun)':
``,
/* 627 */
'solicitor (noun)':
``,
/* 628 */
'explicit (adjective)':
``,
/* 629 */
'envelope (noun)':
``,
/* 630 */
'shaped (adjective)':
``,
/* 631 */
'thankfully (adverb)':
``,
/* 632 */
'conceal (verb)':
``,
/* 633 */
'diverse (adjective)':
``,
/* 634 */
'exceptional (adjective)':
``,
/* 635 */
'productivity (noun)':
``,
/* 636 */
'breach (noun)':
``,
/* 637 */
'radar (noun)':
``,
/* 638 */
'leak (noun)':
``,
/* 639 */
'exclude (verb)':
``,
/* 640 */
'raid (noun)':
``,
/* 641 */
'habitat (noun)':
``,
/* 642 */
'rail (noun)':
``,
/* 643 */
'renowned (adjective)':
``,
/* 644 */
'lifelong (adjective)':
``,
/* 645 */
'mortgage (noun)':
``,
/* 646 */
'whatever (adverb)':
``,
/* 647 */
'rip (verb)':
``,
/* 648 */
'occasional (adjective)':
``,
/* 649 */
'municipal (adjective)':
``,
/* 650 */
'compliance (noun)':
``,
/* 651 */
'compensate (verb)':
``,
/* 652 */
'tobacco (noun)':
``,
/* 653 */
'desirable (adjective)':
``,
/* 654 */
'litre (noun)':
``,
/* 655 */
'craft (verb)':
``,
/* 656 */
'embody (verb)':
``,
/* 657 */
'theology (noun)':
``,
/* 658 */
'extract (noun)':
``,
/* 659 */
'modest (adjective)':
``,
/* 660 */
'ethnic (adjective)':
``,
/* 661 */
'unify (verb)':
``,
/* 662 */
'thereafter (adverb)':
``,
/* 663 */
'firework (noun)':
``,
/* 664 */
'peasant (noun)':
``,
/* 665 */
'residential (adjective)':
``,
/* 666 */
'profitable (adjective)':
``,
/* 667 */
'proclaim (verb)':
``,
/* 668 */
'cabinet (noun)':
``,
/* 669 */
'evoke (verb)':
``,
/* 670 */
'sketch (noun)':
``,
/* 671 */
'circuit (noun)':
``,
/* 672 */
'laser (noun)':
``,
/* 673 */
'excess (noun)':
``,
/* 674 */
'forum (noun)':
``,
/* 675 */
'accurately (adverb)':
``,
/* 676 */
'march (verb)':
``,
/* 677 */
'nutrition (noun)':
``,
/* 678 */
'pursuit (noun)':
``,
/* 679 */
'questionnaire (noun)':
``,
/* 680 */
'recruit (noun)':
``,
/* 681 */
'defy (verb)':
``,
/* 682 */
'participation (noun)':
``,
/* 683 */
'synthesis (noun)':
``,
/* 684 */
'accomplishment (noun)':
``,
/* 685 */
'cease (verb)':
``,
/* 686 */
'screw (noun)':
``,
/* 687 */
'composition (noun)':
``,
/* 688 */
'exclusive (adjective)':
``,
/* 689 */
'epidemic (noun)':
``,
/* 690 */
'mill (noun)':
``,
/* 691 */
'balanced (adjective)':
``,
/* 692 */
'empirical (adjective)':
``,
/* 693 */
'activate (verb)':
``,
/* 694 */
'rat (noun)':
``,
/* 695 */
'disturbing (adjective)':
``,
/* 696 */
'bid (noun)':
``,
/* 697 */
'dive (verb)':
``,
/* 698 */
'invasion (noun)':
``,
/* 699 */
'resign (verb)':
``,
/* 700 */
'buffer (noun)':
``,
/* 701 */
'lately (adverb)':
``,
/* 702 */
'quest (noun)':
``,
/* 703 */
'fond (adjective)':
``,
/* 704 */
'accordingly (adverb)':
``,
/* 705 */
'anticipate (verb)':
``,
/* 706 */
'fatal (adjective)':
``,
/* 707 */
'cute (adjective)':
``,
/* 708 */
'indicator (noun)':
``,
/* 709 */
'excess (adjective)':
``,
/* 710 */
'ballet (noun)':
``,
/* 711 */
'proposition (noun)':
``,
/* 712 */
'exotic (adjective)':
``,
/* 713 */
'critically (adverb)':
``,
/* 714 */
'weed (noun)':
``,
/* 715 */
'accidentally (adverb)':
``,
/* 716 */
'spectrum (noun)':
``,
/* 717 */
'relevance (noun)':
``,
/* 718 */
'militant (noun)':
``,
/* 719 */
'equality (noun)':
``,
/* 720 */
'kit (noun)':
``,
/* 721 */
'correspondence (noun)':
``,
/* 722 */
'forth (adverb)':
``,
/* 723 */
'interactive (adjective)':
``,
/* 724 */
'firearm (noun)':
``,
/* 725 */
'prominent (adjective)':
``,
/* 726 */
'nearby (adverb)':
``,
/* 727 */
'entity (noun)':
``,
/* 728 */
'vertical (adjective)':
``,
/* 729 */
'critique (noun)':
``,
/* 730 */
'lyric (noun)':
``,
/* 731 */
'reassure (verb)':
``,
/* 732 */
'disruption (noun)':
``,
/* 733 */
'attachment (noun)':
``,
/* 734 */
'format (noun)':
``,
/* 735 */
'standing (adjective)':
``,
/* 736 */
'overcome (verb)':
``,
/* 737 */
'outsider (noun)':
``,
/* 738 */
'bind (verb)':
``,
/* 739 */
'adjust (verb)':
``,
/* 740 */
'productive (adjective)':
``,
/* 741 */
'ease (noun)':
``,
/* 742 */
'manuscript (noun)':
``,
/* 743 */
'tribe (noun)':
``,
/* 744 */
'counsellor (noun)':
``,
/* 745 */
'grip (verb)':
``,
/* 746 */
'buddy (noun)':
``,
/* 747 */
'radiation (noun)':
``,
/* 748 */
'fraud (noun)':
``,
/* 749 */
'parameter (noun)':
``,
/* 750 */
'disastrous (adjective)':
``,
/* 751 */
'absence (noun)':
``,
/* 752 */
'ownership (noun)':
``,
/* 753 */
'homeless (adjective)':
``,
/* 754 */
'nasty (adjective)':
``,
/* 755 */
'glimpse (noun)':
``,
/* 756 */
'activist (noun)':
``,
/* 757 */
'prospective (adjective)':
``,
/* 758 */
'boast (verb)':
``,
/* 759 */
'reckon (verb)':
``,
/* 760 */
'amend (verb)':
``,
/* 761 */
'preservation (noun)':
``,
/* 762 */
'fabric (noun)':
``,
/* 763 */
'successive (adjective)':
``,
/* 764 */
'commence (verb)':
``,
/* 765 */
'thesis (noun)':
``,
/* 766 */
'remainder (noun)':
``,
/* 767 */
'counterpart (noun)':
``,
/* 768 */
'prior (adjective)':
``,
/* 769 */
'dignity (noun)':
``,
/* 770 */
'countless (adjective)':
``,
/* 771 */
'harvest (noun)':
``,
/* 772 */
'solely (adverb)':
``,
/* 773 */
'mosque (noun)':
``,
/* 774 */
'momentum (noun)':
``,
/* 775 */
'harassment (noun)':
``,
/* 776 */
'perceive (verb)':
``,
/* 777 */
'acid (adjective)':
``,
/* 778 */
'liable (adjective)':
``,
/* 779 */
'successor (noun)':
``,
/* 780 */
'implication (noun)':
``,
/* 781 */
'sufficient (adjective)':
``,
/* 782 */
'confusion (noun)':
``,
/* 783 */
'haunt (verb)':
``,
/* 784 */
'unite (verb)':
``,
/* 785 */
'default (noun)':
``,
/* 786 */
'embarrassment (noun)':
``,
/* 787 */
'principal (noun)':
``,
/* 788 */
'wander (verb)':
``,
/* 789 */
'denounce (verb)':
``,
/* 790 */
'promotion (noun)':
``,
/* 791 */
'inspiration (noun)':
``,
/* 792 */
'decision-making (noun)':
``,
/* 793 */
'upgrade (verb)':
``,
/* 794 */
'dual (adjective)':
``,
/* 795 */
'demonstration (noun)':
``,
/* 796 */
'squad (noun)':
``,
/* 797 */
'forecast (verb)':
``,
/* 798 */
'concrete (noun)':
``,
/* 799 */
'saint (noun)':
``,
/* 800 */
'glorious (adjective)':
``,
/* 801 */
'seal (noun)':
``,
/* 802 */
'worship (verb)':
``,
/* 803 */
'rock (verb)':
``,
/* 804 */
'bay (noun)':
``,
/* 805 */
'shatter (verb)':
``,
/* 806 */
'offender (noun)':
``,
/* 807 */
'closure (noun)':
``,
/* 808 */
'bias (noun)':
``,
/* 809 */
'resistance (noun)':
``,
/* 810 */
'nonsense (noun)':
``,
/* 811 */
'verse (noun)':
``,
/* 812 */
'validity (noun)':
``,
/* 813 */
'adaptation (noun)':
``,
/* 814 */
'robbery (noun)':
``,
/* 815 */
'bargain (noun)':
``,
/* 816 */
'selective (adjective)':
``,
/* 817 */
'methodology (noun)':
``,
/* 818 */
'confession (noun)':
``,
/* 819 */
'inhibit (verb)':
``,
/* 820 */
'meaningful (adjective)':
``,
/* 821 */
'villager (noun)':
``,
/* 822 */
'elite (noun)':
``,
/* 823 */
'making (noun)':
``,
/* 824 */
'obstacle (noun)':
``,
/* 825 */
'handful (noun)':
``,
/* 826 */
'structural (adjective)':
``,
/* 827 */
'compose (verb)':
``,
/* 828 */
'diplomatic (adjective)':
``,
/* 829 */
'gear (noun)':
``,
/* 830 */
'counselling (noun)':
``,
/* 831 */
'commodity (noun)':
``,
/* 832 */
'jurisdiction (noun)':
``,
/* 833 */
'psychiatric (adjective)':
``,
/* 834 */
'insider (noun)':
``,
/* 835 */
'variation (noun)':
``,
/* 836 */
'cheer (noun)':
``,
/* 837 */
'erect (verb)':
``,
/* 838 */
'frustrated (adjective)':
``,
/* 839 */
'distort (verb)':
``,
/* 840 */
'resume (verb)':
``,
/* 841 */
'suicide (noun)':
``,
/* 842 */
'strive (verb)':
``,
/* 843 */
'accomplish (verb)':
``,
/* 844 */
'entitle (verb)':
``,
/* 845 */
'absurd (adjective)':
``,
/* 846 */
'partnership (noun)':
``,
/* 847 */
'revelation (noun)':
``,
/* 848 */
'sacrifice (noun)':
``,
/* 849 */
'acid (noun)':
``,
/* 850 */
'relieve (verb)':
``,
/* 851 */
'headquarters (noun)':
``,
/* 852 */
'restore (verb)':
``,
/* 853 */
'recruit (verb)':
``,
/* 854 */
'angel (noun)':
``,
/* 855 */
'unity (noun)':
``,
/* 856 */
'highway (noun)':
``,
/* 857 */
'herb (noun)':
``,
/* 858 */
'ease (verb)':
``,
/* 859 */
'deprive (verb)':
``,
/* 860 */
'downtown (adverb)':
``,
/* 861 */
'terminal (adjective)':
``,
/* 862 */
'curiosity (noun)':
``,
/* 863 */
'fundraising (noun)':
``,
/* 864 */
'inadequate (adjective)':
``,
/* 865 */
'strictly (adverb)':
``,
/* 866 */
'weird (adjective)':
``,
/* 867 */
'intimate (adjective)':
``,
/* 868 */
'regulator (noun)':
``,
/* 869 */
'pump (noun)':
``,
/* 870 */
'constituency (noun)':
``,
/* 871 */
'differ (verb)':
``,
/* 872 */
'reminder (noun)':
``,
/* 873 */
'wheat (noun)':
``,
/* 874 */
'dumb (adjective)':
``,
/* 875 */
'marginal (adjective)':
``,
/* 876 */
'consent (verb)':
``,
/* 877 */
'distant (adjective)':
``,
/* 878 */
'top (verb)':
``,
/* 879 */
'recruitment (noun)':
``,
/* 880 */
'remarkable (adjective)':
``,
/* 881 */
'loop (noun)':
``,
/* 882 */
'automatically (adverb)':
``,
/* 883 */
'guidance (noun)':
``,
/* 884 */
'upcoming (adjective)':
``,
/* 885 */
'undergo (verb)':
``,
/* 886 */
'vulnerability (noun)':
``,
/* 887 */
'trait (noun)':
``,
/* 888 */
'leap (verb)':
``,
/* 889 */
'monopoly (noun)':
``,
/* 890 */
'plea (noun)':
``,
/* 891 */
'substantially (adverb)':
``,
/* 892 */
'suffering (noun)':
``,
/* 893 */
'inclined (adjective)':
``,
/* 894 */
'uncertainty (noun)':
``,
/* 895 */
'sensation (noun)':
``,
/* 896 */
'negotiate (verb)':
``,
/* 897 */
'spin (noun)':
``,
/* 898 */
'overseas (adverb)':
``,
/* 899 */
'concession (noun)':
``,
/* 900 */
'plug (noun)':
``,
/* 901 */
'dam (noun)':
``,
/* 902 */
'induce (verb)':
``,
/* 903 */
'spokeswoman (noun)':
``,
/* 904 */
'niche (noun)':
``,
/* 905 */
'rating (noun)':
``,
/* 906 */
'taxpayer (noun)':
``,
/* 907 */
'peer (noun)':
``,
/* 908 */
'allegedly (adverb)':
``,
/* 909 */
'syndrome (noun)':
``,
/* 910 */
'suspend (verb)':
``,
/* 911 */
'tactical (adjective)':
``,
/* 912 */
'jail (noun)':
``,
/* 913 */
'dedicated (adjective)':
``,
/* 914 */
'diplomat (noun)':
``,
/* 915 */
'sexy (adjective)':
``,
/* 916 */
'vulnerable (adjective)':
``,
/* 917 */
'bare (adjective)':
``,
/* 918 */
'nominee (noun)':
``,
/* 919 */
'grasp (verb)':
``,
/* 920 */
'fraction (noun)':
``,
/* 921 */
'memorial (noun)':
``,
/* 922 */
'distinct (adjective)':
``,
/* 923 */
'cheer (verb)':
``,
/* 924 */
'indulge (verb)':
``,
/* 925 */
'correction (noun)':
``,
/* 926 */
'electoral (adjective)':
``,
/* 927 */
'nowadays (adverb)':
``,
/* 928 */
'jet (noun)':
``,
/* 929 */
'democracy (noun)':
``,
/* 930 */
'withdraw (verb)':
``,
/* 931 */
'conventional (adjective)':
``,
/* 932 */
'interfere (verb)':
``,
/* 933 */
'anxiety (noun)':
``,
/* 934 */
'institutional (adjective)':
``,
/* 935 */
'regime (noun)':
``,
/* 936 */
'maximize (verb)':
``,
/* 937 */
'obsession (noun)':
``,
/* 938 */
'endless (adjective)':
``,
/* 939 */
'accountant (noun)':
``,
/* 940 */
'incorporate (verb)':
``,
/* 941 */
'literacy (noun)':
``,
/* 942 */
'punch (noun)':
``,
/* 943 */
'prestigious (adjective)':
``,
/* 944 */
'firmly (adverb)':
``,
/* 945 */
'seeker (noun)':
``,
/* 946 */
'councillor (noun)':
``,
/* 947 */
'provision (noun)':
``,
/* 948 */
'insufficient (adjective)':
``,
/* 949 */
'risky (adjective)':
``,
/* 950 */
'catalogue (noun)':
``,
/* 951 */
'dynamic (noun)':
``,
/* 952 */
'banner (noun)':
``,
/* 953 */
'plug (verb)':
``,
/* 954 */
'lottery (noun)':
``,
/* 955 */
'fabulous (adjective)':
``,
/* 956 */
'collision (noun)':
``,
/* 957 */
'transmit (verb)':
``,
/* 958 */
'debris (noun)':
``,
/* 959 */
'output (noun)':
``,
/* 960 */
'inspection (noun)':
``,
/* 961 */
'partial (adjective)':
``,
/* 962 */
'configuration (noun)':
``,
/* 963 */
'junction (noun)':
``,
/* 964 */
'naked (adjective)':
``,
/* 965 */
'parental (adjective)':
``,
/* 966 */
'abstract (adjective)':
``,
/* 967 */
'convenience (noun)':
``,
/* 968 */
'sporting (adjective)':
``,
/* 969 */
'irony (noun)':
``,
/* 970 */
'abuse (noun)':
``,
/* 971 */
'jury (noun)':
``,
/* 972 */
'extension (noun)':
``,
/* 973 */
'justification (noun)':
``,
/* 974 */
'essence (noun)':
``,
/* 975 */
'marine (adjective)':
``,
/* 976 */
'minimal (adjective)':
``,
/* 977 */
'precise (adjective)':
``,
/* 978 */
'asset (noun)':
``,
/* 979 */
'encouragement (noun)':
``,
/* 980 */
'soak (verb)':
``,
/* 981 */
'investor (noun)':
``,
/* 982 */
'stroke (noun)':
``,
/* 983 */
'dismissal (noun)':
``,
/* 984 */
'alert (noun)':
``,
/* 985 */
'regulate (verb)':
``,
/* 986 */
'striking (adjective)':
``,
/* 987 */
'ray (noun)':
``,
/* 988 */
'thread (noun)':
``,
/* 989 */
'long-time (adjective)':
``,
/* 990 */
'comparable (adjective)':
``,
/* 991 */
'assertion (noun)':
``,
/* 992 */
'grace (noun)':
``,
/* 993 */
'discourse (noun)':
``,
/* 994 */
'precedent (noun)':
``,
/* 995 */
'genetic (adjective)':
``,
/* 996 */
'correlate (verb)':
``,
/* 997 */
'testing (noun)':
``,
/* 998 */
'contend (verb)':
``,
/* 999 */
'prompt (verb)':
``,
/* 1000 */
'processor (noun)':
``,
/* 1001 */
'booking (noun)':
``,
/* 1002 */
'facilitate (verb)':
``,
/* 1003 */
'disabled (adjective)':
``,
/* 1004 */
'injustice (noun)':
``,
/* 1005 */
'terror (noun)':
``,
/* 1006 */
'rhetoric (noun)':
``,
/* 1007 */
'consultation (noun)':
``,
/* 1008 */
'rebuild (verb)':
``,
/* 1009 */
'transparent (adjective)':
``,
/* 1010 */
'sufficiently (adverb)':
``,
/* 1011 */
'simultaneously (adverb)':
``,
/* 1012 */
'presently (adverb)':
``,
/* 1013 */
'depart (verb)':
``,
/* 1014 */
'miracle (noun)':
``,
/* 1015 */
'backing (noun)':
``,
/* 1016 */
'revision (noun)':
``,
/* 1017 */
'dull (adjective)':
``,
/* 1018 */
'intent (noun)':
``,
/* 1019 */
'noble (adjective)':
``,
/* 1020 */
'warrant (noun)':
``,
/* 1021 */
'publishing (noun)':
``,
/* 1022 */
'suspension (noun)':
``,
/* 1023 */
'trace (verb)':
``,
/* 1024 */
'cater (verb)':
``,
/* 1025 */
'hint (noun)':
``,
/* 1026 */
'accuracy (noun)':
``,
/* 1027 */
'worship (noun)':
``,
/* 1028 */
'eternal (adjective)':
``,
/* 1029 */
'riot (noun)':
``,
/* 1030 */
'tournament (noun)':
``,
/* 1031 */
'activation (noun)':
``,
/* 1032 */
'firm (adjective)':
``,
/* 1033 */
'classify (verb)':
``,
/* 1034 */
'genius (noun)':
``,
/* 1035 */
'tremendous (adjective)':
``,
/* 1036 */
'optimism (noun)':
``,
/* 1037 */
'fit (noun)':
``,
/* 1038 */
'super (adjective)':
``,
/* 1039 */
'burial (noun)':
``,
/* 1040 */
'ironic (adjective)':
``,
/* 1041 */
'magistrate (noun)':
``,
/* 1042 */
'propaganda (noun)':
``,
/* 1043 */
'refuge (noun)':
``,
/* 1044 */
'immune (adjective)':
``,
/* 1045 */
'extensive (adjective)':
``,
/* 1046 */
'comply (verb)':
``,
/* 1047 */
'textbook (noun)':
``,
/* 1048 */
'defensive (adjective)':
``,
/* 1049 */
'escalate (verb)':
``,
/* 1050 */
'hopefully (adverb)':
``,
/* 1051 */
'pause (noun)':
``,
/* 1052 */
'explicitly (adverb)':
``,
/* 1053 */
'establishment (noun)':
``,
/* 1054 */
'identification (noun)':
``,
/* 1055 */
'kidnap (verb)':
``,
/* 1056 */
'mayor (noun)':
``,
/* 1057 */
'recognition (noun)':
``,
/* 1058 */
'rally (verb)':
``,
/* 1059 */
'ward (noun)':
``,
/* 1060 */
'manipulation (noun)':
``,
/* 1061 */
'personnel (noun)':
``,
/* 1062 */
'desktop (noun)':
``,
/* 1063 */
'naval (adjective)':
``,
/* 1064 */
'gallon (noun)':
``,
/* 1065 */
'mathematical (adjective)':
``,
/* 1066 */
'memoir (noun)':
``,
/* 1067 */
'psychological (adjective)':
``,
/* 1068 */
'just (adjective)':
``,
/* 1069 */
'divorce (verb)':
``,
/* 1070 */
'outbreak (noun)':
``,
/* 1071 */
'pit (noun)':
``,
/* 1072 */
'significance (noun)':
``,
/* 1073 */
'consensus (noun)':
``,
/* 1074 */
'monster (noun)':
``,
/* 1075 */
'inject (verb)':
``,
/* 1076 */
'exceed (verb)':
``,
/* 1077 */
'rage (noun)':
``,
/* 1078 */
'lawn (noun)':
``,
/* 1079 */
'progressive (adjective)':
``,
/* 1080 */
'acre (noun)':
``,
/* 1081 */
'presumably (adverb)':
``,
/* 1082 */
'spare (adjective)':
``,
/* 1083 */
'inclusion (noun)':
``,
/* 1084 */
'sponsorship (noun)':
``,
/* 1085 */
'verdict (noun)':
``,
/* 1086 */
'auto (noun)':
``,
/* 1087 */
'stimulate (verb)':
``,
/* 1088 */
'cooperative (adjective)':
``,
/* 1089 */
'vocal (adjective)':
``,
/* 1090 */
'execute (verb)':
``,
/* 1091 */
'correlation (noun)':
``,
/* 1092 */
'beside (preposition)':
``,
/* 1093 */
'governance (noun)':
``,
/* 1094 */
'exhibit (verb)':
``,
/* 1095 */
'loyal (adjective)':
``,
/* 1096 */
'corporation (noun)':
``,
/* 1097 */
'circulate (verb)':
``,
/* 1098 */
'feat (noun)':
``,
/* 1099 */
'crawl (verb)':
``,
/* 1100 */
'urgent (adjective)':
``,
/* 1101 */
'spectacle (noun)':
``,
/* 1102 */
'scholar (noun)':
``,
/* 1103 */
'administer (verb)':
``,
/* 1104 */
'organic (adjective)':
``,
/* 1105 */
'briefly (adverb)':
``,
/* 1106 */
'educator (noun)':
``,
/* 1107 */
'deposit (verb)':
``,
/* 1108 */
'considerably (adverb)':
``,
/* 1109 */
'venture (verb)':
``,
/* 1110 */
'skip (verb)':
``,
/* 1111 */
'isolate (verb)':
``,
/* 1112 */
'dimension (noun)':
``,
/* 1113 */
'rejection (noun)':
``,
/* 1114 */
'voting (noun)':
``,
/* 1115 */
'accusation (noun)':
``,
/* 1116 */
'practitioner (noun)':
``,
/* 1117 */
'ink (noun)':
``,
/* 1118 */
'divert (verb)':
``,
/* 1119 */
'conserve (verb)':
``,
/* 1120 */
'precious (adjective)':
``,
/* 1121 */
'complication (noun)':
``,
/* 1122 */
'stall (noun)':
``,
/* 1123 */
'evaluation (noun)':
``,
/* 1124 */
'choir (noun)':
``,
/* 1125 */
'aside (adverb)':
``,
/* 1126 */
'terrify (verb)':
``,
/* 1127 */
'shareholder (noun)':
``,
/* 1128 */
'compensation (noun)':
``,
/* 1129 */
'horizon (noun)':
``,
/* 1130 */
'formula (noun)':
``,
/* 1131 */
'grasp (noun)':
``,
/* 1132 */
'kidney (noun)':
``,
/* 1133 */
'secular (adjective)':
``,
/* 1134 */
'thought-provoking (adjective)':
``,
/* 1135 */
'barrel (noun)':
``,
/* 1136 */
'calculation (noun)':
``,
/* 1137 */
'trauma (noun)':
``,
/* 1138 */
'gaze (verb)':
``,
/* 1139 */
'migration (noun)':
``,
/* 1140 */
'somehow (adverb)':
``,
/* 1141 */
'enact (verb)':
``,
/* 1142 */
'suppress (verb)':
``,
/* 1143 */
'legitimate (adjective)':
``,
/* 1144 */
'mobility (noun)':
``,
/* 1145 */
'sound (adjective)':
``,
/* 1146 */
'symbolic (adjective)':
``,
/* 1147 */
'grocery (noun)':
``,
/* 1148 */
'academy (noun)':
``,
/* 1149 */
'reportedly (adverb)':
``,
/* 1150 */
'democratic (adjective)':
``,
/* 1151 */
'integrated (adjective)':
``,
/* 1152 */
'echo (noun)':
``,
/* 1153 */
'poll (noun)':
``,
/* 1154 */
'dairy (adjective)':
``,
/* 1155 */
'ideology (noun)':
``,
/* 1156 */
'panic (noun)':
``,
/* 1157 */
'counter (verb)':
``,
/* 1158 */
'valid (adjective)':
``,
/* 1159 */
'spin (verb)':
``,
/* 1160 */
'lap (noun)':
``,
/* 1161 */
'ladder (noun)':
``,
/* 1162 */
'consistency (noun)':
``,
/* 1163 */
'merger (noun)':
``,
/* 1164 */
'imprison (verb)':
``,
/* 1165 */
'succession (noun)':
``,
/* 1166 */
'variable (noun)':
``,
/* 1167 */
'guilt (noun)':
``,
/* 1168 */
'lobby (verb)':
``,
/* 1169 */
'collaboration (noun)':
``,
/* 1170 */
'representation (noun)':
``,
/* 1171 */
'absent (adjective)':
``,
/* 1172 */
'patent (noun)':
``,
/* 1173 */
'distress (noun)':
``,
/* 1174 */
'overlook (verb)':
``,
/* 1175 */
'revenue (noun)':
``,
/* 1176 */
'helmet (noun)':
``,
/* 1177 */
'militant (adjective)':
``,
/* 1178 */
'authentic (adjective)':
``,
/* 1179 */
'excellence (noun)':
``,
/* 1180 */
'bench (noun)':
``,
/* 1181 */
'detain (verb)':
``,
/* 1182 */
'hazard (noun)':
``,
/* 1183 */
'aspire (verb)':
``,
/* 1184 */
'functional (adjective)':
``,
/* 1185 */
'sympathetic (adjective)':
``,
/* 1186 */
'enforcement (noun)':
``,
/* 1187 */
'literary (adjective)':
``,
/* 1188 */
'challenging (adjective)':
``,
/* 1189 */
'goodness (noun)':
``,
/* 1190 */
'chase (verb)':
``,
/* 1191 */
'speculation (noun)':
``,
/* 1192 */
'confrontation (noun)':
``,
/* 1193 */
'basement (noun)':
``,
/* 1194 */
'spark (verb)':
``,
/* 1195 */
'crystal (noun)':
``,
/* 1196 */
'strain (noun)':
``,
/* 1197 */
'sovereignty (noun)':
``,
/* 1198 */
'detention (noun)':
``,
/* 1199 */
'correspond (verb)':
``,
/* 1200 */
'sacrifice (verb)':
``,
/* 1201 */
'tenant (noun)':
``,
/* 1202 */
'federal (adjective)':
``,
/* 1203 */
'unprecedented (adjective)':
``,
/* 1204 */
'aide (noun)':
``,
/* 1205 */
'infamous (adjective)':
``,
/* 1206 */
'undermine (verb)':
``,
/* 1207 */
'editorial (adjective)':
``,
/* 1208 */
'subsequently (adverb)':
``,
/* 1209 */
'sustain (verb)':
``,
/* 1210 */
'reign (noun)':
``,
/* 1211 */
'latter (noun)':
``,
/* 1212 */
'precisely (adverb)':
``,
/* 1213 */
'strengthen (verb)':
``,
/* 1214 */
'tackle (noun)':
``,
/* 1215 */
'accent (noun)':
``,
/* 1216 */
'mainstream (noun)':
``,
/* 1217 */
'trail (verb)':
``,
/* 1218 */
'substitute (verb)':
``,
/* 1219 */
'nursing (noun)':
``,
/* 1220 */
'instruct (verb)':
``,
/* 1221 */
'faction (noun)':
``,
/* 1222 */
'rod (noun)':
``,
/* 1223 */
'pronounced (adjective)':
``,
/* 1224 */
'deed (noun)':
``,
/* 1225 */
'confer (verb)':
``,
/* 1226 */
'presume (verb)':
``,
/* 1227 */
'whatsoever (adverb)':
``,
/* 1228 */
'proportion (noun)':
``,
/* 1229 */
'adoption (noun)':
``,
/* 1230 */
'chamber (noun)':
``,
/* 1231 */
'probe (noun)':
``,
/* 1232 */
'satisfaction (noun)':
``,
/* 1233 */
'lengthy (adjective)':
``,
/* 1234 */
'specialized (adjective)':
``,
/* 1235 */
'passing (noun)':
``,
/* 1236 */
'appoint (verb)':
``,
/* 1237 */
'delegation (noun)':
``,
/* 1238 */
'companion (noun)':
``,
/* 1239 */
'stem (verb)':
``,
/* 1240 */
'directory (noun)':
``,
/* 1241 */
'magnetic (adjective)':
``,
/* 1242 */
'absorb (verb)':
``,
/* 1243 */
'curious (adjective)':
``,
/* 1244 */
'settlement (noun)':
``,
/* 1245 */
'purely (adverb)':
``,
/* 1246 */
'stark (adjective)':
``,
/* 1247 */
'restriction (noun)':
``,
/* 1248 */
'trail (noun)':
``,
/* 1249 */
'forge (verb)':
``,
/* 1250 */
'intellectual (adjective)':
``,
/* 1251 */
'crush (verb)':
``,
/* 1252 */
'civilian (adjective)':
``,
/* 1253 */
'precede (verb)':
``,
/* 1254 */
'endeavour (noun)':
``,
/* 1255 */
'novelist (noun)':
``,
/* 1256 */
'reflection (noun)':
``,
/* 1257 */
'lesser (adjective)':
``,
/* 1258 */
'hostage (noun)':
``,
/* 1259 */
'hatred (noun)':
``,
/* 1260 */
'deteriorate (verb)':
``,
/* 1261 */
'slash (verb)':
``,
/* 1262 */
'span (verb)':
``,
/* 1263 */
'intervene (verb)':
``,
/* 1264 */
'supervision (noun)':
``,
/* 1265 */
'consent (noun)':
``,
/* 1266 */
'organizational (adjective)':
``,
/* 1267 */
'isolation (noun)':
``,
/* 1268 */
'scandal (noun)':
``,
/* 1269 */
'enforce (verb)':
``,
/* 1270 */
'occupation (noun)':
``,
/* 1271 */
'shipping (noun)':
``,
/* 1272 */
'supervise (verb)':
``,
/* 1273 */
'shrink (verb)':
``,
/* 1274 */
'philosophical (adjective)':
``,
/* 1275 */
'hopeful (adjective)':
``,
/* 1276 */
'sensitivity (noun)':
``,
/* 1277 */
'footage (noun)':
``,
/* 1278 */
'basket (noun)':
``,
/* 1279 */
'massacre (noun)':
``,
/* 1280 */
'warming (noun)':
``,
/* 1281 */
'transaction (noun)':
``,
/* 1282 */
'equation (noun)':
``,
/* 1283 */
'adolescent (noun)':
``,
/* 1284 */
'grave (adjective)':
``,
/* 1285 */
'beneficial (adjective)':
``,
/* 1286 */
'civilization (noun)':
``,
/* 1287 */
'merit (noun)':
``,
/* 1288 */
'investigator (noun)':
``,
/* 1289 */
'flee (verb)':
``,
/* 1290 */
'orientation (noun)':
``,
/* 1291 */
'devote (verb)':
``,
/* 1292 */
'engagement (noun)':
``,
/* 1293 */
'cope (verb)':
``,
/* 1294 */
'retrieve (verb)':
``,
/* 1295 */
'brick (noun)':
``,
/* 1296 */
'consult (verb)':
``,
/* 1297 */
'consultant (noun)':
``,
/* 1298 */
'frustration (noun)':
``,
/* 1299 */
'nod (verb)':
``,
/* 1300 */
'differentiate (verb)':
``,
/* 1301 */
'grip (noun)':
``,
/* 1302 */
'ongoing (adjective)':
``,
/* 1303 */
'adjustment (noun)':
``,
/* 1304 */
'downtown (adjective)':
``,
/* 1305 */
'hostile (adjective)':
``,
/* 1306 */
'senator (noun)':
``,
/* 1307 */
'arbitrary (adjective)':
``,
/* 1308 */
'bat (verb)':
``,
/* 1309 */
'log (verb)':
``,
/* 1310 */
'trigger (noun)':
``,
/* 1311 */
'cutting (noun)':
``,
/* 1312 */
'troubled (adjective)':
``,
/* 1313 */
'crown (noun)':
``,
/* 1314 */
'persistent (adjective)':
``,
/* 1315 */
'handy (adjective)':
``,
/* 1316 */
'frequent (adjective)':
``,
/* 1317 */
'preliminary (adjective)':
``,
/* 1318 */
'scratch (verb)':
``,
/* 1319 */
'cue (noun)':
``,
/* 1320 */
'indictment (noun)':
``,
/* 1321 */
'mandate (noun)':
``,
/* 1322 */
'hook (noun)':
``,
/* 1323 */
'pledge (verb)':
``,
/* 1324 */
'nursery (noun)':
``,
/* 1325 */
'short-term (adjective)':
``,
/* 1326 */
'metaphor (noun)':
``,
/* 1327 */
'biological (adjective)':
``,
/* 1328 */
'ruin (noun)':
``,
/* 1329 */
'dictator (noun)':
``,
/* 1330 */
'marathon (noun)':
``,
/* 1331 */
'exile (noun)':
``,
/* 1332 */
'drain (verb)':
``,
/* 1333 */
'inevitably (adverb)':
``,
/* 1334 */
'delegate (noun)':
``,
/* 1335 */
'certainty (noun)':
``,
/* 1336 */
'missile (noun)':
``,
/* 1337 */
'protocol (noun)':
``,
/* 1338 */
'displace (verb)':
``,
/* 1339 */
'electronics (noun)':
``,
/* 1340 */
'inequality (noun)':
``,
/* 1341 */
'gut (noun)':
``,
/* 1342 */
'insult (noun)':
``,
/* 1343 */
'lobby (noun)':
``,
/* 1344 */
'interior (adjective)':
``,
/* 1345 */
'wisdom (noun)':
``,
/* 1346 */
'collective (adjective)':
``,
/* 1347 */
'problematic (adjective)':
``,
/* 1348 */
'chronic (adjective)':
``,
/* 1349 */
'completion (noun)':
``,
/* 1350 */
'proceeds (noun)':
``,
/* 1351 */
'subtle (adjective)':
``,
/* 1352 */
'motion (noun)':
``,
/* 1353 */
'memo (noun)':
``,
/* 1354 */
'obsess (verb)':
``,
/* 1355 */
'angrily (adverb)':
``,
/* 1356 */
'hunger (noun)':
``,
/* 1357 */
'gaze (noun)':
``,
/* 1358 */
'soar (verb)':
``,
/* 1359 */
'scrutiny (noun)':
``,
/* 1360 */
'gay (adjective)':
``,
/* 1361 */
'barely (adverb)':
``,
/* 1362 */
'terrific (adjective)':
``,
/* 1363 */
'neighbouring (adjective)':
``,
/* 1364 */
'pipeline (noun)':
``,
/* 1365 */
'wrist (noun)':
``,
/* 1366 */
'disorder (noun)':
``,
/* 1367 */
'graphic (adjective)':
``,
/* 1368 */
'array (noun)':
``,
/* 1369 */
'listing (noun)':
``,
/* 1370 */
'considerable (adjective)':
``,
/* 1371 */
'march (noun)':
``,
/* 1372 */
'provincial (adjective)':
``,
/* 1373 */
'implementation (noun)':
``,
/* 1374 */
'rotate (verb)':
``,
/* 1375 */
'denial (noun)':
``,
/* 1376 */
'ratio (noun)':
``,
/* 1377 */
'exhibit (noun)':
``,
/* 1378 */
'slavery (noun)':
``,
/* 1379 */
'wipe (verb)':
``,
/* 1380 */
'globe (noun)':
``,
/* 1381 */
'exception (noun)':
``,
/* 1382 */
'mandatory (adjective)':
``,
/* 1383 */
'treaty (noun)':
``,
/* 1384 */
'boundary (noun)':
``,
/* 1385 */
'hierarchy (noun)':
``,
/* 1386 */
'bounce (verb)':
``,
/* 1387 */
'ridiculous (adjective)':
``,
/* 1388 */
'cabin (noun)':
``,
/* 1389 */
'gender (noun)':
``,
/* 1390 */
'legislation (noun)':
``,
/* 1391 */
'integral (adjective)':
``,
/* 1392 */
'discrimination (noun)':
``,
/* 1393 */
'restoration (noun)':
``,
/* 1394 */
'anonymous (adjective)':
``,
/* 1395 */
'clip (noun)':
``,
/* 1396 */
'comprise (verb)':
``,
/* 1397 */
'statistical (adjective)':
``,
/* 1398 */
'worm (noun)':
``,
/* 1399 */
'password (noun)':
``,
/* 1400 */
'utterly (adverb)':
``,
/* 1401 */
'broadly (adverb)':
``,
/* 1402 */
'virtue (noun)':
``,
/* 1403 */
'illusion (noun)':
``,
/* 1404 */
'starve (verb)':
``,
/* 1405 */
'regardless (adverb)':
``,
/* 1406 */
'dip (verb)':
``,
/* 1407 */
'alike (adverb)':
``,
/* 1408 */
'morality (noun)':
``,
/* 1409 */
'trap (verb)':
``,
/* 1410 */
'amateur (adjective)':
``,
/* 1411 */
'allege (verb)':
``,
/* 1412 */
'correspondent (noun)':
``,
/* 1413 */
'moderate (adjective)':
``,
/* 1414 */
'filter (noun)':
``,
/* 1415 */
'conversion (noun)':
``,
/* 1416 */
'acute (adjective)':
``,
/* 1417 */
'efficiency (noun)':
``,
/* 1418 */
'oblige (verb)':
``,
/* 1419 */
'transportation (noun)':
``,
/* 1420 */
'seal (verb)':
``,
/* 1421 */
'retreat (noun)':
``,
/* 1422 */
'cynical (adjective)':
``,
/* 1423 */
'overly (adverb)':
``,
/* 1424 */
'landmark (noun)':
``,
/* 1425 */
'demon (noun)':
``,
/* 1426 */
'handling (noun)':
``,
/* 1427 */
'sophisticated (adjective)':
``,
/* 1428 */
'pulse (noun)':
``,
/* 1429 */
'flaw (noun)':
``,
/* 1430 */
'dictate (verb)':
``,
/* 1431 */
'nonetheless (adverb)':
``,
/* 1432 */
'archive (noun)':
``,
/* 1433 */
'seminar (noun)':
``,
/* 1434 */
'contrary (noun)':
``,
/* 1435 */
'renew (verb)':
``,
/* 1436 */
'failed (adjective)':
``,
/* 1437 */
'latter (adjective)':
``,
/* 1438 */
'limitation (noun)':
``,
/* 1439 */
'make-up (noun)':
``,
/* 1440 */
'specimen (noun)':
``,
/* 1441 */
'dense (adjective)':
``,
/* 1442 */
'assert (verb)':
``,
/* 1443 */
'accounting (noun)':
``,
/* 1444 */
'portray (verb)':
``,
/* 1445 */
'pledge (noun)':
``,
/* 1446 */
'contempt (noun)':
``,
/* 1447 */
'fine (verb)':
``,
/* 1448 */
'trading (noun)':
``,
/* 1449 */
'emergence (noun)':
``,
/* 1450 */
'elbow (noun)':
``,
/* 1451 */
'disturb (verb)':
``,
/* 1452 */
'continually (adverb)':
``,
/* 1453 */
'merely (adverb)':
``,
/* 1454 */
'joint (noun)':
``,
/* 1455 */
'golden (adjective)':
``,
/* 1456 */
'sigh (noun)':
``,
/* 1457 */
'patch (noun)':
``,
/* 1458 */
'enrol (verb)':
``,
/* 1459 */
'imprisonment (noun)':
``,
/* 1460 */
'bless (verb)':
``,
/* 1461 */
'adhere (verb)':
``,
/* 1462 */
'province (noun)':
``,
/* 1463 */
'fake (adjective)':
``,
/* 1464 */
'outrage (noun)':
``,
/* 1465 */
'clinical (adjective)':
``,
/* 1466 */
'glance (verb)':
``,
/* 1467 */
'tendency (noun)':
``,
/* 1468 */
'retail (noun)':
``,
/* 1469 */
'controversial (adjective)':
``,
/* 1470 */
'assistance (noun)':
``,
/* 1471 */
'exit (noun)':
``,
/* 1472 */
'preside (verb)':
``,
/* 1473 */
'useless (adjective)':
``,
/* 1474 */
'apology (noun)':
``,
/* 1475 */
'filter (verb)':
``,
/* 1476 */
'alongside (preposition)':
``,
/* 1477 */
'canvas (noun)':
``,
/* 1478 */
'grave (noun)':
``,
/* 1479 */
'tsunami (noun)':
``,
/* 1480 */
'recession (noun)':
``,
/* 1481 */
'complement (verb)':
``,
/* 1482 */
'probe (verb)':
``,
/* 1483 */
'brutal (adjective)':
``,
/* 1484 */
'smash (verb)':
``,
/* 1485 */
'spy (noun)':
``,
/* 1486 */
'immigration (noun)':
``,
/* 1487 */
'suburb (noun)':
``,
/* 1488 */
'full-time (adverb)':
``,
/* 1489 */
'realization (noun)':
``,
/* 1490 */
'outing (noun)':
``,
/* 1491 */
'aluminium (noun)':
``,
/* 1492 */
'intermediate (adjective)':
``,
/* 1493 */
'subsidy (noun)':
``,
/* 1494 */
'retirement (noun)':
``,
/* 1495 */
'proceed (verb)':
``,
/* 1496 */
'visible (adjective)':
``,
/* 1497 */
'constitute (verb)':
``,
/* 1498 */
'processing (noun)':
``,
/* 1499 */
'suspicious (adjective)':
``,
/* 1500 */
'scattered (adjective)':
``,
/* 1501 */
'portion (noun)':
``,
/* 1502 */
'comparative (adjective)':
``,
/* 1503 */
'donor (noun)':
``,
/* 1504 */
'stabilize (verb)':
``,
/* 1505 */
'ruling (noun)':
``,
/* 1506 */
'disagreement (noun)':
``,
/* 1507 */
'battlefield (noun)':
``,
/* 1508 */
'halt (verb)':
``,
/* 1509 */
'communist (adjective)':
``,
/* 1510 */
'peak (noun)':
``,
/* 1511 */
'lens (noun)':
``,
/* 1512 */
'presidential (adjective)':
``,
/* 1513 */
'crude (adjective)':
``,
/* 1514 */
'opera (noun)':
``,
/* 1515 */
'litter (noun)':
``,
/* 1516 */
'emotionally (adverb)':
``,
/* 1517 */
'republic (noun)':
``,
/* 1518 */
'summit (noun)':
``,
/* 1519 */
'exploitation (noun)':
``,
/* 1520 */
'counter (noun)':
``,
/* 1521 */
'torture (verb)':
``,
/* 1522 */
'clash (noun)':
``,
/* 1523 */
'attorney (noun)':
``,
/* 1524 */
'persist (verb)':
``,
/* 1525 */
'imagery (noun)':
``,
/* 1526 */
'protester (noun)':
``,
/* 1527 */
'dynamic (adjective)':
``,
/* 1528 */
'attain (verb)':
``,
/* 1529 */
'expertise (noun)':
``,
/* 1530 */
'outlet (noun)':
``,
/* 1531 */
'driving (adjective)':
``,
/* 1532 */
'major (noun)':
``,
/* 1533 */
'coordination (noun)':
``,
/* 1534 */
'vague (adjective)':
``,
/* 1535 */
'supportive (adjective)':
``,
/* 1536 */
'receiver (noun)':
``,
/* 1537 */
'segment (noun)':
``,
/* 1538 */
'convey (verb)':
``,
/* 1539 */
'accused (noun)':
``,
/* 1540 */
'harsh (adjective)':
``,
/* 1541 */
'glance (noun)':
``,
/* 1542 */
'characterize (verb)':
``,
/* 1543 */
'privilege (noun)':
``,
/* 1544 */
'influential (adjective)':
``,
/* 1545 */
'costly (adjective)':
``,
/* 1546 */
'competence (noun)':
``,
/* 1547 */
'certificate (noun)':
``,
/* 1548 */
'separation (noun)':
``,
/* 1549 */
'behalf (noun)':
``,
/* 1550 */
'inspect (verb)':
``,
/* 1551 */
'allowance (noun)':
``,
/* 1552 */
'sigh (verb)':
``,
/* 1553 */
'superior (adjective)':
``,
/* 1554 */
'decisive (adjective)':
``,
/* 1555 */
'forecast (noun)':
``,
/* 1556 */
'dispute (noun)':
``,
/* 1557 */
'descent (noun)':
``,
/* 1558 */
'pad (noun)':
``,
/* 1559 */
'interval (noun)':
``,
/* 1560 */
'referendum (noun)':
``,
/* 1561 */
'deck (noun)':
``,
/* 1562 */
'slam (verb)':
``,
/* 1563 */
'confront (verb)':
``,
/* 1564 */
'monument (noun)':
``,
/* 1565 */
'tension (noun)':
``,
/* 1566 */
'content (adjective)':
``,
/* 1567 */
'eligible (adjective)':
``,
/* 1568 */
'testify (verb)':
``,
/* 1569 */
'formerly (adverb)':
``,
/* 1570 */
'subscription (noun)':
``,
/* 1571 */
'coordinate (verb)':
``,
/* 1572 */
'norm (noun)':
``,
/* 1573 */
'miserable (adjective)':
``,
/* 1574 */
'rape (verb)':
``,
/* 1575 */
'lethal (adjective)':
``,
/* 1576 */
'contention (noun)':
``,
/* 1577 */
'freely (adverb)':
``,
/* 1578 */
'objection (noun)':
``,
/* 1579 */
'straightforward (adjective)':
``,
/* 1580 */
'respective (adjective)':
``,
/* 1581 */
'likewise (adverb)':
``,
/* 1582 */
'ally (noun)':
``,
/* 1583 */
'allocation (noun)':
``,
/* 1584 */
'equivalent (adjective)':
``,
/* 1585 */
'amusing (adjective)':
``,
/* 1586 */
'expansion (noun)':
``,
/* 1587 */
'evacuate (verb)':
``,
/* 1588 */
'furious (adjective)':
``,
/* 1589 */
'whoever (pronoun)':
``,
/* 1590 */
'tactic (noun)':
``,
/* 1591 */
'horn (noun)':
``,
/* 1592 */
'excessive (adjective)':
``,
/* 1593 */
'neutral (adjective)':
``,
/* 1594 */
'prosperity (noun)':
``,
/* 1595 */
'fade (verb)':
``,
/* 1596 */
'commentator (noun)':
``,
/* 1597 */
'embrace (verb)':
``,
/* 1598 */
'oversee (verb)':
``,
/* 1599 */
'architectural (adjective)':
``,
/* 1600 */
'margin (noun)':
``,
/* 1601 */
'ministry (noun)':
``,
/* 1602 */
'hypothesis (noun)':
``,
/* 1603 */
'discourage (verb)':
``,
/* 1604 */
'subscriber (noun)':
``,
/* 1605 */
'operational (adjective)':
``,
/* 1606 */
'utilize (verb)':
``,
/* 1607 */
'comic (adjective)':
``,
/* 1608 */
'commentary (noun)':
``,
/* 1609 */
'gorgeous (adjective)':
``,
/* 1610 */
'besides (adverb)':
``,
/* 1611 */
'donation (noun)':
``,
/* 1612 */
'intensity (noun)':
``,
/* 1613 */
'interact (verb)':
``,
/* 1614 */
'monk (noun)':
``,
/* 1615 */
'colonial (adjective)':
``,
/* 1616 */
'independence (noun)':
``,
/* 1617 */
'leaflet (noun)':
``,
/* 1618 */
'conviction (noun)':
``,
/* 1619 */
'potentially (adverb)':
``,
/* 1620 */
'diagnosis (noun)':
``,
/* 1621 */
'cargo (noun)':
``,
/* 1622 */
'opt (verb)':
``,
/* 1623 */
'cliff (noun)':
``,
/* 1624 */
'referee (noun)':
``,
/* 1625 */
'enthusiast (noun)':
``,
/* 1626 */
'heal (verb)':
``,
/* 1627 */
'ego (noun)':
``,
/* 1628 */
'post-war (adjective)':
``,
/* 1629 */
'viewpoint (noun)':
``,
/* 1630 */
'sphere (noun)':
``,
/* 1631 */
'gravity (noun)':
``,
/* 1632 */
'workplace (noun)':
``,
/* 1633 */
'motivate (verb)':
``,
/* 1634 */
'troop (noun)':
``,
/* 1635 */
'thrilled (adjective)':
``,
/* 1636 */
'plunge (verb)':
``,
/* 1637 */
'classification (noun)':
``,
/* 1638 */
'publicity (noun)':
``,
/* 1639 */
'lifetime (noun)':
``,
/* 1640 */
'curriculum (noun)':
``,
/* 1641 */
'parade (noun)':
``,
/* 1642 */
'trustee (noun)':
``,
/* 1643 */
'execution (noun)':
``,
/* 1644 */
'beam (noun)':
``,
/* 1645 */
'rob (verb)':
``,
/* 1646 */
'casino (noun)':
``,
/* 1647 */
'spouse (noun)':
``,
/* 1648 */
'benchmark (noun)':
``,
/* 1649 */
'recount (verb)':
``,
/* 1650 */
'surrender (verb)':
``,
/* 1651 */
'mob (noun)':
``,
/* 1652 */
'declaration (noun)':
``,
/* 1653 */
'midst (noun)':
``,
/* 1654 */
'rear (noun)':
``,
/* 1655 */
'debut (noun)':
``,
/* 1656 */
'conspiracy (noun)':
``,
/* 1657 */
'encouraging (adjective)':
``,
/* 1658 */
'say (noun)':
``,
/* 1659 */
'patrol (noun)':
``,
/* 1660 */
'casual (adjective)':
``,
/* 1661 */
'championship (noun)':
``,
/* 1662 */
'leak (verb)':
``,
/* 1663 */
'sword (noun)':
``,
/* 1664 */
'suburban (adjective)':
``,
/* 1665 */
'vessel (noun)':
``,
/* 1666 */
'surveillance (noun)':
``,
/* 1667 */
'peculiar (adjective)':
``,
/* 1668 */
'tolerate (verb)':
``,
/* 1669 */
'addiction (noun)':
``,
/* 1670 */
'constraint (noun)':
``,
/* 1671 */
'albeit (conjunction)':
``,
/* 1672 */
'scare (verb)':
``,
/* 1673 */
'negotiation (noun)':
``,
/* 1674 */
'applicable (adjective)':
``,
/* 1675 */
'ton (noun)':
``,
/* 1676 */
'variable (adjective)':
``,
/* 1677 */
'badge (noun)':
``,
/* 1678 */
'palm (noun)':
``,
/* 1679 */
'trap (noun)':
``,
/* 1680 */
'film-maker (noun)':
``,
/* 1681 */
'duration (noun)':
``,
/* 1682 */
'infer (verb)':
``,
/* 1683 */
'arm (verb)':
``,
/* 1684 */
'verify (verb)':
``,
/* 1685 */
'beneficiary (noun)':
``,
/* 1686 */
'elementary (adjective)':
``,
/* 1687 */
'aesthetic (adjective)':
``,
/* 1688 */
'pop (verb)':
``,
/* 1689 */
'blend (noun)':
``,
/* 1690 */
'literally (adverb)':
``,
/* 1691 */
'disability (noun)':
``,
/* 1692 */
'meantime (noun)':
``,
/* 1693 */
'interior (noun)':
``,
/* 1694 */
'amateur (noun)':
``,
/* 1695 */
'reluctant (adjective)':
``,
/* 1696 */
'rival (noun)':
``,
/* 1697 */
'vibrant (adjective)':
``,
/* 1698 */
'occurrence (noun)':
``,
/* 1699 */
'log (noun)':
``,
/* 1700 */
'greatly (adverb)':
``,
/* 1701 */
'full-time (adjective)':
``,
/* 1702 */
'innovation (noun)':
``,
/* 1703 */
'artwork (noun)':
``,
/* 1704 */
'blow (noun)':
``,
/* 1705 */
'adjacent (adjective)':
``,
/* 1706 */
'violation (noun)':
``,
/* 1707 */
'mate (verb)':
``,
/* 1708 */
'newsletter (noun)':
``,
/* 1709 */
'stance (noun)':
``,
/* 1710 */
'aftermath (noun)':
``,
/* 1711 */
'part-time (adjective)':
``,
/* 1712 */
'distinction (noun)':
``,
/* 1713 */
'venture (noun)':
``,
/* 1714 */
'favourable (adjective)':
``,
/* 1715 */
'initiate (verb)':
``,
/* 1716 */
'diminish (verb)':
``,
/* 1717 */
'engaging (adjective)':
``,
/* 1718 */
'motivation (noun)':
``,
/* 1719 */
'ignorance (noun)':
``,
/* 1720 */
'boost (verb)':
``,
/* 1721 */
'supreme (adjective)':
``,
/* 1722 */
'specialize (verb)':
``,
/* 1723 */
'bow (verb)':
``,
/* 1724 */
'dominant (adjective)':
``,
/* 1725 */
'destructive (adjective)':
``,
/* 1726 */
'sake (noun)':
``,
/* 1727 */
'assembly (noun)':
``,
/* 1728 */
'hail (verb)':
``,
/* 1729 */
'torture (noun)':
``,
/* 1730 */
'revenge (noun)':
``,
/* 1731 */
'mode (noun)':
``,
/* 1732 */
'alert (adjective)':
``,
/* 1733 */
'viable (adjective)':
``,
/* 1734 */
'respectively (adverb)':
``,
/* 1735 */
'integrity (noun)':
``,
/* 1736 */
'elegant (adjective)':
``,
/* 1737 */
'ethic (noun)':
``,
/* 1738 */
'accommodate (verb)':
``,
/* 1739 */
'sue (verb)':
``,
/* 1740 */
'alert (verb)':
``,
/* 1741 */
'refusal (noun)':
``,
/* 1742 */
'shore (noun)':
``,
/* 1743 */
'harmony (noun)':
``,
/* 1744 */
'breed (noun)':
``,
/* 1745 */
'coup (noun)':
``,
/* 1746 */
'intact (adjective)':
``,
/* 1747 */
'analyst (noun)':
``,
/* 1748 */
'mining (noun)':
``,
/* 1749 */
'scenario (noun)':
``,
/* 1750 */
'grin (noun)':
``,
/* 1751 */
'cave (noun)':
``,
/* 1752 */
'entertaining (adjective)':
``,
/* 1753 */
'underlying (adjective)':
``,
/* 1754 */
'undoubtedly (adverb)':
``,
/* 1755 */
'apparatus (noun)':
``,
/* 1756 */
'rotation (noun)':
``,
/* 1757 */
'revolutionary (adjective)':
``,
/* 1758 */
'icon (noun)':
``,
/* 1759 */
'insertion (noun)':
``,
/* 1760 */
'sibling (noun)':
``,
/* 1761 */
'delicate (adjective)':
``,
/* 1762 */
'innovative (adjective)':
``,
/* 1763 */
'empire (noun)':
``,
/* 1764 */
'probability (noun)':
``,
/* 1765 */
'systematic (adjective)':
``,
/* 1766 */
'darkness (noun)':
``,
/* 1767 */
'attribute (verb)':
``,
/* 1768 */
'spine (noun)':
``,
/* 1769 */
'copper (noun)':
``,
/* 1770 */
'realm (noun)':
``,
/* 1771 */
'concede (verb)':
``,
/* 1772 */
'programming (noun)':
``,
/* 1773 */
'simulation (noun)':
``,
/* 1774 */
'license (verb)':
``,
/* 1775 */
'bug (noun)':
``,
/* 1776 */
'inability (noun)':
``,
/* 1777 */
'bulk (noun)':
``,
/* 1778 */
'orchestra (noun)':
``,
/* 1779 */
'audit (noun)':
``,
/* 1780 */
'reasoning (noun)':
``,
/* 1781 */
'fleet (noun)':
``,
/* 1782 */
'triumph (noun)':
``,
/* 1783 */
'trailer (noun)':
``,
/* 1784 */
'reside (verb)':
``,
/* 1785 */
'prejudice (noun)':
``,
/* 1786 */
'cop (noun)':
``,
/* 1787 */
'disclose (verb)':
``,
/* 1788 */
'nearby (adjective)':
``,
/* 1789 */
'articulate (verb)':
``,
/* 1790 */
'theft (noun)':
``,
/* 1791 */
'appealing (adjective)':
``,
/* 1792 */
'large-scale (adjective)':
``,
/* 1793 */
'racist (adjective)':
``,
/* 1794 */
'equivalent (noun)':
``,
/* 1795 */
'compel (verb)':
``,
/* 1796 */
'terribly (adverb)':
``,
/* 1797 */
'homeland (noun)':
``,
/* 1798 */
'parallel (noun)':
``,
/* 1799 */
'invade (verb)':
``,
/* 1800 */
'settler (noun)':
``,
/* 1801 */
'scope (noun)':
``,
/* 1802 */
'reliability (noun)':
``,
/* 1803 */
'shed (verb)':
``,
/* 1804 */
'joint (adjective)':
``,
/* 1805 */
'survival (noun)':
``,
/* 1806 */
'spell (noun)':
``,
/* 1807 */
'moreover (adverb)':
``,
/* 1808 */
'infect (verb)':
``,
/* 1809 */
'empower (verb)':
``,
/* 1810 */
'newly (adverb)':
``,
/* 1811 */
'sentiment (noun)':
``,
/* 1812 */
'explosive (adjective)':
``,
/* 1813 */
'verbal (adjective)':
``,
/* 1814 */
'lad (noun)':
``,
/* 1815 */
'humanitarian (adjective)':
``,
/* 1816 */
'deadline (noun)':
``,
/* 1817 */
'magnificent (adjective)':
``,
/* 1818 */
'workshop (noun)':
``,
/* 1819 */
'fossil (noun)':
``,
/* 1820 */
'descend (verb)':
``,
/* 1821 */
'protein (noun)':
``,
/* 1822 */
'anchor (noun)':
``,
/* 1823 */
'loyalty (noun)':
``,
/* 1824 */
'logo (noun)':
``,
/* 1825 */
'warrior (noun)':
``,
/* 1826 */
'notable (adjective)':
``,
/* 1827 */
'restrict (verb)':
``,
/* 1828 */
'ash (noun)':
``,
/* 1829 */
'grief (noun)':
``,
/* 1830 */
'designate (verb)':
``,
/* 1831 */
'petition (noun)':
``,
/* 1832 */
'refugee (noun)':
``,
/* 1833 */
'pause (verb)':
``,
/* 1834 */
'reverse (verb)':
``,
/* 1835 */
'humanity (noun)':
``,
/* 1836 */
'transparency (noun)':
``,
/* 1837 */
'strip (verb)':
``,
/* 1838 */
'openly (adverb)':
``,
/* 1839 */
'adequately (adverb)':
``,
/* 1840 */
'rose (noun)':
``,
/* 1841 */
'lesbian (adjective)':
``,
/* 1842 */
'await (verb)':
``,
/* 1843 */
'affection (noun)':
``,
/* 1844 */
'terrorism (noun)':
``,
/* 1845 */
'tide (noun)':
``,
/* 1846 */
'tag (verb)':
``,
/* 1847 */
'assign (verb)':
``,
/* 1848 */
'aspiration (noun)':
``,
/* 1849 */
'reinforce (verb)':
``,
/* 1850 */
'pump (verb)':
``,
/* 1851 */
'transit (noun)':
``,
/* 1852 */
'passionate (adjective)':
``,
/* 1853 */
'dispose (verb)':
``,
/* 1854 */
'manufacturing (noun)':
``,
/* 1855 */
'rebellion (noun)':
``,
/* 1856 */
'bishop (noun)':
``,
/* 1857 */
'boom (noun)':
``,
/* 1858 */
'linear (adjective)':
``,
/* 1859 */
'weaken (verb)':
``,
/* 1860 */
'shrug (verb)':
``,
/* 1861 */
'discretion (noun)':
``,
/* 1862 */
'competent (adjective)':
``,
/* 1863 */
'crack (verb)':
``,
/* 1864 */
'indication (noun)':
``,
/* 1865 */
'treasure (noun)':
``,
/* 1866 */
'instant (adjective)':
``,
/* 1867 */
'greenhouse (noun)':
``,
/* 1868 */
'tribal (adjective)':
``,
/* 1869 */
'dependence (noun)':
``,
/* 1870 */
'cultivate (verb)':
``,
/* 1871 */
'buck (noun)':
``,
/* 1872 */
'bombing (noun)':
``,
/* 1873 */
'capability (noun)':
``,
/* 1874 */
'skull (noun)':
``,
/* 1875 */
'exert (verb)':
``,
/* 1876 */
'landlord (noun)':
``,
/* 1877 */
'precision (noun)':
``,
/* 1878 */
'assault (noun)':
``,
/* 1879 */
'compulsory (adjective)':
``,
/* 1880 */
'leap (noun)':
``,
/* 1881 */
'toss (verb)':
``,
/* 1882 */
'casualty (noun)':
``,
/* 1883 */
'revive (verb)':
``,
/* 1884 */
'spectator (noun)':
``,
/* 1885 */
'arrow (noun)':
``,
/* 1886 */
'enjoyable (adjective)':
``,
/* 1887 */
'explosive (noun)':
``,
/* 1888 */
'bizarre (adjective)':
``,
/* 1889 */
'thoughtful (adjective)':
``,
/* 1890 */
'unacceptable (adjective)':
``,
/* 1891 */
'corrupt (adjective)':
``,
/* 1892 */
'legend (noun)':
``,
/* 1893 */
'strip (noun)':
``,
/* 1894 */
'render (verb)':
``,
/* 1895 */
'kingdom (noun)':
``,
/* 1896 */
'acceptance (noun)':
``,
/* 1897 */
'racial (adjective)':
``,
/* 1898 */
'scare (noun)':
``,
/* 1899 */
'readily (adverb)':
``,
/* 1900 */
'bow (noun)':
``,
/* 1901 */
'recipient (noun)':
``,
/* 1902 */
'obesity (noun)':
``,
/* 1903 */
'mechanic (noun)':
``,
/* 1904 */
'tap (noun)':
``,
/* 1905 */
'bound (adjective)':
``,
/* 1906 */
'chop (verb)':
``,
/* 1907 */
'offspring (noun)':
``,
/* 1908 */
'whip (verb)':
``,
/* 1909 */
'prevalence (noun)':
``,
/* 1910 */
'implement (verb)':
``,
/* 1911 */
'reasonably (adverb)':
``,
/* 1912 */
'alliance (noun)':
``,
/* 1913 */
'overwhelm (verb)':
``,
/* 1914 */
'carbon (noun)':
``,
/* 1915 */
'diversity (noun)':
``,
/* 1916 */
'spam (noun)':
``,
/* 1917 */
'clerk (noun)':
``,
/* 1918 */
'generic (adjective)':
``,
/* 1919 */
'long-standing (adjective)':
``,
/* 1920 */
'spokesperson (noun)':
``,
/* 1921 */
'consistently (adverb)':
``,
/* 1922 */
'dealer (noun)':
``,
/* 1923 */
'carve (verb)':
``,
/* 1924 */
'bleed (verb)':
``,
/* 1925 */
'legendary (adjective)':
``,
/* 1926 */
'substitution (noun)':
``,
/* 1927 */
'economist (noun)':
``,
/* 1928 */
'honesty (noun)':
``,
/* 1929 */
'interim (adjective)':
``,
/* 1930 */
'reproduce (verb)':
``,
/* 1931 */
'hostility (noun)':
``,
/* 1932 */
'crack (noun)':
``,
/* 1933 */
'dispute (verb)':
``,
/* 1934 */
'substitute (noun)':
``,
/* 1935 */
'flexibility (noun)':
``,
/* 1936 */
'vein (noun)':
``,
/* 1937 */
'stimulus (noun)':
``,
/* 1938 */
'resolution (noun)':
``,
/* 1939 */
'disclosure (noun)':
``,
/* 1940 */
'asylum (noun)':
``,
/* 1941 */
'tragedy (noun)':
``,
/* 1942 */
'compromise (verb)':
``,
/* 1943 */
'hidden (adjective)':
``,
/* 1944 */
'compute (verb)':
``,
/* 1945 */
'patience (noun)':
``,
/* 1946 */
'mature (adjective)':
``,
/* 1947 */
'firefighter (noun)':
``,
/* 1948 */
'equip (verb)':
``,
/* 1949 */
'infrastructure (noun)':
``,
/* 1950 */
'prosecute (verb)':
``,
/* 1951 */
'permanently (adverb)':
``,
/* 1952 */
'index (noun)':
``,
/* 1953 */
'courtesy (noun)':
``,
/* 1954 */
'deposit (noun)':
``,
/* 1955 */
'non-profit (adjective)':
``,
/* 1956 */
'craft (noun)':
``,
/* 1957 */
'well-being (noun)':
``,
/* 1958 */
'therapist (noun)':
``,
/* 1959 */
'preference (noun)':
``,
/* 1960 */
'severely (adverb)':
``,
/* 1961 */
'blend (verb)':
``,
/* 1962 */
'sheer (adjective)':
``,
/* 1963 */
'teens (noun)':
``,
/* 1964 */
'liberal (noun)':
``,
/* 1965 */
'sceptical (adjective)':
``,
/* 1966 */
'melody (noun)':
``,
/* 1967 */
'desperately (adverb)':
``,
/* 1968 */
'discharge (verb)':
``,
/* 1969 */
'bail (noun)':
``,
/* 1970 */
'widen (verb)':
``,
/* 1971 */
'manifest (verb)':
``,
/* 1972 */
'remedy (noun)':
``,
/* 1973 */
'canal (noun)':
``,
/* 1974 */
'portfolio (noun)':
``,
/* 1975 */
'prevention (noun)':
``,
/* 1976 */
'amendment (noun)':
``,
/* 1977 */
'high-profile (adjective)':
``,
/* 1978 */
'undertake (verb)':
``,
/* 1979 */
'modification (noun)':
``,
/* 1980 */
'namely (adverb)':
``,
/* 1981 */
'echo (verb)':
``,
/* 1982 */
'inappropriate (adjective)':
``,
/* 1983 */
'advocate (verb)':
``,
/* 1984 */
'dump (verb)':
``,
/* 1985 */
'compassion (noun)':
``,
/* 1986 */
'prevail (verb)':
``,
/* 1987 */
'hint (verb)':
``,
/* 1988 */
'globalization (noun)':
``,
/* 1989 */
'varied (adjective)':
``,
/* 1990 */
'interpretation (noun)':
``,
/* 1991 */
'citizenship (noun)':
``,
/* 1992 */
'coordinator (noun)':
``,
/* 1993 */
'administrator (noun)':
``,
/* 1994 */
'ecological (adjective)':
``,
/* 1995 */
'pastor (noun)':
``,
/* 1996 */
'compile (verb)':
``,
/* 1997 */
'commander (noun)':
``,
/* 1998 */
'distress (verb)':
``,
/* 1999 */
'strategic (adjective)':
``,
/* 2000 */
'medal (noun)':
``,
/* 2001 */
'notify (verb)':
``,
/* 2002 */
'postpone (verb)':
``,
/* 2003 */
'nest (noun)':
``,
/* 2004 */
'threshold (noun)':
``,
/* 2005 */
'physician (noun)':
``,
/* 2006 */
'tenure (noun)':
``,
/* 2007 */
'fundamentally (adverb)':
``,
/* 2008 */
'genocide (noun)':
``,
/* 2009 */
'trio (noun)':
``,
/* 2010 */
'immense (adjective)':
``,
/* 2011 */
'stir (verb)':
``,
/* 2012 */
'tackle (verb)':
``,
/* 2013 */
'atrocity (noun)':
``,
/* 2014 */
'robust (adjective)':
``,
/* 2015 */
'parish (noun)':
``,
/* 2016 */
'cling (verb)':
``,
/* 2017 */
'steer (verb)':
``,
/* 2018 */
'pirate (noun)':
``,
/* 2019 */
'disrupt (verb)':
``,
/* 2020 */
'arena (noun)':
``,
/* 2021 */
'additionally (adverb)':
``,
/* 2022 */
'integrate (verb)':
``,
/* 2023 */
'complexity (noun)':
``,
/* 2024 */
'stability (noun)':
``,
/* 2025 */
'cluster (noun)':
``,
/* 2026 */
'merge (verb)':
``,
/* 2027 */
'mask (noun)':
``,
/* 2028 */
'feminist (adjective)':
``,
/* 2029 */
'breed (verb)':
``,
/* 2030 */
'awareness (noun)':
``,
/* 2031 */
'terminate (verb)':
``,
/* 2032 */
'exit (verb)':
``,
/* 2033 */
'bat (noun)':
``,
/* 2034 */
'misleading (adjective)':
``,
/* 2035 */
'evolve (verb)':
``,
/* 2036 */
'span (noun)':
``,
/* 2037 */
'automatic (adjective)':
``,
/* 2038 */
'acquisition (noun)':
``,
/* 2039 */
'registration (noun)':
``,
/* 2040 */
'optimistic (adjective)':
``,
/* 2041 */
'assure (verb)':
``,
/* 2042 */
'humble (adjective)':
``,
/* 2043 */
'spy (verb)':
``,
/* 2044 */
'martial (adjective)':
``,
/* 2045 */
'pioneer (noun)':
``,
/* 2046 */
'creep (verb)':
``,
/* 2047 */
'overseas (adjective)':
``,
/* 2048 */
'tuition (noun)':
``,
/* 2049 */
'fluid (noun)':
``,
/* 2050 */
'radical (adjective)':
``,
/* 2051 */
'balloon (noun)':
``,
/* 2052 */
'emission (noun)':
``,
/* 2053 */
'administrative (adjective)':
``,
/* 2054 */
'penalty (noun)':
``,
/* 2055 */
'rape (noun)':
``,
/* 2056 */
'assumption (noun)':
``,
/* 2057 */
'rumour (noun)':
``,
/* 2058 */
'observer (noun)':
``,
/* 2059 */
'tissue (noun)':
``,
/* 2060 */
'ancestor (noun)':
``,
/* 2061 */
'nationwide (adjective)':
``,
/* 2062 */
'liberal (adjective)':
``,
/* 2063 */
'query (noun)':
``,
/* 2064 */
'dependent (adjective)':
``,
/* 2065 */
'dedication (noun)':
``,
/* 2066 */
'copyright (noun)':
``,
/* 2067 */
'availability (noun)':
``,
/* 2068 */
'oxygen (noun)':
``,
/* 2069 */
'stunning (adjective)':
``,
/* 2070 */
'shoot (noun)':
``,
/* 2071 */
'broadcaster (noun)':
``,
/* 2072 */
'packet (noun)':
``,
/* 2073 */
'formulate (verb)':
``,
/* 2074 */
'random (adjective)':
``,
/* 2075 */
'dilemma (noun)':
``,
/* 2076 */
'coverage (noun)':
``,
/* 2077 */
'involvement (noun)':
``,
/* 2078 */
'gig (noun)':
``,
/* 2079 */
'civic (adjective)':
``,
/* 2080 */
'congressional (adjective)':
``,
/* 2081 */
'fine (noun)':
``,
/* 2082 */
'optical (adjective)':
``,
/* 2083 */
'accelerate (verb)':
``,
/* 2084 */
'essentially (adverb)':
``,
/* 2085 */
'solidarity (noun)':
``,
/* 2086 */
'philosopher (noun)':
``,
/* 2087 */
'spare (verb)':
``,
/* 2088 */
'manufacture (verb)':
``,
/* 2089 */
'spectacular (adjective)':
``,
/* 2090 */
'prescription (noun)':
``,
/* 2091 */
'flourish (verb)':
``,
/* 2092 */
'consumption (noun)':
``,
/* 2093 */
'interference (noun)':
``,
/* 2094 */
'judicial (adjective)':
``,
/* 2095 */
'sack (verb)':
``,
/* 2096 */
'frankly (adverb)':
``,
/* 2097 */
'besides (preposition)':
``,
/* 2098 */
'trillion (number)':
``,
/* 2099 */
'indigenous (adjective)':
``,
/* 2100 */
'punch (verb)':
``,
/* 2101 */
'fever (noun)':
``,
/* 2102 */
'rival (adjective)':
``,
/* 2103 */
'flesh (noun)':
``,
/* 2104 */
'magnitude (noun)':
``,
/* 2105 */
'aggression (noun)':
``,
/* 2106 */
'pride (noun)':
``,
/* 2107 */
'elaborate (adjective)':
``,
/* 2108 */
'agricultural (adjective)':
``,
/* 2109 */
'vacuum (noun)':
``,
/* 2110 */
'placement (noun)':
``,
/* 2111 */
'evolution (noun)':
``,
/* 2112 */
'intensive (adjective)':
``,
/* 2113 */
'eliminate (verb)':
``,
/* 2114 */
'chaos (noun)':
``,
/* 2115 */
'yell (verb)':
``,
/* 2116 */
'colony (noun)':
``,
/* 2117 */
'invisible (adjective)':
``,
/* 2118 */
'capitalism (noun)':
``,
/* 2119 */
'liberation (noun)':
``,
/* 2120 */
'novel (adjective)':
``,
/* 2121 */
'cooperate (verb)':
``,
/* 2122 */
'pity (noun)':
``,
/* 2123 */
'input (noun)':
``,
/* 2124 */
'vanish (verb)':
``,
/* 2125 */
'probable (adjective)':
``,
/* 2126 */
'temple (noun)':
``,
/* 2127 */
'contradiction (noun)':
``,
/* 2128 */
'alike (adjective)':
``,
/* 2129 */
'mechanism (noun)':
``,
/* 2130 */
'damaging (adjective)':
``,
/* 2131 */
'fibre (noun)':
``,
/* 2132 */
'terrain (noun)':
``,
/* 2133 */
'yield (noun)':
``,
/* 2134 */
'attendance (noun)':
``,
/* 2135 */
'privatization (noun)':
``,
/* 2136 */
'turnover (noun)':
``,
/* 2137 */
'conception (noun)':
``,
/* 2138 */
'confirmation (noun)':
``,
/* 2139 */
'instrumental (adjective)':
``,
/* 2140 */
'supplement (noun)':
``,
/* 2141 */
'backdrop (noun)':
``,
/* 2142 */
'militia (noun)':
``,
/* 2143 */
'eager (adjective)':
``,
/* 2144 */
'ethical (adjective)':
``,
/* 2145 */
'shelter (noun)':
``,
/* 2146 */
'fascinating (adjective)':
``,
/* 2147 */
'mysterious (adjective)':
``,
/* 2148 */
'prospect (noun)':
``,
/* 2149 */
'campaign (noun)':
``,
/* 2150 */
'landscape (noun)':
``,

}

// console.log(Object.keys(data)[0]);
//Expected Output: encompass (verb)
