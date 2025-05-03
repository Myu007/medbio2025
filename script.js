const questions = [
  {
    question: 'Which type of microscope is especially useful for viewing thick structures? ',
    answers: [
      {text: ' a transmission electron microscope', correct: true},
      {text: 'a scanning electron microscopes', correct: false},
      {text: 'a phase-contrast microscope', correct: false},
      {text: 'a confocal scanning laser microscope', correct: false},
      {text: 'an atomic force microscope', correct: false},
    ],
  },
  {
    question: 'What is the correct name for the microscope lens located in the eyepiece ?',
    answers: [
      {text: 'ocular', correct: true},
      {text: ' binocular', correct: false},
      {text: 'objective', correct: false},
      {text: 'condenser', correct: false},
      {text: ' base', correct: false},
    ],
  },
  {
    question: 'Which of the following is best suited to get surface view of an object? ',
    answers: [
      {text: 'Scanning electron microscope (SEM);', correct: true},
      {text: 'Transmission electron microscope (TEM);', correct: false},
      {text: 'Compound microscope', correct: false},
      {text: 'Phase contrast microscope', correct: false},
      {text: 'SEM and TEM.', correct: false},
    ],
  },
  {
    question: 'How is called the method that consists of collection of data through observation and experimentation, formulation and testing of hypothesis: ',
    answers: [
      {text: '    Scientific 	', correct: true},
      {text: ' Empirical ', correct: false},
      {text: 'Scientific evidences & Empirical ', correct: false},
      {text: 'Facts', correct: false},
      {text: 'Scientific evidences ', correct: false},
    ],
  },
  {
    question: 'Which microscope has the highest magnification power?',
    answers: [
      {text: 'electron microscope', correct: true},
      {text: 'high power microscope', correct: false},
      {text: 'compound microscope', correct: false},
      {text: 'light microscope', correct: false},
      {text: 'optical microscope', correct: false},
    ],
  },
  {
    question: 'Process of what component distinguish prokaryotes from eukaryotes?',
    answers: [
      {text: 'incipient nucleus ', correct: true},
      {text: ' small vacuoles ', correct: false},
      {text: ' cell wall', correct: false},
      {text: 'cell membrane', correct: false},
      {text: ' smaller ribosomes', correct: false},
    ],
  },
  {
    question: 'What will show red blood cells which are placed in 0.5% sodium chloride?',
    answers: [
      {text: 'Bursting', correct: true},
      {text: 'Crenation', correct: false},
      {text: 'Plasmolysis', correct: false},
      {text: 'Turgidity', correct: false},
      {text: 'Shrinking', correct: false},
    ],
  },
  {
    question: 'In a prokaryotic cell, the DNA is …',
    answers: [
      {text: 'naked and free-floating', correct: true},
      {text: 'contained in the nucleus', correct: false},
      {text: 'wrapped around histone proteins', correct: false},
      {text: ' have a complex nucleus', correct: false},
      {text: ' lack membrane-bound compartments', correct: false},
    ],
  },
  {
    question: 'Which of the following checkpoint is considered a restriction point?',
    answers: [
      {text: ' G1 checkpoint', correct: true},
      {text: 'M checkpoint', correct: false},
      {text: 'None of the above', correct: false},
      {text: 'G2 checkpoint', correct: false},
      {text: 'S checkpoint', correct: false},
    ],
  },
  {
    question: 'During which of the following stages of mitosis the individual chromosomes become distinct through the light microscope?',
    answers: [
      {text: 'Prophase', correct: true},
      {text: 'Interphase', correct: false},
      {text: ' Metaphase ', correct: false},
      {text: 'Telophase', correct: false},
      {text: 'Anaphase', correct: false},
    ],
  },
  {
    question: ' Which of the following statements is wrong? ',
    answers: [
      {text: 'chromatin uncoils to form chromosomes', correct: true},
      {text: 'chromatin is found within the nucleus', correct: false},
      {text: 'chromatin is made up of the DNA double helix and associated proteins', correct: false},
      {text: 'chromosomes can be seen just as cell division is about to occur', correct: false},
      {text: 'each species generally has a characteristic number of chromosomes', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is true about Mendel?',
    answers: [
      {text: 'His ideas about genetics apply equally to plants and animals.', correct: true},
      {text: ' His discoveries concerning genetic inheritance were generally accepted by the scientific community when he published them during the mid-19th century', correct: false},
      {text: 'He believed that genetic traits of parents will usually blend in their children.', correct: false},
      {text: ' Mendel initially selected pea plants with same character', correct: false},
      {text: ' His experiments have a small sampling size.', correct: false},
    ],
  },
  {
    question: 'Test cross determines',
    answers: [
      {text: ' the genotype of F2 plant', correct: true},
      {text: ' whether two traits are linked or not', correct: false},
      {text: ' the phenotype of F2 plant', correct: false},
      {text: ' whether the two species will breed successfully or not', correct: false},
      {text: ' number of alleles in a gene', correct: false},
    ],
  },
  {
    question: 'The type of inheritance shown when a red-flowering plant is crossed with a white-flowering plant and only pink-flowering plants are produced is _____.',
    answers: [
      {text: 'incomplete dominance', correct: true},
      {text: 'interbreeding', correct: false},
      {text: ' dominance', correct: false},
      {text: 'polygenic inheritance', correct: false},
      {text: 'codominance', correct: false},
    ],
  },
  {
    question: 'What is a gene called?',
    answers: [
      {text: 'A Section of DNA that codes for a protein or RNA molecule.', correct: true},
      {text: ' A piece of clothing that is placed upon the bipedal legs of human.', correct: false},
      {text: ' A Chromosome Carrier', correct: false},
      {text: ' An Exon ', correct: false},
      {text: 'A Regulatory Sequence', correct: false},
    ],
  },
  {
    question: 'Two men who are identical twins marry two women who are also identical twins. Each couple has a daughter. The daughters are more genetically similar than is usual for first cousins.Which statement describes the degree of genetic similarity between the daughters?',
    answers: [
      {text: '  They are genetically different from each other due to independent assortment in meiosis.', correct: true},
      {text: 'They are genetically different from each other due to random mutation.', correct: false},
      {text: 'They are genetically identical because random mutation is rare.', correct: false},
      {text: 'They are genetically identical because they share the same parental gene pool', correct: false},
      {text: ' They are not genetical, because got different spontaneous  mutations during gametogenesis  ', correct: false},
    ],
  },
  {
    question: 'A classical example of codominance is :',
    answers: [
      {text: ' Blood Type AB ', correct: true},
      {text: ' Blood Type O ', correct: false},
      {text: 'Blood Type A ', correct: false},
      {text: 'Blood Type B ', correct: false},
      {text: ' Blood type O and A', correct: false},
    ],
  },
  {
    question: 'A recessive allele t is responsible for a condition called phenylketonouria. A man who has this disease marries a woman who doesn’t have this disease. One of their four children has the disorder. What are possible genotypes of the man and woman?',
    answers: [
      {text: 'the father is tt, mother is Tt', correct: true},
      {text: 'the father is Tt, mother is TT                                                  ', correct: false},
      {text: 'the father is tt, the mother is TT                                      ', correct: false},
      {text: 'both parents are tt', correct: false},
      {text: 'both parents are TT ', correct: false},
    ],
  },
  {
    question: 'What is the phenotypic ratio in case of dominant epistasis?',
    answers: [
      {text: '12:03:01', correct: true},
      {text: '9:3:4:0', correct: false},
      {text: '12:2:2:0', correct: false},
      {text: '9:4:3:1', correct: false},
      {text: '9:7:0:0', correct: false},
    ],
  },
  {
    question: 'What mode of inheritance involves more than two forms of gene giving rise to a repertoire of phenotypes?',
    answers: [
      {text: 'Multiple allelism', correct: true},
      {text: 'Complete dominance', correct: false},
      {text: 'Incomplete dominance', correct: false},
      {text: 'Codominance', correct: false},
      {text: 'Incomplete &complete dominance', correct: false},
    ],
  },
  {
    question: 'How is pleiotropy different from polygenic inheritance?',
    answers: [
      {text: 'A single gene can exhibit multiple expressions', correct: true},
      {text: 'A single gene exhibits only a single expression', correct: false},
      {text: 'Multiple genes control a single character', correct: false},
      {text: 'Two genes exhibit a single character', correct: false},
      {text: 'The genes can not control characters ', correct: false},
    ],
  },
  {
    question: 'Which of the following is a chromosomal abnormality that involves an extra copy of chromosome 21? ',
    answers: [
      {text: 'Down syndrome ', correct: true},
      {text: 'Klinefelter syndrome', correct: false},
      {text: 'Turner syndrome ', correct: false},
      {text: 'Edwards syndrome', correct: false},
      {text: 'Patau syndrome ', correct: false},
    ],
  },
  {
    question: 'How many autosomal chromosomes do you normally inherit from a single parent?',
    answers: [
      {text: '22', correct: true},
      {text: '1', correct: false},
      {text: '45', correct: false},
      {text: '23', correct: false},
      {text: '46', correct: false},
    ],
  },
  {
    question: 'A human genetic defect that is caused by nondisjunction of the sex chromosome is :',
    answers: [
      {text: '  Turner syndrome', correct: true},
      {text: 'Sickle cell anemia ', correct: false},
      {text: 'Color blindness', correct: false},
      {text: 'Down syndrome ', correct: false},
      {text: 'Edward’s syndrome', correct: false},
    ],
  },
  {
    question: 'Which of the following describes the genetic pattern of Duchenne muscular dystrophy?',
    answers: [
      {text: 'X-linked recessive', correct: true},
      {text: 'X-linked dominant', correct: false},
      {text: 'Chromosomal defect', correct: false},
      {text: 'Mitochondrial DNA mutation', correct: false},
      {text: 'Autosomal dominant ', correct: false},
    ],
  },
  {
    question: 'Which one of the following is not an example of aneuploidy?',
    answers: [
      {text: 'Phenylketonuria', correct: true},
      {text: 'Turner’s syndrome', correct: false},
      {text: 'Down’s syndrome', correct: false},
      {text: 'Edwards’  syndrome ', correct: false},
      {text: 'Klinefelter’s syndrome', correct: false},
    ],
  },
  {
    question: 'By which of the following methods, a pattern of inheritance can be traced in a family?',
    answers: [
      {text: 'pedigree analysis', correct: true},
      {text: 'chromosomal analysis', correct: false},
      {text: 'nuclear analysis', correct: false},
      {text: 'cytoplasm analysis', correct: false},
      {text: 'nuclear analysis & cytoplasm analysis', correct: false},
    ],
  },
  {
    question: 'RNA contains which bases?',
    answers: [
      {text: ' adenine, guanine, cytosine, uracil', correct: true},
      {text: ' adenine, thymine, guanine, cytosine, uracil', correct: false},
      {text: 'adenine, thymine, guanine, cytosine', correct: false},
      {text: 'thymine,  histone, nucleotide, adenine.  ', correct: false},
      {text: 'thymine, guanine, cytosine, uracil', correct: false},
    ],
  },
  {
    question: 'Which one is mostly transcribed ?',
    answers: [
      {text: 'single copy of DNA  sequence', correct: true},
      {text: 'highly repetitive DNA sequence', correct: false},
      {text: 'middle repetitive DNA sequence', correct: false},
      {text: 'only RNA  sequence', correct: false},
      {text: 'middle repetitive DNA & RNA sequences', correct: false},
    ],
  },
  {
    question: 'How many percentage of Cytosine in the DNA, if a double stranded DNA has 20% Adenine? ',
    answers: [
      {text: '0.3', correct: true},
      {text: '0.1', correct: false},
      {text: '0.9', correct: false},
      {text: '0.4', correct: false},
      {text: '0.15', correct: false},
    ],
  },
  {
    question: 'What did Hershey and Chase use for labeling  T2 phage in their experiment?',
    answers: [
      {text: 'radioisotopes', correct: true},
      {text: 'polyscaharids', correct: false},
      {text: 'sugar', correct: false},
      {text: 'metal', correct: false},
      {text: 'nonmetal', correct: false},
    ],
  },
  {
    question: 'A child is diagnosed with a rare genetic disease. Neither parent has the disease. How might the child have inherited the disorder?',
    answers: [
      {text: 'The disorder is recessive and carried by both parents  as carriers ', correct: true},
      {text: 'The disorder is dominant and was carried by a parent.', correct: false},
      {text: 'The disorder is sex linked and inherited only from the father.', correct: false},
      {text: 'The disorder is sex linked and inherited only from the mother', correct: false},
      {text: 'The disorder could occur only as a mutation in the child  because neither parent had the disease. ', correct: false},
    ],
  },
  {
    question: 'Messenger RNA (mRNA) can be best described as:',
    answers: [
      {text: ' A Short-lived RNA molecule that carries encoded information, transcribed from DNA.', correct: true},
      {text: ' A really cool way of rewriting RNA', correct: false},
      {text: 'The Atom that carries information to an RNA template', correct: false},
      {text: 'A Molecule that has no life and is basically the news reporter of the cellular environment.', correct: false},
      {text: ' A Chromosome that is only present in prokaryotes and is involved in DNA synthesis', correct: false},
    ],
  },
  {
    question: 'Albinism is a genetic disease that results in incomplete metabolism of ?',
    answers: [
      {text: 'Tyrosine', correct: true},
      {text: 'Histidine', correct: false},
      {text: 'Cystine', correct: false},
      {text: 'Hexoaminidase A ', correct: false},
      {text: 'Alanine', correct: false},
    ],
  },
  {
    question: 'Which of the following is a modern method of studying human genetics and diagnosing hereditary diseases? ',
    answers: [
      {text: 'Cytogenetic Testing. ', correct: true},
      {text: 'X-ray ', correct: false},
      {text: 'Magnetic resonance imaging (MRI) ', correct: false},
      {text: ' Blood test ', correct: false},
      {text: ' Computerized tomography (CT) scan  ', correct: false},
    ],
  },
  {
    question: 'Which one of the following is the reason of Tay-Sachs disease ?',
    answers: [
      {text: 'deficiency of Hexoaminidase A  ', correct: true},
      {text: 'deficiency of alpha galactosidase ', correct: false},
      {text: 'deficiency of Hexoaminidase A  & B', correct: false},
      {text: 'due to deficiency of glucoserebrosidase ', correct: false},
      {text: 'due to deficiency of tyrosinase ', correct: false},
    ],
  },
  {
    question: 'Phenylketonuria (PKU)  is a genetic disorder caused by a deficiency of an enzyme that converts phenylalanine to tyrosine.  Identify the correct statements regarding \'phenylketonuria\':',
    answers: [
      {text: 'Missense mutation of the PAH gene  are frequently observed in PKU patients', correct: true},
      {text: 'PKU occurs due to mutation of HTT gene', correct: false},
      {text: 'Treated PKU can lead to intellectual disability, seizures, behavioral problems, and mental disorders.', correct: false},
      {text: 'All PKU patients do not respond to biopterin  treatment', correct: false},
      {text: 'Phenylketonuria is autosomal dominant disease ', correct: false},
    ],
  },
  {
    question: 'During the amniocentesis  test How many days are required ?',
    answers: [
      {text: '  3-4 weeks ', correct: true},
      {text: '1-2 days ', correct: false},
      {text: '  1-2 weeks', correct: false},
      {text: '7-8 weeks ', correct: false},
      {text: ' 5-6 days', correct: false},
    ],
  },
  {
    question: 'What is the primary focus of medical parasitology?',
    answers: [
      {text: 'Study of parasites that infect humans', correct: true},
      {text: 'Study of plant parasites', correct: false},
      {text: 'Study of animal behavior', correct: false},
      {text: 'Study of marine life', correct: false},
      {text: 'Study of bacteria and viruses', correct: false},
    ],
  },
  {
    question: 'What structure lacks commonly in Protista?',
    answers: [
      {text: 'Cell wall', correct: true},
      {text: 'organelles for locomotion', correct: false},
      {text: 'Cell membrane', correct: false},
      {text: 'Cytoplasm', correct: false},
      {text: 'Cell organelle', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a characteristic feature of protozoan?',
    answers: [
      {text: 'prokaryotic microorganisms', correct: true},
      {text: 'Contractile vacuole', correct: false},
      {text: 'multiply asexually and sexually', correct: false},
      {text: 'Have no cell wall', correct: false},
      {text: 'Pseudopodia', correct: false},
    ],
  },
  {
    question: 'Which of the following strategies is NOT commonly used for the control and prevention of parasitic infections?',
    answers: [
      {text: 'Antibiotic treatment', correct: true},
      {text: 'Vector control', correct: false},
      {text: 'Vaccination', correct: false},
      {text: 'Improving sanitation', correct: false},
      {text: 'Public health education', correct: false},
    ],
  },
  {
    question: 'Which of the following is a biological feature of Trichomonas vaginalis?',
    answers: [
      {text: 'It is a flagellated protozoan', correct: true},
      {text: 'It has a cyst stage', correct: false},
      {text: 'It causes disease primarily in the gastrointestinal tract', correct: false},
      {text: 'It is a spore-forming protozoan', correct: false},
      {text: 'It is an intracellular parasite', correct: false},
    ],
  },
  {
    question: 'Which organ of trophozoite of Giardia lamblia serves as an attachment organ?   ',
    answers: [
      {text: 'parabasal body', correct: true},
      {text: 'axostyle; ', correct: false},
      {text: ' nuclei; ', correct: false},
      {text: 'flagella; ', correct: false},
      {text: 'sucking disc; ', correct: false},
    ],
  },
  {
    question: 'What are the common symptoms of trichomoniasis in women?                                                                                                    ',
    answers: [
      {text: ' Itching and burning sensation in the genitals;', correct: true},
      {text: 'Sore throat and fever; ', correct: false},
      {text: 'Abdominal pain and nausea;', correct: false},
      {text: ' coughing and shortness', correct: false},
      {text: 'Rash and swollen lymph nodes; ', correct: false},
    ],
  },
  {
    question: 'Which of the following is a method for preventing Giardia lamblia infection? ',
    answers: [
      {text: 'Avoiding contaminated food and water ', correct: true},
      {text: ' Vaccination ', correct: false},
      {text: 'Antibiotic treatment ', correct: false},
      {text: 'Avoiding contaminated soil', correct: false},
      {text: ' Using insect repellent ', correct: false},
    ],
  },
  {
    question: 'Which of the following belongs to the phylum Sarcomastigophora? ',
    answers: [
      {text: 'Trypanosoma cruzi ', correct: true},
      {text: 'Entamoeba histolytica ', correct: false},
      {text: 'Plasmodium falciparum ', correct: false},
      {text: 'Balantidium coli ', correct: false},
      {text: 'Taenia solium', correct: false},
    ],
  },
  {
    question: ' What is the vector transmitting Trypanosoma brucei to humans? ',
    answers: [
      {text: ' Tsetse fly ', correct: true},
      {text: 'Sand fly ', correct: false},
      {text: 'Mosquito', correct: false},
      {text: ' Flea ', correct: false},
      {text: ' Lice', correct: false},
    ],
  },
  {
    question: 'Which type of leishmaniasis affects the skin and is characterized by ulcers such as Oriental ulcer and Pentadrian ulcer?',
    answers: [
      {text: 'Cutaneous Leishmaniasis', correct: true},
      {text: 'Mucocutaneous Leishmaniasis', correct: false},
      {text: 'Visceral Leishmaniasis', correct: false},
      {text: 'Diffuse Cutaneous Leishmaniasis', correct: false},
      {text: 'Mucosal Leishmaniasis', correct: false},
    ],
  },
  {
    question: 'Which type of leishmaniasis is also known as Black Fever and primarily affects the internal organs like the spleen, liver, and bone marrow?',
    answers: [
      {text: 'Visceral Leishmaniasis', correct: true},
      {text: 'Cutaneous Leishmaniasis', correct: false},
      {text: 'Dum-Dum Fever', correct: false},
      {text: 'Oriental Ulcer', correct: false},
      {text: 'Mucocutaneous Leishmaniasis', correct: false},
    ],
  },
  {
    question: 'Which medication is commonly used for the treatment of Chagas Disease caused by Trypanosoma cruzi?',
    answers: [
      {text: 'Nifurtimox', correct: true},
      {text: 'Chloroquine', correct: false},
      {text: 'Artemisinin-based combination therapy (ACT)', correct: false},
      {text: 'Metronidazole', correct: false},
      {text: 'Penicillin', correct: false},
    ],
  },
  {
    question: 'Which amoeba exhibits a trophozoite stage in its life cycle?',
    answers: [
      {text: '  Entamoeba histolytica', correct: true},
      {text: '  Balamuthia mandrillaris', correct: false},
      {text: '  Naegleria fowleri', correct: false},
      {text: '  Acanthamoeba spp.', correct: false},
      {text: '  Plasmodium vivax', correct: false},
    ],
  },
  {
    question: 'What is the primary mode of transmission of Acanthamoeba spp. leading to human infection?',
    answers: [
      {text: '  Contact lens contamination', correct: true},
      {text: '  Ingestion of contaminated food', correct: false},
      {text: '  Inhalation of cysts', correct: false},
      {text: '  Skin contact with contaminated soil', correct: false},
      {text: '  Blood transfusion', correct: false},
    ],
  },
  {
    question: 'What is the primary habitat of Naegleria fowleri in which it proliferates and is commonly found?',
    answers: [
      {text: '  Freshwater lakes and rivers', correct: true},
      {text: '  Soil and decaying vegetation', correct: false},
      {text: '  Ocean water', correct: false},
      {text: '  Human gastrointestinal tract', correct: false},
      {text: '  Domestic animals\' fur', correct: false},
    ],
  },
  {
    question: ' Which of the following clinical features is associated with infection by Naegleria fowleri?',
    answers: [
      {text: '    Meningitis ', correct: true},
      {text: '    Pneumonia ', correct: false},
      {text: '   Dermatitis', correct: false},
      {text: '     Hepatitis', correct: false},
      {text: '  Gastroenteritis', correct: false},
    ],
  },
  {
    question: 'What is the primary drug of choice for the treatment of Naegleria fowleri infections?',
    answers: [
      {text: '  Amphotericin B', correct: true},
      {text: '  Antifungal agents', correct: false},
      {text: '  Antimicrobial agents', correct: false},
      {text: '  Corticosteroids', correct: false},
      {text: '  Intravenous immunoglobulin (IVIG)', correct: false},
    ],
  },
  {
    question: 'Which of the following is a single-celled parasite that can cause malaria?',
    answers: [
      {text: 'Plasmodium', correct: true},
      {text: 'Taenia solium', correct: false},
      {text: 'Ascaris lumbricoides', correct: false},
      {text: 'Schistosoma', correct: false},
      {text: ' Giardia lamblia', correct: false},
    ],
  },
  {
    question: 'Which organ is primarily affected by the malaria parasite during the asexual stage of its life cycle?',
    answers: [
      {text: ' Liver', correct: true},
      {text: 'Lungs', correct: false},
      {text: 'Stomach', correct: false},
      {text: 'Heart', correct: false},
      {text: 'Kidneys', correct: false},
    ],
  },
  {
    question: 'Organisms with complex life cycles which include a mammalian host and an insect host and involves schizogony as part of the cycle belong to which phylum of Protozoa?',
    answers: [
      {text: '  Apicomplexa', correct: true},
      {text: '  Sarcomastigophora', correct: false},
      {text: '  Labyinthomorpha', correct: false},
      {text: '  Microsporodia ', correct: false},
      {text: '  Ciliophora  ', correct: false},
    ],
  },
  {
    question: 'What is the structure of Plasmodium vivax?',
    answers: [
      {text: '   Sporozoan protozoan ', correct: true},
      {text: '  Flagellated protozoan ', correct: false},
      {text: '  Ciliated protozoan', correct: false},
      {text: '  Helminth parasite', correct: false},
      {text: '  Amoeboid protozoan ', correct: false},
    ],
  },
  {
    question: 'Which medication is commonly used to prevent relapses in Plasmodium vivax infections?',
    answers: [
      {text: '  Primaquine', correct: true},
      {text: '  Chloroquine', correct: false},
      {text: '  Artemisinin-based combination therapies (ACTs)', correct: false},
      {text: '  Quinine', correct: false},
      {text: '  Penicillin', correct: false},
    ],
  },
  {
    question: 'Which biological feature is characteristic of members of Class Aconoidasida?',
    answers: [
      {text: 'They have complex life cycles with both sexual and asexual stages', correct: true},
      {text: 'They form cysts in muscle tissue', correct: false},
      {text: 'They do not require an intermediate host', correct: false},
      {text: 'They are extracellular parasites', correct: false},
      {text: 'They primarily infect the respiratory system', correct: false},
    ],
  },
  {
    question: 'Which clinical condition is most commonly associated with Toxoplasma gondii infection in immunocompromised individuals?',
    answers: [
      {text: 'Encephalitis', correct: true},
      {text: 'Pneumonia', correct: false},
      {text: 'Dermatitis', correct: false},
      {text: 'Hepatitis', correct: false},
      {text: 'Gastroenteritis', correct: false},
    ],
  },
  {
    question: 'Which population is at the highest risk for severe complications from Cryptosporidium parvum infection?',
    answers: [
      {text: 'Immunocompromised individuals', correct: true},
      {text: 'Healthy adults', correct: false},
      {text: 'Children under 5 years', correct: false},
      {text: 'Pregnant women', correct: false},
      {text: 'Elderly individuals', correct: false},
    ],
  },
  {
    question: 'Which stage of Toxoplasma gondii is infectious to humans?',
    answers: [
      {text: 'Oocyst', correct: true},
      {text: 'Trophozoite', correct: false},
      {text: 'Tachyzoite', correct: false},
      {text: 'Bradyzoite', correct: false},
      {text: 'Sporozoite', correct: false},
    ],
  },
  {
    question: 'What is the primary method of prevention for Toxoplasma gondii infection in pregnant women?',
    answers: [
      {text: 'Avoiding contact with cat litter', correct: true},
      {text: 'Using insect repellent', correct: false},
      {text: 'Drinking bottled water', correct: false},
      {text: 'Wearing masks', correct: false},
      {text: 'Avoiding dairy products', correct: false},
    ],
  },
  {
    question: 'What is the primary mode of transmission of Balantidium coli to humans?',
    answers: [
      {text: 'Ingestion of contaminated food or water', correct: true},
      {text: 'Mosquito bites', correct: false},
      {text: 'Inhalation of spores', correct: false},
      {text: 'Direct skin contact with contaminated soil', correct: false},
      {text: 'Sexual contact', correct: false},
    ],
  },
  {
    question: 'Which clinical symptom is commonly associated with Balantidium coli infection?',
    answers: [
      {text: 'Diarrhea', correct: true},
      {text: 'Rash', correct: false},
      {text: 'Visual disturbances', correct: false},
      {text: 'Joint pain', correct: false},
      {text: 'Respiratory distress', correct: false},
    ],
  },
  {
    question: 'What is an effective measure for preventing Balantidium coli infection?',
    answers: [
      {text: 'Drinking only boiled or filtered water', correct: true},
      {text: 'Using insect repellent', correct: false},
      {text: 'Getting vaccinated', correct: false},
      {text: 'Wearing protective clothing', correct: false},
      {text: 'Avoiding contact with infected animals', correct: false},
    ],
  },
  {
    question: 'Which parasitic disease is known for causing liver damage and is transmitted through contaminated water?',
    answers: [
      {text: 'Schistosomiasis', correct: true},
      {text: 'Malaria', correct: false},
      {text: 'Toxoplasmosis', correct: false},
      {text: 'Giardiasis', correct: false},
      {text: 'Leishmaniasis', correct: false},
    ],
  },
  {
    question: 'What is the primary mode of transmission for Schistosoma species?',
    answers: [
      {text: 'Direct skin contact with contaminated water', correct: true},
      {text: ' Ingestion of contaminated food', correct: false},
      {text: ' Mosquito bites', correct: false},
      {text: 'Tick bites', correct: false},
      {text: 'Inhalation of airborne spores', correct: false},
    ],
  },
  {
    question: 'What is the most common diagnostic method for identifying intestinal helminth infections?',
    answers: [
      {text: 'Stool examination', correct: true},
      {text: 'Blood smear', correct: false},
      {text: 'Urine analysis', correct: false},
      {text: 'Saliva test', correct: false},
      {text: 'Skin biopsy', correct: false},
    ],
  },
  {
    question: 'Which of the following best describes the class Cestoda (tapeworms)?',
    answers: [
      {text: 'They are segmented and lack a digestive system', correct: true},
      {text: 'They have a round body and live in freshwater', correct: false},
      {text: 'They are free-living and found in soil', correct: false},
      {text: 'They have a coiled body and possess a radula', correct: false},
      {text: 'They have an unsegmented body and complete digestive system', correct: false},
    ],
  },
  {
    question: 'Echinococcus granulosus, a parasitic representative of tapeworms, causes which disease in humans?',
    answers: [
      {text: 'Hydatid disease', correct: true},
      {text: 'Malaria', correct: false},
      {text: 'Filariasis', correct: false},
      {text: 'Schistosomiasis', correct: false},
      {text: 'Ascariasis', correct: false},
    ],
  },
  {
    question: 'Which of the following is a common clinical symptom of hydatid disease caused by Echinococcus granulosus?',
    answers: [
      {text: 'Formation of cysts in the liver and lungs', correct: true},
      {text: 'Severe headaches', correct: false},
      {text: 'Chronic cough', correct: false},
      {text: 'Skin rash', correct: false},
      {text: 'Acute diarrhea', correct: false},
    ],
  },
  {
    question: 'Which stage of Echinococcus granulosus is infective to intermediate hosts such as sheep and humans?',
    answers: [
      {text: 'Egg', correct: true},
      {text: 'Adult', correct: false},
      {text: 'Miracidium', correct: false},
      {text: 'Cercaria', correct: false},
      {text: 'Cysticercus', correct: false},
    ],
  },
  {
    question: 'What is a primary preventive measure for hydatid disease caused by Echinococcus granulosus?',
    answers: [
      {text: 'Regular deworming of dogs', correct: true},
      {text: 'Avoiding contact with freshwater bodies', correct: false},
      {text: 'Using insect repellent', correct: false},
      {text: 'Avoiding consumption of undercooked meat', correct: false},
      {text: 'Wearing protective clothing', correct: false},
    ],
  },
  {
    question: 'Which parasitic roundworm is commonly known as the heartworm and affects dogs?',
    answers: [
      {text: 'Dirofilaria immitis', correct: true},
      {text: 'Trichinella spiralis', correct: false},
      {text: 'Enterobius vermicularis', correct: false},
      {text: 'Brugia malayi', correct: false},
      {text: 'Wuchereria bancrofti', correct: false},
    ],
  },
  {
    question: 'Which of the following statements about the life cycle of Schistosoma spp. is true?',
    answers: [
      {text: 'Larvae penetrate the skin of humans in contaminated water', correct: true},
      {text: 'Eggs are ingested through contaminated food', correct: false},
      {text: 'Intermediate host is the housefly', correct: false},
      {text: 'Adults reside in the intestines and release eggs into feces', correct: false},
      {text: 'Transmission occurs through mosquito bites', correct: false},
    ],
  },
  {
    question: 'Which parasite has a life cycle involving freshwater snails as an intermediate host and infects humans through direct skin penetration?',
    answers: [
      {text: 'Schistosoma spp.', correct: true},
      {text: 'Fasciola hepatica', correct: false},
      {text: 'Fasciolopsis buski', correct: false},
      {text: 'Paragonimus westermani', correct: false},
      {text: 'Taenia solium', correct: false},
    ],
  },
  {
    question: 'Which of the following Trematoda parasites is known to cause lung infections?',
    answers: [
      {text: 'Paragonimus westermani', correct: true},
      {text: 'Fasciola hepatica', correct: false},
      {text: 'Fasciolopsis buski', correct: false},
      {text: 'Schistosoma japonicum', correct: false},
      {text: 'Schistosoma mansoni', correct: false},
    ],
  },
  {
    question: 'What preventive measure can be taken to avoid infection by Paragonimus westermani?',
    answers: [
      {text: 'Avoid eating raw or undercooked freshwater crabs and crayfish', correct: true},
      {text: 'Avoid swimming in freshwater bodies', correct: false},
      {text: 'Wear protective clothing', correct: false},
      {text: 'Drink only boiled or bottled water', correct: false},
      {text: 'Use insect repellent', correct: false},
    ],
  },
  {
    question: 'What helminthic infection  is cause of an elephantiasis?',
    answers: [
      {text: ' Wuchereria bancrofti', correct: true},
      {text: ' Fasciola hepatica', correct: false},
      {text: ' Trichinella spiralis', correct: false},
      {text: 'Taenia solium', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'By what infection is presented lymphangitis, lymphadenitis and chyluria clinical manifestations? ',
    answers: [
      {text: 'Brugia malayi', correct: true},
      {text: ' Echinococcus granulosus', correct: false},
      {text: 'Loa loa', correct: false},
      {text: 'Dirofilaria immitis ', correct: false},
      {text: 'Mansonella ozzardi ', correct: false},
    ],
  },
  {
    question: 'Where are  primarily found the pinworms in the body?',
    answers: [
      {text: 'Wuchereria bancrofti', correct: true},
      {text: 'Under the skin', correct: false},
      {text: ' Lungs', correct: false},
      {text: ' Intestine', correct: false},
      {text: ' Colon/rectum', correct: false},
    ],
  },
  {
    question: 'During observing the patients with ascariasis what can cause the larval stage of Ascaris lumbricoides?',
    answers: [
      {text: 'Intestinal obstruction', correct: true},
      {text: 'Intussusception', correct: false},
      {text: 'Malnutrition', correct: false},
      {text: 'Pneumonitis', correct: false},
      {text: 'Coughing', correct: false},
    ],
  },
  {
    question: 'Which of the following diseases is NOT typically associated with tick transmission?',
    answers: [
      {text: 'Japanese encephalitis', correct: true},
      {text: 'West Nile encephalitis', correct: false},
      {text: 'Tick-borne encephalitis', correct: false},
      {text: 'Russian spring-summer encephalitis', correct: false},
      {text: 'Lyme disease', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is true regarding the epidemiologic significance of arthropods?',
    answers: [
      {text: 'Many arthropods act as vectors for disease transmission.', correct: true},
      {text: 'Arthropods are exclusively herbivorous.', correct: false},
      {text: 'Arthropods do not harbor parasites.', correct: false},
      {text: 'Arthropods do not cause allergic reactions.', correct: false},
      {text: 'Arthropods have a complex life cycle without metamorphosis.', correct: false},
    ],
  },
  {
    question: 'Which of the following diseases is primarily transmitted by ticks and can lead to encephalitis?',
    answers: [
      {text: 'West Nile encephalitis', correct: true},
      {text: 'Japanese encephalitis', correct: false},
      {text: 'Malaria', correct: false},
      {text: 'Lyme disease', correct: false},
      {text: 'Rocky Mountain spotted fever', correct: false},
    ],
  },
  {
    question: 'Which disease, transmitted by ticks, is known for causing encephalitis predominantly in Russia during the spring and summer seasons?',
    answers: [
      {text: 'Russian spring-summer encephalitis', correct: true},
      {text: 'Japanese encephalitis', correct: false},
      {text: 'Lyme disease', correct: false},
      {text: 'West Nile encephalitis', correct: false},
      {text: 'Zika virus infection', correct: false},
    ],
  },
  {
    question: 'Mosquitoes must have following necessity to complete their life cycle?',
    answers: [
      {text: 'Water', correct: true},
      {text: 'nan', correct: false},
      {text: 'Intermediate host', correct: false},
      {text: 'Vector', correct: false},
      {text: 'pupa', correct: false},
    ],
  },
  {
    question: 'What is the primary vector responsible for transmitting Dengue virus?',
    answers: [
      {text: 'Aedes mosquito', correct: true},
      {text: 'Anopheles mosquito', correct: false},
      {text: 'Culex mosquito', correct: false},
      {text: 'Tsetse fly', correct: false},
      {text: 'Phlebotomine fly', correct: false},
    ],
  },
  {
    question: 'Which symptom is characteristic of severe Dengue fever (Dengue hemorrhagic fever)?',
    answers: [
      {text: 'Bleeding tendencies', correct: true},
      {text: 'Rash', correct: false},
      {text: 'Joint pain', correct: false},
      {text: 'Severe headache', correct: false},
      {text: 'Profuse sweating', correct: false},
    ],
  },
  {
    question: 'What is incorrect about Dengue fever? ',
    answers: [
      {text: 'has an incubation period of 2-3 weeks', correct: true},
      {text: 'is spread by the vector Aedes aegypti', correct: false},
      {text: 'is more likely to cause bleeding  in patients previously infected by a Dengue virus', correct: false},
      {text: 'is caused by a flavivirus', correct: false},
      {text: 'characteristically causes severe myalgia', correct: false},
    ],
  },
  {
    question: 'Which measure is most effective for preventing Dengue fever?',
    answers: [
      {text: 'Using mosquito repellent', correct: true},
      {text: 'Indoor residual spraying with insecticides', correct: false},
      {text: 'Wearing long-sleeved clothing', correct: false},
      {text: 'Vaccination', correct: false},
      {text: 'Quarantine of infected individuals', correct: false},
    ],
  },
  {
    question: 'Which of the following is NOT a common vector for encephalitis?',
    answers: [
      {text: 'Flies', correct: true},
      {text: 'Ticks', correct: false},
      {text: 'Mosquitoes', correct: false},
      {text: 'Mites', correct: false},
      {text: 'Fleas', correct: false},
    ],
  },
  {
    question: 'In which location are bed bugs commonly found in infested environments?',
    answers: [
      {text: 'In cracks and crevices of furniture and walls', correct: true},
      {text: 'Buried in soil', correct: false},
      {text: 'Inside fruit', correct: false},
      {text: 'Underneath rocks', correct: false},
      {text: 'In tree canopies', correct: false},
    ],
  },
  {
    question: 'Which is a common symptom of bed bug bites in humans?',
    answers: [
      {text: 'Itchy welts or papules', correct: true},
      {text: 'Rash with blisters', correct: false},
      {text: 'Joint swelling', correct: false},
      {text: 'Muscle pain', correct: false},
      {text: 'Severe headache', correct: false},
    ],
  },
  {
    question: 'Which characteristic defines insects of the order Siphonaptera, such as fleas?',
    answers: [
      {text: 'They have piercing-sucking mouthparts', correct: true},
      {text: 'They are known for swarming behavior', correct: false},
      {text: 'They have chewing mouthparts', correct: false},
      {text: 'They undergo complete metamorphosis', correct: false},
      {text: 'They are primarily herbivorous', correct: false},
    ],
  },
  {
    question: 'Which measure is most effective for preventing flea infestations in pets?',
    answers: [
      {text: 'Regular grooming and inspection of pets', correct: true},
      {text: 'Indoor residual spraying with insecticides', correct: false},
      {text: 'Use of mosquito nets', correct: false},
      {text: 'Avoiding contact with wild rodents', correct: false},
      {text: 'Vaccination of pets', correct: false},
    ],
  },
  {
    question: 'Which of the following reasoning uses general principle to predict specific results? ',
    answers: [
      {text: '   Deductive', correct: true},
      {text: 'Inductive', correct: false},
      {text: 'Inductive and deductive ', correct: false},
      {text: ' Hypothetico-deductive', correct: false},
      {text: 'Inductive & Hypothetico-deductive', correct: false},
    ],
  },
  {
    question: 'A procedure design to test the hypothesis is known as ?',
    answers: [
      {text: 'Experiment', correct: true},
      {text: 'Law', correct: false},
      {text: '   Idea', correct: false},
      {text: ' Dogma', correct: false},
      {text: 'Theory ', correct: false},
    ],
  },
  {
    question: 'What is the name of the region where double-stranded single circular DNA is found in the prokaryotic cell?',
    answers: [
      {text: 'Nucleoid', correct: true},
      {text: 'Nucleus', correct: false},
      {text: 'Protonucleus', correct: false},
      {text: 'Nucleoplasm', correct: false},
      {text: 'Cytoplasm', correct: false},
    ],
  },
  {
    question: 'When looking at a specimen on your slide, you should always start with the ____?',
    answers: [
      {text: 'low objective lens', correct: true},
      {text: 'medium objective lens', correct: false},
      {text: 'high objective lens', correct: false},
      {text: 'super extra high power lens', correct: false},
      {text: 'extra high power lens', correct: false},
    ],
  },
  {
    question: 'Which of these is a characteristic of prokaryotic cells?',
    answers: [
      {text: ' All of these', correct: true},
      {text: 'Absence of nucleus', correct: false},
      {text: 'Presence of 70S ribosomes', correct: false},
      {text: 'Lack a true membrane-bound nucleus', correct: false},
      {text: 'Absence of cell organelles', correct: false},
    ],
  },
  {
    question: 'How is called the solution which has equal amount of solute and solvent in and out of a cell? ',
    answers: [
      {text: ' isotonic', correct: true},
      {text: ' hypotonic', correct: false},
      {text: ' hypertonic', correct: false},
      {text: 'hypertonic & hypotonic', correct: false},
      {text: 'isotonic & hypertonic', correct: false},
    ],
  },
  {
    question: 'Which of the following describes an observable occurrence in nature that appears to always be true ?',
    answers: [
      {text: 'Law', correct: true},
      {text: 'Theory', correct: false},
      {text: 'Hypothesis', correct: false},
      {text: '  Idea', correct: false},
      {text: 'Experiment', correct: false},
    ],
  },
  {
    question: 'In meiosis, crossing-over occurs:',
    answers: [
      {text: 'only during prophase I and involves exchange between chromatids of homologous  chromosomes.', correct: true},
      {text: 'during prophase I and II and involves exchange of chromosome fragments between all four chromatids.', correct: false},
      {text: ' only during prophase I and involves exchange of chromosome fragments between sister chromatids.', correct: false},
      {text: 'during prophase I and II and involves exchange of chromosome fragments between sister chromatids.', correct: false},
      {text: ' during prophase II and involves exchange of chromosome fragments between sister chromatids.', correct: false},
    ],
  },
  {
    question: 'Condensation of chromosomes occurs in',
    answers: [
      {text: 'Prophase I', correct: true},
      {text: 'Prophase II', correct: false},
      {text: 'Anaphase', correct: false},
      {text: ' Metaphase ', correct: false},
      {text: 'Interphase', correct: false},
    ],
  },
  {
    question: 'Which spindle fiber will lengthen, thereby pushing the chromosomes to the middle of metaphase? ',
    answers: [
      {text: 'polar spindle fibers', correct: true},
      {text: 'centromeric spindle fibers', correct: false},
      {text: 'centrosomes (MTOC) (MTOC- Microtubule-organizing centers)', correct: false},
      {text: 'aster fibers', correct: false},
      {text: 'centriolar fibers', correct: false},
    ],
  },
  {
    question: 'Which of the following is the correct sequence of mitotic phases?',
    answers: [
      {text: 'prophase, metaphase, anaphase, telophase', correct: true},
      {text: 'anaphase, prophase, metaphase, telophase', correct: false},
      {text: 'prophase, anaphase, metaphase, telophase', correct: false},
      {text: 'prophase, metaphase, telophase, anaphase', correct: false},
      {text: 'metaphase, anaphase, telophase, prophase', correct: false},
    ],
  },
  {
    question: ' If both genotype and phenotype shows the same ratios of 1:2:1 in the F2 generation, it shows',
    answers: [
      {text: ' incomplete dominance in monohybrid cross', correct: true},
      {text: ' complete dominance in monohybrid cross', correct: false},
      {text: ' dihybrid cross', correct: false},
      {text: ' co-dominance', correct: false},
      {text: ' monohybrid cross', correct: false},
    ],
  },
  {
    question: 'A represents the dominant allele and a represents the recessive allele of a pair. If, in 1000 offspring, 500 are aa and 500 are of some other genotype, which of the following are most probably the genotypes of the parents? ',
    answers: [
      {text: ' Aa and aa ', correct: true},
      {text: 'Aa and Aa ', correct: false},
      {text: ' AA and Aa ', correct: false},
      {text: ' AA and aa', correct: false},
      {text: 'aa and aa', correct: false},
    ],
  },
  {
    question: 'What is the maximum number of alleles that monohybrid cross can consider?',
    answers: [
      {text: '2', correct: true},
      {text: '4', correct: false},
      {text: '6', correct: false},
      {text: '8', correct: false},
      {text: '10', correct: false},
    ],
  },
  {
    question: 'The monohybrid phenotypic and genotypic ratio is same in the case of __________',
    answers: [
      {text: 'Incomplete dominance', correct: true},
      {text: 'Codominance', correct: false},
      {text: 'Multiple allele', correct: false},
      {text: 'Normal dominance recessive relation', correct: false},
      {text: ' Dominant allele', correct: false},
    ],
  },
  {
    question: 'Considering a dihybrid cross, what is the probability of the progeny being heterozygous at both the alleles?',
    answers: [
      {text: ' 4/16', correct: true},
      {text: ' 3/16', correct: false},
      {text: ' 7/16', correct: false},
      {text: ' 9/16', correct: false},
      {text: ' 1/16', correct: false},
    ],
  },
  {
    question: 'In case of codominance product is  ________',
    answers: [
      {text: 'Produced from both the alleles', correct: true},
      {text: ' Produced from one allele', correct: false},
      {text: 'Incompletely produced from both alleles', correct: false},
      {text: ' None are functional', correct: false},
      {text: 'Recessive alelle', correct: false},
    ],
  },
  {
    question: ' Which of the following ratio shows complementary gene interaction?',
    answers: [
      {text: ' 9:7', correct: true},
      {text: ' 15:1', correct: false},
      {text: ' 1:2:1', correct: false},
      {text: ' 9:3:3:1', correct: false},
      {text: '03:01:00', correct: false},
    ],
  },
  {
    question: 'In crossing a homozygous recessive with a heterozygote, what is the chance of getting an offspring with the homozygous recessive phenotype?',
    answers: [
      {text: '0.5', correct: true},
      {text: '0.75', correct: false},
      {text: '1', correct: false},
      {text: '0.25', correct: false},
      {text: '0', correct: false},
    ],
  },
  {
    question: 'Which of the following is a human chromosomal syndrome caused by genomic abnormalities?',
    answers: [
      {text: ' Turner syndrome', correct: true},
      {text: ' Hemophilia', correct: false},
      {text: ' Duchenne muscular dystrophy ', correct: false},
      {text: ' Sickle cell anemia', correct: false},
      {text: ' Cystic fibrosis', correct: false},
    ],
  },
  {
    question: 'A red flowered plant (RR) is bred with a white flowered plant (rr) and the F1 generation has pink flowers (Rr). This is a example of',
    answers: [
      {text: 'Incomplete dominance', correct: true},
      {text: ' co-dominance', correct: false},
      {text: ' polyspermy', correct: false},
      {text: ' segregation', correct: false},
      {text: ' genetic mutation', correct: false},
    ],
  },
  {
    question: 'Which of the following human diseases is least likely  to be caused by aneuploidy?',
    answers: [
      {text: ' Achondroplasia', correct: true},
      {text: '  Down syndrome', correct: false},
      {text: ' Klinefelter syndrome', correct: false},
      {text: 'Patau syndrome', correct: false},
      {text: 'Turner syndrome', correct: false},
    ],
  },
  {
    question: 'Down\'s syndrome can be caused by ___',
    answers: [
      {text: ' an extra chromosome 21 ', correct: true},
      {text: ' a missing chromosome 18 ', correct: false},
      {text: ' an extra chromosome 18 ', correct: false},
      {text: ' a missing chromosome 21 ', correct: false},
      {text: 'an extra chromosome 19 ', correct: false},
    ],
  },
  {
    question: '  Which of the following trisomy karyotypes has the mildest effect on human development?',
    answers: [
      {text: ' 47,XXX', correct: true},
      {text: '47,XXY', correct: false},
      {text: '47,XX,+13', correct: false},
      {text: '47,XY,+21', correct: false},
      {text: ' 47,XY,+18', correct: false},
    ],
  },
  {
    question: '  What is the main symptom of Duchenne muscular dystrophy?',
    answers: [
      {text: 'Muscle weakness', correct: true},
      {text: ' Vision loss ', correct: false},
      {text: 'Hearing loss ', correct: false},
      {text: ' Cognitive impairment ', correct: false},
      {text: 'Skin rash ', correct: false},
    ],
  },
  {
    question: ' An X linked recessive gene would appear to __________________',
    answers: [
      {text: 'Expressed mostly in men', correct: true},
      {text: 'Skip generations', correct: false},
      {text: 'Be lethal', correct: false},
      {text: ' Gradually degrade', correct: false},
      {text: ' Be expressed in both males and females equally', correct: false},
    ],
  },
  {
    question: 'Hemophilic  man marries woman having no history of the disease in her pedigree. What is the chance that a hemophilic son is born to them?',
    answers: [
      {text: '0', correct: true},
      {text: '0.25', correct: false},
      {text: '0.5', correct: false},
      {text: '0.75', correct: false},
      {text: '0.05', correct: false},
    ],
  },
  {
    question: 'What type of bond forms between Complementary base pairs?',
    answers: [
      {text: 'Hydrogen', correct: true},
      {text: ' Covalent', correct: false},
      {text: ' Ionic', correct: false},
      {text: ' Interkinetic', correct: false},
      {text: 'Philial', correct: false},
    ],
  },
  {
    question: 'To understand the structure of RNA polymerase, researchers employed what technique to view this enzyme?',
    answers: [
      {text: 'X-ray crystallography', correct: true},
      {text: ' Gas Chromatography', correct: false},
      {text: 'Gel Electrophoresis', correct: false},
      {text: 'PCR amplification', correct: false},
      {text: 'Hardy-Weinberg equilibrium', correct: false},
    ],
  },
  {
    question: 'In analyzing the number of different bases in a DNA sample, which result would be consistent with the base-pairing rules?',
    answers: [
      {text: 'ATTC=TAAG', correct: true},
      {text: 'AG=GA', correct: false},
      {text: 'CAGT=TGAC', correct: false},
      {text: ' G = T', correct: false},
      {text: ' A = G', correct: false},
    ],
  },
  {
    question: 'Antiparallel strands of a DNA molecule means that:',
    answers: [
      {text: 'the phosphate groups at the start  of two DNA strands are in opposite position (pole)', correct: true},
      {text: 'one strand turns clockwise', correct: false},
      {text: ' one strand turns anti-clockwise', correct: false},
      {text: 'the phosphate groups of two DNA strands, at their ends, share the same position', correct: false},
      {text: 'both strands turn in one direction', correct: false},
    ],
  },
  {
    question: 'Damage of structural gene – area of DNA molecule took place. But replacement of amino acid did not happen because afterwards damage was liquidated. What process liquidated mutation',
    answers: [
      {text: 'reparation', correct: true},
      {text: 'transcription', correct: false},
      {text: 'translation', correct: false},
      {text: 'replication', correct: false},
      {text: 'opposite transcription', correct: false},
    ],
  },
  {
    question: 'In DNA molecular there is 30% deoxyadenosinmonophosphate. How many deoxyguaninmonophosphate are there in this fragment?',
    answers: [
      {text: '0.2', correct: true},
      {text: '0.3', correct: false},
      {text: '0.4', correct: false},
      {text: '0.5', correct: false},
      {text: '0.6', correct: false},
    ],
  },
  {
    question: 'Male to male transmission is a key feature of which pattern of inheritance?',
    answers: [
      {text: 'Y-linked recessive', correct: true},
      {text: 'X-linked dominant', correct: false},
      {text: 'X-linked recessive', correct: false},
      {text: 'Autosomal dominant', correct: false},
      {text: 'Autosomal recessive', correct: false},
    ],
  },
  {
    question: 'Which of the following is a recessive autosomal hereditary disease? ',
    answers: [
      {text: ' Albinism ', correct: true},
      {text: 'Huntington\'s disease ', correct: false},
      {text: ' Achondroplasia ', correct: false},
      {text: ' Polydactyly', correct: false},
      {text: 'Color blindness', correct: false},
    ],
  },
  {
    question: 'Cystic fibrosis (CF) is an inherited disease. How is CF passed down through families?',
    answers: [
      {text: 'Both parents are carriers of the CF gene', correct: true},
      {text: 'One grandparent is a carrier of the CF gene', correct: false},
      {text: 'One parent is a carrier of the CF gene', correct: false},
      {text: 'One grandparent &one parent are carriers of CF gene ', correct: false},
      {text: 'Parents are not carriers of CF gene ', correct: false},
    ],
  },
  {
    question: 'Which disease in treated in part by a low-phenylalanine diet? ',
    answers: [
      {text: 'Phenylketonouria       ', correct: true},
      {text: 'Tay-Sach’s desease           ', correct: false},
      {text: 'Albinism                ', correct: false},
      {text: ' Color blindness', correct: false},
      {text: 'Cystic Fibrosis ', correct: false},
    ],
  },
  {
    question: 'Which of the following is a dominant autosomal hereditary disease? ',
    answers: [
      {text: ' Polydactyly ', correct: true},
      {text: 'Albinism ', correct: false},
      {text: ' Cystic fibrosis ', correct: false},
      {text: 'Tay-Sachs disease ', correct: false},
      {text: ' Color blindness', correct: false},
    ],
  },
  {
    question: 'Which of the following best describes the concept of a host in parasitology?',
    answers: [
      {text: ' An organism that is infected with a parasite and suffers from that relationship.', correct: true},
      {text: 'An organism that is infected with a parasite and suffers from that relationship.', correct: false},
      {text: '  An organism that is capable of transmitting a parasite to other organisms.', correct: false},
      {text: ' An organism that is immune to the effects of a parasite and therefore does not suffer from infection.', correct: false},
      {text: '  An organism that is found in the environment and serves as a reservoir for parasites.', correct: false},
    ],
  },
  {
    question: 'What factor prevents the stomach from being colonized by most protozoan parasites?',
    answers: [
      {text: 'Digestive enzymes', correct: true},
      {text: 'Peristalsis ', correct: false},
      {text: 'Bile', correct: false},
      {text: 'Absorption', correct: false},
      {text: 'Deletion', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a characteristic feature of prоtozoans',
    answers: [
      {text: ' cell membrane as an outer body covering', correct: true},
      {text: ' binary fission', correct: false},
      {text: ' contractile vacuole', correct: false},
      {text: ' pseudopodia', correct: false},
      {text: 'Flagella', correct: false},
    ],
  },
  {
    question: 'Which of the following is true about a contractile vacuole?',
    answers: [
      {text: 'it maintains osmotic balance by continuous water expulsion', correct: true},
      {text: 'it creates sites of food digestion', correct: false},
      {text: 'it contains specific enzymes that perform various functions', correct: false},
      {text: 'it is responsible for 	water circulation', correct: false},
      {text: 'None of stated', correct: false},
    ],
  },
  {
    question: 'Which of the following statements true about the life cycle of Giardia lamblia?',
    answers: [
      {text: ' Giardia lamblia has a simple, direct life cycle that involves only one host species. ', correct: true},
      {text: ' Giardia lamblia has an indirect life cycle and requires a vector, such as a mosquito, for transmission. ', correct: false},
      {text: 'Giardia lamblia has a complex life cycle that involves multiple intermediate and definitive hosts.', correct: false},
      {text: 'Giardia lamblia has a direct life cycle and can only be transmitted through direct contact with an infected host.', correct: false},
      {text: ' Giardia lamblia has a free-living stage that is not dependent on a host for survival.', correct: false},
    ],
  },
  {
    question: 'Which of the following statements accurately describes the life cycle of Trichomonas vaginalis?',
    answers: [
      {text: 'Trophozoite stage, cyst stage, and sexual reproduction. ', correct: true},
      {text: ' Trophozoite stage, sporozoite stage, and asexual reproduction. ', correct: false},
      {text: ' Gametocyte stage, zygote stage, and sporozoite stage. ', correct: false},
      {text: ' Cyst stage, sporozoite stage, and sexual reproduction. ', correct: false},
      {text: ' Trophozoite stage, gametocyte stage, and asexual reproduction.', correct: false},
    ],
  },
  {
    question: 'What is the clinical manifestation of giardiasis caused by Giardia lamblia? ',
    answers: [
      {text: 'Diarrhea ', correct: true},
      {text: ' Malaria ', correct: false},
      {text: 'Liver abscess', correct: false},
      {text: ' Heart failure', correct: false},
      {text: '  Lung abscess', correct: false},
    ],
  },
  {
    question: 'Which drug is commonly used to treat infections caused by Trichomonas vaginalis?',
    answers: [
      {text: 'Metronidazole', correct: true},
      {text: 'Amoxicillin', correct: false},
      {text: 'Chloroquine', correct: false},
      {text: 'Ivermectin', correct: false},
      {text: 'Ciprofloxacin', correct: false},
    ],
  },
  {
    question: 'What is the phylum that Trypanosoma cruzi and Trypanosoma brucei belong to? ',
    answers: [
      {text: 'Sarcomastigophora ', correct: true},
      {text: ' Ciliophora ', correct: false},
      {text: ' Apicomplexa ', correct: false},
      {text: ' Myxozoa ', correct: false},
      {text: ' Microsporidia', correct: false},
    ],
  },
  {
    question: 'What is the vector  transmitting Trypanosoma cruzi to humans?  ',
    answers: [
      {text: ' Triatomine bug', correct: true},
      {text: ' Mosquito ', correct: false},
      {text: '  Tsetse fly ', correct: false},
      {text: '    Flea ', correct: false},
      {text: '  Lice', correct: false},
    ],
  },
  {
    question: '   What is the vector  transmission of Leishmania parasites?',
    answers: [
      {text: '  Sand flies ', correct: true},
      {text: ' Mosquito ', correct: false},
      {text: ' Ticks ', correct: false},
      {text: '   Fleas ', correct: false},
      {text: '   Lice', correct: false},
    ],
  },
  {
    question: 'What is a primary distinguishing feature of Trypanosoma brucei compared to Trypanosoma cruzi?',
    answers: [
      {text: 'Trypanosoma brucei is transmitted by the tsetse fly, while Trypanosoma cruzi is transmitted by triatomine bugs', correct: true},
      {text: 'Trypanosoma brucei infects humans through the fecal matter of a kissing bug', correct: false},
      {text: 'Trypanosoma brucei has a kinetoplast absent in Trypanosoma cruzi', correct: false},
      {text: 'Trypanosoma brucei completes its entire life cycle in humans', correct: false},
      {text: 'Both have identical pathogenesis in humans', correct: false},
    ],
  },
  {
    question: 'Which of the following drugs is primarily used to treat acute Chagas disease caused by Trypanosoma cruzi?',
    answers: [
      {text: 'Benznidazole', correct: true},
      {text: 'Quinine', correct: false},
      {text: 'Amphotericin B', correct: false},
      {text: 'Azithromycin', correct: false},
      {text: 'Ivermectin', correct: false},
    ],
  },
  {
    question: '0',
    answers: [
      {text: '  The cyst is ingested by the host, excysts in the intestine, and releases trophozoites that invade the colon and form cysts. ', correct: true},
      {text: '  The trophozoite is ingested by the host, encysts in the intestine, and releases cysts that invade the colon and form trophozoites. ', correct: false},
      {text: '  The trophozoite is ingested by the host, invades the liver, and forms cysts that are shed in the feces. ', correct: false},
      {text: '   The cyst is ingested by the host, excysts in the stomach, and releases trophozoites that invade the liver and form cysts. ', correct: false},
      {text: '   The trophozoite is ingested by the host, encysts in the stomach, and releases cysts that are shed in the feces.', correct: false},
    ],
  },
  {
    question: '   Which of the following is not a biological feature of free-living amoebae? ',
    answers: [
      {text: 'They are obligate intracellular parasites ', correct: true},
      {text: '  They can form cysts in adverse conditions ', correct: false},
      {text: '    They are found in soil and water ', correct: false},
      {text: '  They are unicellular organisms ', correct: false},
      {text: ' They can phagocytose other organisms', correct: false},
    ],
  },
  {
    question: ' Which of the following parasite can cause granulomatous amoebic encephalitis (GAE)? ',
    answers: [
      {text: '  Acanthamoeba spp.', correct: true},
      {text: '  Trypanosoma cruzi ', correct: false},
      {text: ' Trichomonas vaginalis', correct: false},
      {text: '   Entamoeba histolytic ', correct: false},
      {text: '   Giardia lamblia', correct: false},
    ],
  },
  {
    question: '   Which of the following amoebae can cause severe brain infection?',
    answers: [
      {text: ' Naegleria fowleri ', correct: true},
      {text: ' Giardia lamblia', correct: false},
      {text: '  Trypanosoma cruzi', correct: false},
      {text: '   Entamoeba histolytica', correct: false},
      {text: '   Trichomonas vaginalis', correct: false},
    ],
  },
  {
    question: 'Which of the following is a crucial step in preventing the transmission of amoebas such as Naegleria fowleri and Acanthamoeba spp.?',
    answers: [
      {text: ' Chlorinating swimming pools and hot tubs', correct: true},
      {text: ' Proper use of antibiotics', correct: false},
      {text: ' Avoiding contact with infected animals', correct: false},
      {text: ' Regular deworming of pets', correct: false},
      {text: ' Oral rehydration therapy', correct: false},
    ],
  },
  {
    question: 'Which characteristic(s) are associated with parasites of the Class Aconoidasida?',
    answers: [
      {text: ' Formation of spores for transmission', correct: true},
      {text: ' Presence of flagella for locomotion', correct: false},
      {text: ' Involvement in causing amoebic infections', correct: false},
      {text: ' Lack of association with diseases like malaria', correct: false},
      {text: ' Preference for infecting humans directly without vectors', correct: false},
    ],
  },
  {
    question: 'Which symptoms are typically associated with Malaria?',
    answers: [
      {text: ' Fever and chills', correct: true},
      {text: ' Joint pain and headaches', correct: false},
      {text: ' Cough and chest pain', correct: false},
      {text: ' Vision disturbances and dizziness', correct: false},
      {text: ' Skin rashes and irritations', correct: false},
    ],
  },
  {
    question: '  Which of the following is a common clinical feature of Plasmodium falciparum infection?',
    answers: [
      {text: ' Headache ', correct: true},
      {text: '  Cough ', correct: false},
      {text: ' Rash ', correct: false},
      {text: '   Jaundice ', correct: false},
      {text: ' Joint pain', correct: false},
    ],
  },
  {
    question: ' Which of the following is a potential complication of severe Plasmodium falciparum infection?',
    answers: [
      {text: '  Liver failure ', correct: true},
      {text: '  Vision loss ', correct: false},
      {text: '  Kidney stones ', correct: false},
      {text: ' Pulmonary embolism ', correct: false},
      {text: ' Hearing loss', correct: false},
    ],
  },
  {
    question: 'Which diagnostic method is commonly used to detect Malaria in endemic areas with limited resources?',
    answers: [
      {text: ' Rapid diagnostic tests (RDTs) for parasite antigens', correct: true},
      {text: ' PCR (Polymerase Chain Reaction) testing', correct: false},
      {text: ' Serological testing for antibodies', correct: false},
      {text: ' Microscopic examination of urine samples', correct: false},
      {text: ' ELISA (Enzyme-Linked Immunosorbent Assay)', correct: false},
    ],
  },
  {
    question: '  Who  is the   definitive  host of Toxoplasma gondii? ',
    answers: [
      {text: '  Cats ', correct: true},
      {text: '  human', correct: false},
      {text: '   Dogs ', correct: false},
      {text: '   Birds', correct: false},
      {text: '   Reptiles', correct: false},
    ],
  },
  {
    question: 'Which stage of the life cycle of Toxoplasma gondii is infectious for humans?',
    answers: [
      {text: 'Oocyst ', correct: true},
      {text: ' Bradyzoite', correct: false},
      {text: ' Sporozoite ', correct: false},
      {text: ' Tachyzoite ', correct: false},
      {text: ' Schizont', correct: false},
    ],
  },
  {
    question: ' What are some of the clinical symptoms of toxoplasmosis? ',
    answers: [
      {text: '   Fever, headache, and muscle aches', correct: true},
      {text: ' Seizures and epilepsy ', correct: false},
      {text: '  Jaundice and liver failure', correct: false},
      {text: ' Respiratory problems and cough ', correct: false},
      {text: ' Muscle pain and weakness ', correct: false},
    ],
  },
  {
    question: '  What is the primary mode of transmission of Cryptosporidium parvum and Isospora belli? ',
    answers: [
      {text: ' Through contaminated water and food ', correct: true},
      {text: ' Through sexual contact ', correct: false},
      {text: '  Through mosquito bites', correct: false},
      {text: ' Through contact with infected animals', correct: false},
      {text: ' Through airborne droplets', correct: false},
    ],
  },
  {
    question: 'What is a common treatment approach for toxoplasmosis caused by Toxoplasma gondii?',
    answers: [
      {text: ' Combination therapy using pyrimethamine and sulfadiazine', correct: true},
      {text: ' Antiviral drugs targeting the parasite\'s replication', correct: false},
      {text: ' Corticosteroids for inflammation reduction', correct: false},
      {text: ' Antibiotic therapy with penicillin', correct: false},
      {text: ' Immunotherapy with monoclonal antibodies', correct: false},
    ],
  },
  {
    question: 'Which organ system is frequently impacted by microsporidiosis?',
    answers: [
      {text: ' Digestive system', correct: true},
      {text: ' Respiratory system', correct: false},
      {text: 'Musculoskeletal system', correct: false},
      {text: ' Nervous system', correct: false},
      {text: ' Circulatory system', correct: false},
    ],
  },
  {
    question: 'How do microsporidia commonly enter the host\'s body? ',
    answers: [
      {text: ' Through skin contact with contaminated soil or water ', correct: true},
      {text: ' Via airborne transmission from infected individuals ', correct: false},
      {text: ' Consuming undercooked or contaminated food ', correct: false},
      {text: ' By direct contact with an infected person\'s respiratory secretions', correct: false},
      {text: ' Through insect bites, particularly from mosquitoes', correct: false},
    ],
  },
  {
    question: 'What is a commonly used treatment approach for microsporidiosis caused by microsporidia?',
    answers: [
      {text: ' Albendazole or nitazoxanide as effective anti-microsporidial agents', correct: true},
      {text: ' Antiviral drugs targeting the parasite\'s replication', correct: false},
      {text: ' Antifungal medications to eliminate the parasite', correct: false},
      {text: ' Antibiotic therapy with penicillin', correct: false},
      {text: ' Corticosteroids for inflammation reduction', correct: false},
    ],
  },
  {
    question: 'Which characteristic is associated with Nematodes (Roundworms)?',
    answers: [
      {text: ' Elongated, cylindrical shape', correct: true},
      {text: ' Tough, non-segmented body', correct: false},
      {text: ' Examples include Taeniasis and Fascioliasis', correct: false},
      {text: ' Leaf-shaped or flattened worms', correct: false},
      {text: ' Segmented body structure with hooks or suckers', correct: false},
    ],
  },
  {
    question: 'Select the accurate feature related to Platyhelminthes:',
    answers: [
      {text: ' Trematodes possess oral and ventral suckers for attachment', correct: true},
      {text: ' Trematodes (Flukes) have an elongated, non-segmented body', correct: false},
      {text: ' Nematodes (Roundworms) fall under Platyhelminthes due to their leaf-shaped structure', correct: false},
      {text: ' Platyhelminthes include only Nematodes and Trematodes', correct: false},
      {text: ' Cestodes (Tapeworms) possess segmented body structure with hooks or suckers', correct: false},
    ],
  },
  {
    question: 'How does a healthcare provider diagnose a pinworm infection?',
    answers: [
      {text: 'By collecting eggs around the anus', correct: true},
      {text: 'With a blood test', correct: false},
      {text: ' By looking at the rash the infection makes', correct: false},
      {text: 'Urine test', correct: false},
      {text: 'Skin biopsy', correct: false},
    ],
  },
  {
    question: 'Which of the following is true about the body structure of Taenia solium? ',
    answers: [
      {text: 'It has a flattened body shape', correct: true},
      {text: 'It has a cylindrical body shape', correct: false},
      {text: 'It has a spherical body shape', correct: false},
      {text: 'It has a triangular body shape', correct: false},
      {text: 'It has an irregular body shap', correct: false},
    ],
  },
  {
    question: 'Which of the following statements do define the segments of a tapeworm consisting primarily of eggs, which hang in bags as a long chain behind the head?',
    answers: [
      {text: 'proglottids', correct: true},
      {text: 'cercariae', correct: false},
      {text: 'sporocysts', correct: false},
      {text: 'scolexes', correct: false},
      {text: 'glycoalyxes', correct: false},
    ],
  },
  {
    question: 'What is the feature of protonephridial system functions in cestodes?  ',
    answers: [
      {text: 'osmoregulation', correct: true},
      {text: 'respiration', correct: false},
      {text: 'reproduction', correct: false},
      {text: 'digestion', correct: false},
      {text: 'nervous co-ordination', correct: false},
    ],
  },
  {
    question: 'Which of the following is a causative agent of hydatid disease?',
    answers: [
      {text: 'Echinococcus granulosus', correct: true},
      {text: 'Schistosoma mansoni', correct: false},
      {text: 'Trypanosoma cruzi', correct: false},
      {text: 'Taenia solium', correct: false},
      {text: 'Wuchereria bancrofti', correct: false},
    ],
  },
  {
    question: 'How could you possibly become infected with adult tapeworms?',
    answers: [
      {text: 'ingesting eggs in contaminated water', correct: true},
      {text: 'being bitten by a mosquito', correct: false},
      {text: 'eating insufficiently cooked pork ', correct: false},
      {text: 'direct penetration  through  cuticle', correct: false},
      {text: 'all of the above are correct', correct: false},
    ],
  },
  {
    question: 'Which of the following is the infective stage of Fasciolopsis buski? ',
    answers: [
      {text: 'Metacercariae', correct: true},
      {text: ' Miracidia ', correct: false},
      {text: 'Cercariae ', correct: false},
      {text: ' Sporocysts ', correct: false},
      {text: 'Hydatid cyst', correct: false},
    ],
  },
  {
    question: 'What is the most common mode of transmission of Fasciola hepatica to humans?',
    answers: [
      {text: ' Consumption of contaminated watercress', correct: true},
      {text: ' Consumption of undercooked meat ', correct: false},
      {text: ' Inhalation of eggs ', correct: false},
      {text: 'Skin contact with contaminated water ', correct: false},
      {text: 'Consumption of contaminated vegetables', correct: false},
    ],
  },
  {
    question: 'Through what way  Schistosomia spp. is  transmitted to humans? ',
    answers: [
      {text: 'through contaminated food or water', correct: true},
      {text: 'through insect bites ', correct: false},
      {text: 'through skin contact with infected animals', correct: false},
      {text: 'through respiratory droplets ', correct: false},
      {text: 'through sexual route ', correct: false},
    ],
  },
  {
    question: 'Which one of the following statements about certain given animals is correct?',
    answers: [
      {text: 'Round worms  are pseudocoelomates', correct: true},
      {text: 'Molluscs are acolomates', correct: false},
      {text: 'Insects are pseudocoelomates', correct: false},
      {text: 'Flat worms (Platyhelminthes) are coelomates', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'A person working in a rice paddy in Asia becomes infected with the liver fluke by? ',
    answers: [
      {text: 'swimming or wading in infected water, where the cercariae enter the skin', correct: true},
      {text: 'drinking water contaminated with eggs', correct: false},
      {text: 'eating infected undercooked or uncooked fish,', correct: false},
      {text: 'eating infected snails', correct: false},
      {text: 'direct penetration through cuticle.', correct: false},
    ],
  },
  {
    question: 'Which vector does transmit Brugia malayi to humans? ',
    answers: [
      {text: 'Mosquitoe', correct: true},
      {text: 'Tick', correct: false},
      {text: 'Lice ', correct: false},
      {text: 'Flea', correct: false},
      {text: 'Sandfly', correct: false},
    ],
  },
  {
    question: 'History of mild intestinal distress, sleeplessness, itching, and anxiety is seen in preschool child attending play school. Which possible nematode is agent causing these manifestations?',
    answers: [
      {text: 'Enterobius vermicularis', correct: true},
      {text: 'Trichomonas vaginalis', correct: false},
      {text: 'Ascaris lumbricoides', correct: false},
      {text: 'Necator americanus', correct: false},
      {text: 'Wuchereria bancrofti', correct: false},
    ],
  },
  {
    question: 'By what filarial worm is caused the  discrete   lesions  in   the  lung   parenchyma   resulting  in   well-circumscribed  circularnodules (coin lesions)?',
    answers: [
      {text: 'Dirofilaria immitis', correct: true},
      {text: 'Dirofilaria tenuis', correct: false},
      {text: 'Dirofilaria repens', correct: false},
      {text: 'Dirofilaria ursi', correct: false},
      {text: ' Dirofilaria striata', correct: false},
    ],
  },
  {
    question: 'Identify what is most common human source of Trichinella spiralis infection in human?',
    answers: [
      {text: ' Pork', correct: true},
      {text: 'Beef', correct: false},
      {text: '   Goat', correct: false},
      {text: '     Dog', correct: false},
      {text: 'Fish', correct: false},
    ],
  },
  {
    question: 'Which of the following arthropods is the primary vector for Russian spring-summer encephalitis? ',
    answers: [
      {text: 'Tick', correct: true},
      {text: 'Mosquito', correct: false},
      {text: 'Flea', correct: false},
      {text: 'Lice ', correct: false},
      {text: 'Mite', correct: false},
    ],
  },
  {
    question: 'The following pathogen is transmitted to humans through the bite of infected ticks during Lyme disease.What is the name the most likely pathogen?',
    answers: [
      {text: 'Borrelia burgdorferi', correct: true},
      {text: 'Bordetella pertusis ', correct: false},
      {text: 'Leptospira interrogans', correct: false},
      {text: 'Enterococcus faecalis', correct: false},
      {text: 'Borrelia buccalis ', correct: false},
    ],
  },
  {
    question: 'Which of the following diseases is NOT transmitted by ticks or mites? ',
    answers: [
      {text: 'Chikungunya ', correct: true},
      {text: 'Scrub typhus ', correct: false},
      {text: 'Tularemia', correct: false},
      {text: 'Rocky Mountain spotted fever ', correct: false},
      {text: 'Q fever', correct: false},
    ],
  },
  {
    question: 'Which of the statements below is correct about Scabies?',
    answers: [
      {text: 'The infective stage is the egg', correct: true},
      {text: 'Arthropods are vectors', correct: false},
      {text: 'Nosocomial infection is a likelihood', correct: false},
      {text: 'Secondary bacterial infection is uncommon', correct: false},
      {text: 'adult stage is infective stage ', correct: false},
    ],
  },
  {
    question: 'How is associated most dangerous medical condition with ticks? ',
    answers: [
      {text: 'Lyme disaese ', correct: true},
      {text: 'Tick born typhus ', correct: false},
      {text: 'Tick paralysis ', correct: false},
      {text: 'Allergic reaction ', correct: false},
      {text: 'Plague ', correct: false},
    ],
  },
  {
    question: 'For what transmission is responsible Aedes aegypti mosquito?',
    answers: [
      {text: 'Yellow fever', correct: true},
      {text: 'AIDS', correct: false},
      {text: 'German measles', correct: false},
      {text: 'Herpes simplex', correct: false},
      {text: 'Tick-borne relapsing fever', correct: false},
    ],
  },
  {
    question: 'Which species of mosquitoes is predominant vector of West Nile Virus (WNV)?',
    answers: [
      {text: 'Culex', correct: true},
      {text: '  Anopheles', correct: false},
      {text: '  Aedes  ', correct: false},
      {text: 'Ixodes', correct: false},
      {text: 'Stomoxys', correct: false},
    ],
  },
  {
    question: 'Which of the following is not transmitted by a mosquito?',
    answers: [
      {text: 'Leishmania donovani', correct: true},
      {text: 'Plasmodium falciparum', correct: false},
      {text: 'Plasmodium ovale ', correct: false},
      {text: 'Plasmodium vivax', correct: false},
      {text: 'Wuchereria bancrofti', correct: false},
    ],
  },
  {
    question: 'Which of the following is a measure for preventing flea-borne diseases? ',
    answers: [
      {text: 'Keeping pets treated with flea preventive medication', correct: true},
      {text: 'Washing hands with soap and water', correct: false},
      {text: ' Using insect repellent ', correct: false},
      {text: 'Vaccination ', correct: false},
      {text: 'Properly cooking meat ', correct: false},
    ],
  },
  {
    question: 'What is the life cycle of fleas (order Siphonaptera)? ',
    answers: [
      {text: 'Egg, larva, pupa, adult ', correct: true},
      {text: 'Egg, nymph, adult', correct: false},
      {text: 'Egg, larva, pupa, nymph, adult', correct: false},
      {text: 'Egg, pupa, adult ', correct: false},
      {text: 'Egg, larva, nymph, adult', correct: false},
    ],
  },
  {
    question: 'West Nile virus belongs to a group of viruses known as flaviviruses. How are these viruses spread?',
    answers: [
      {text: 'By mosquitoes', correct: true},
      {text: 'Through contaminated water', correct: false},
      {text: 'By sneezing or coughing', correct: false},
      {text: 'Through raw or undercooked meat', correct: false},
      {text: 'by flies ', correct: false},
    ],
  },
  {
    question: 'During Plague disease which bacteria is transmitted by fleas ?',
    answers: [
      {text: 'Yersinia Pestis', correct: true},
      {text: 'Mycobacteria', correct: false},
      {text: 'Clostridium', correct: false},
      {text: 'Borrelia burgdorferi ', correct: false},
      {text: 'None of the above', correct: false},
    ],
  },
  {
    question: 'How do lice get from person to person?',
    answers: [
      {text: 'Crawling', correct: true},
      {text: 'Skipping', correct: false},
      {text: 'Flying', correct: false},
      {text: 'Jumping', correct: false},
      {text: 'Walking ', correct: false},
    ],
  },
  {
    question: 'A 5-years old boy presnts with multiple brown organisms attached to the base of his eyelashes. There is a suspicion of sexual abuse. Which of the following is the MOST likely organism? ',
    answers: [
      {text: 'Pthirus pubis ', correct: true},
      {text: 'Pediculosis capitis ', correct: false},
      {text: 'Demodex folliculorum ', correct: false},
      {text: 'Borrelia burgdorferi ', correct: false},
      {text: 'pediculosis humanus corporis', correct: false},
    ],
  },
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

// Search functionality
searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
