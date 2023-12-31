export const majors = [
  'Accountancy',
  'Art, Design & Media',
  'Aerospace Engineering',
  'Bioengineering',
  'Biomedical Sciences',
  'Biological Sciences',
  'Biomedical Sciences And Biobusiness',
  'Biological Sciences And Psychology',
  'Business',
  'Chemical & Biomolecular Engineering',
  'Computer Engineering',
  'Civil Engineering',
  'Chemistry and Biological Chemistry',
  'Chinese',
  'Chinese And English',
  'Chinese And Linguistics & Multilingual Studies',
  'Communication Studies',
  'Computer Science',
  'Data Science & Artificial Intelligence',
  'Economics & Data Science',
  'Economics And Media Analytics',
  'Economics',
  'Economics And Public Policy & Global Affairs',
  'Economics And Psychology',
  'Electrical & Electronic Engineering',
  'Environmental Earth Systems Science',
  'English Literature And Art History',
  'English',
  'English And History',
  'English And Philosophy',
  'Environmental Engineering',
  'Environmental Earth Systems Science And Public Policy & Global Affairs',
  'History',
  'History And Chinese',
  'History And Linguistics & Multilingual Studies',
  'Information Engineering & Media',
  'Linguistics & Multilingual Studies And English',
  'Linguistics & Multilingual Studies And Philosophy',
  'Linguistics & Multilingual Studies',
  'Mathematical And Computer Sciences',
  'Mathematics & Economics',
  'Mathematical Sciences And Economics',
  'Materials Engineering',
  'Mathematical Sciences',
  'Mechanical Engineering',
  'Maritime Studies',
  'Philosophy',
  'Physics And Mathematical Sciences',
  'Physics and Applied Physics',
  'Philosophy And Chinese',
  'Philosophy And History',
  'Public Policy And Global Affairs',
  'Psychology And Linguistics & Multilingual Studies',
  'Psychology And Media Analytics',
  'Psychology',
  'Renaissance Engineering (Aerospace Engineering)',
  'Renaissance Engineering (Bioengineering)',
  'Renaissance Engineering (Chemical & Biomolecular Engineering)',
  'Renaissance Engineering (Computer Engineering)',
  'Renaissance Engineering (Computer Science)',
  'Renaissance Engineering (Civil Engineering)',
  'Renaissance Engineering (Electrical & Electronic Engineering)',
  'Renaissance Engineering (Environmental Engineering)',
  'Renaissance Engineering (Materials Engineering)',
  'Renaissance Engineering (Mechanical Engineering)',
  'Sociology',
  'Sport Science And Management',
  'Accountancy And Business',
  'Accountancy And Data Science & Artificial Intelligence',
  'Aerospace Engineering And Economics',
  'Business And Computing',
  'Bioengineering And Economics',
  'Chemical & Biomolecular Engineering And Economics',
  'Computer Engineering And Economics',
  'Computer Science And Economics',
  'Civil Engineering And Economics',
  'Electrical & Electronic Engineering And Economics',
  'Environmental Engineering And Economics',
  'Information Engineering & Media And Economics',
  'Mechanical Engineering And Economics',
  'Materials Engineering And Economics',
]

export const majorToDiscipline = {
  'Accountancy': ['Business/Accountancy'],
  'Art, Design & Media': ['Art, Design and Media'],
  'Aerospace Engineering': ['Mechanical/Aerospace Engineering'],
  'Bioengineering': ['Chemistry, Chemical Engineering and Biotechnology'],
  'Biomedical Sciences': ['Biological Science'],
  'Biological Sciences': ['Biological Science'],
  'Biomedical Sciences And Biobusiness': ['Biological Science'],
  'Biological Sciences And Psychology': ['Biological Science', 'Psychology'],
  'Business': ['Business/Accountancy'],
  'Chemical & Biomolecular Engineering': ['Chemistry, Chemical Engineering and Biotechnology'],
  'Computer Engineering': ['Computing'],
  'Civil Engineering': ['Civil/Environmental Engineering'],
  'Chemistry and Biological Chemistry': ['Chemistry, Chemical Engineering and Biotechnology'],
  'Chinese': ['Chinese'],
  'Chinese And English': ['Chinese', 'English Literature'],
  'Chinese And Linguistics & Multilingual Studies': ['Chinese', 'Linguistics'],
  'Communication Studies': ['Communication Studies'],
  'Computer Science': ['Computing'],
  'Data Science & Artificial Intelligence': ['Computing', 'Mathematics'],
  'Economics & Data Science': ['Computing', 'Mathematics', 'Economics'],
  'Economics And Media Analytics': ['Economics', 'Communication Studies'],
  'Economics': ['Economics'],
  'Economics And Public Policy & Global Affairs': ['Economics', 'Public Policy and Global Affairs'],
  'Economics And Psychology': ['Economics', 'Psychology'],
  'Electrical & Electronic Engineering': ['Electrical Engineering'],
  'Environmental Earth Systems Science': ['Environment Earth Systems'],
  'English Literature And Art History': ['English Literature', 'Art, Design and Media', 'History'],
  'English': ['English'],
  'English And History': ['English', 'History'],
  'English And Philosophy': ['English', 'Philosophy'],
  'Environmental Engineering': ['Civil/Environmental Engineering'],
  'Environmental Earth Systems Science And Public Policy & Global Affairs': ['Environment Earth Systems', 'Public Policy and Global Affairs'],
  'History': ['History'],
  'History And Chinese': ['History', 'Chinese'],
  'History And Linguistics & Multilingual Studies': ['History', 'Linguistics'],
  'Information Engineering & Media': ['Electrical Engineering'],
  'Linguistics & Multilingual Studies And English': ['Linguistics', 'English'],
  'Linguistics & Multilingual Studies And Philosophy': ['Linguistics', 'Philosophy'],
  'Linguistics & Multilingual Studies': ['Linguistics'],
  'Mathematical And Computer Sciences': ['Mathematics', 'Computing'],
  'Mathematics & Economics': ['Mathematics', 'Economics'],
  'Mathematical Sciences And Economics': ['Mathematics', 'Economics'],
  'Materials Engineering': ['Materials Science'],
  'Mathematical Sciences': ['Mathematics'],
  'Mechanical Engineering': ['Mechanical/Aerospace Engineering'],
  'Maritime Studies': ['Maritime Studies'],
  'Philosophy': ['Philosophy'],
  'Physics And Mathematical Sciences': ['Physics', 'Mathematics'],
  'Physics and Applied Physics': ['Physics'],
  'Philosophy And Chinese': ['Philosophy', 'Chinese'],
  'Philosophy And History': ['Philosophy', 'History'],
  'Public Policy And Global Affairs': ['Public Policy and Global Affairs'],
  'Psychology And Linguistics & Multilingual Studies': ['Psychology', 'Linguistics'],
  'Psychology And Media Analytics': ['Psychology', 'Communication Studies'],
  'Psychology': ['Psychology'],
  'Renaissance Engineering (Aerospace Engineering)': ['Mechanical/Aerospace Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Bioengineering)': ['Chemistry, Chemical Engineering and Biotechnology', 'Renaissance Engineering'],
  'Renaissance Engineering (Chemical & Biomolecular Engineering)': ['Chemistry, Chemical Engineering and Biotechnology', 'Renaissance Engineering'],
  'Renaissance Engineering (Computer Engineering)': ['Computing', 'Renaissance Engineering'],
  'Renaissance Engineering (Computer Science)': ['Computing', 'Renaissance Engineering'],
  'Renaissance Engineering (Civil Engineering)': ['Civil/Environmental Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Electrical & Electronic Engineering)': ['Electrical Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Environmental Engineering)': ['Civil/Environmental Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Materials Engineering)': ['Materials Science', 'Renaissance Engineering'],
  'Renaissance Engineering (Mechanical Engineering)': ['Mechanical/Aerospace Engineering', 'Renaissance Engineering'],
  'Sociology': ['Sociology'],
  'Sport Science And Management': ['Sport Science & Management'],
  'Accountancy And Business': ['Business/Accountancy'],
  'Accountancy And Data Science & Artificial Intelligence': ['Business/Accountancy', 'Computing'],
  'Aerospace Engineering And Economics': ['Mechanical/Aerospace Engineering', 'Economics'],
  'Business And Computing': ['Business/Accountancy', 'Computing'],
  'Bioengineering And Economics': ['Chemistry, Chemical Engineering and Biotechnology', 'Economics'],
  'Chemical & Biomolecular Engineering And Economics': ['Chemistry, Chemical Engineering and Biotechnology', 'Economics'],
  'Computer Engineering And Economics': ['Computing', 'Economics'],
  'Computer Science And Economics': ['Computing', 'Economics'],
  'Civil Engineering And Economics': ['Civil/Environmental Engineering', 'Economics'],
  'Electrical & Electronic Engineering And Economics': ['Electrical Engineering', 'Economics'],
  'Environmental Engineering And Economics': ['Civil/Environmental Engineering', 'Economics'],
  'Information Engineering & Media And Economics': ['Electrical Engineering', 'Economics'],
  'Mechanical Engineering And Economics': ['Mechanical/Aerospace Engineering', 'Economics'],
  'Materials Engineering And Economics': ['Materials Science', 'Economics']
}


export const majorToFaculty = {
  'Accountancy': ["Nanyang Business School"],
  'Art, Design & Media': ["School Of Art, Design and Media"],
  'Aerospace Engineering': ["School of Mechanical and Aerospace Engineering"],
  'Bioengineering': ["School of Chemistry, Chemical Engineering and Biotechnology"],
  'Biomedical Sciences': ["School of Biological Sciences"],
  'Biological Sciences': ["School of Biological Sciences"],
  'Biomedical Sciences And Biobusiness': ["School of Biological Sciences"],
  'Biological Sciences And Psychology': ["School of Biological Sciences", 'School of Social Sciences'],
  'Business': ['Nanyang Business School'],
  'Chemical & Biomolecular Engineering': ["School of Chemistry, Chemical Engineering and Biotechnology"],
  'Computer Engineering': ['School of Computer Science and Engineering'],
  'Civil Engineering': ['School of Civil and Environmental Engineering'],
  'Chemistry and Biological Chemistry': ["School of Chemistry, Chemical Engineering and Biotechnology"],
  'Chinese': ['School of Humanities'],
  'Chinese And English': ['School of Humanities'],
  'Chinese And Linguistics & Multilingual Studies': ['School of Humanities'],
  'Communication Studies': ['Wee Kim Wee School of Communication and Information'],
  'Computer Science': ['School of Computer Science and Engineering'],
  'Data Science & Artificial Intelligence': ['School of Computer Science and Engineering', 'School of Physical and Mathematical Sciences'],
  'Economics & Data Science': ['School of Computer Science and Engineering', 'School of Physical and Mathematical Sciences', 'School of Social Sciences'],
  'Economics And Media Analytics': ['School of Social Sciences', 'Wee Kim Wee School of Communication and Information'],
  'Economics': ['School of Social Sciences'],
  'Economics And Public Policy & Global Affairs': ['School of Social Sciences', 'School of Social Sciences'],
  'Economics And Psychology': ['School of Social Sciences', 'School of Social Sciences'],
  'Electrical & Electronic Engineering': ['School of Electrical and Electronic Engineering'],
  'Environmental Earth Systems Science': ['Asian School of the Environment'],
  'English Literature And Art History': ['School of Humanities', 'School Of Art, Design and Media'],
  'English': ['School of Humanities'],
  'English And History': ['School of Humanities'],
  'English And Philosophy': ['School of Humanities'],
  'Environmental Engineering': ['School of Civil and Environmental Engineering'],
  'Environmental Earth Systems Science And Public Policy & Global Affairs': ['Asian School of the Environment', 'School of Social Sciences'],
  'History': ['School of Humanities'],
  'History And Chinese': ['School of Humanities'],
  'History And Linguistics & Multilingual Studies': ['School of Humanities'],
  'Information Engineering & Media': ['School of Electrical and Electronic Engineering'],
  'Linguistics & Multilingual Studies And English': ['School of Humanities'],
  'Linguistics & Multilingual Studies And Philosophy': ['School of Humanities'],
  'Linguistics & Multilingual Studies': ['School of Humanities'],
  'Mathematical And Computer Sciences': ['School of Physical and Mathematical Sciences', 'School of Computer Science and Engineering'],
  'Mathematics & Economics': ['School of Physical and Mathematical Sciences', 'School of Social Sciences'],
  'Mathematical Sciences And Economics': ['School of Physical and Mathematical Sciences', 'School of Social Sciences'],
  'Materials Engineering': ['School of Materials Science and Engineering'],
  'Mathematical Sciences': ['School of Physical and Mathematical Sciences'],
  'Mechanical Engineering': ['School of Mechanical and Aerospace Engineering'],
  'Maritime Studies': ['School of Civil and Environmental Engineering'],
  'Philosophy': ['School of Humanities'],
  'Physics And Mathematical Sciences': ['School of Physical and Mathematical Sciences'],
  'Physics and Applied Physics': ['School of Physical and Mathematical Sciences'],
  'Philosophy And Chinese': ['School of Humanities'],
  'Philosophy And History': ['School of Humanities'],
  'Public Policy And Global Affairs': ['School of Social Sciences'],
  'Psychology And Linguistics & Multilingual Studies': ['School of Social Sciences', 'School of Humanities'],
  'Psychology And Media Analytics': ['School of Social Sciences', 'Wee Kim Wee School of Communication and Information'],
  'Psychology': ['School of Social Sciences'],
  'Renaissance Engineering (Aerospace Engineering)': ['School of Mechanical and Aerospace Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Bioengineering)': ["School of Chemistry, Chemical Engineering and Biotechnology", 'Renaissance Engineering'],
  'Renaissance Engineering (Chemical & Biomolecular Engineering)': ["School of Chemistry, Chemical Engineering and Biotechnology", 'Renaissance Engineering'],
  'Renaissance Engineering (Computer Engineering)': ['School of Computer Science and Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Computer Science)': ['School of Computer Science and Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Civil Engineering)': ['School of Civil and Environmental Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Electrical & Electronic Engineering)': ['School of Electrical and Electronic Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Environmental Engineering)': ['School of Civil and Environmental Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Materials Engineering)': ['School of Materials Science and Engineering', 'Renaissance Engineering'],
  'Renaissance Engineering (Mechanical Engineering)': ['School of Mechanical and Aerospace Engineering', 'Renaissance Engineering'],
  'Sociology': ['School of Social Sciences'],
  'Sport Science And Management': ['National Institute of Education'],
  'Accountancy And Business': ['Nanyang Business School'],
  'Accountancy And Data Science & Artificial Intelligence': ['Nanyang Business School', 'School of Computer Science and Engineering'],
  'Aerospace Engineering And Economics': ['School of Mechanical and Aerospace Engineering', 'School of Social Sciences'],
  'Business And Computing': ['Nanyang Business School', 'School of Computer Science and Engineering'],
  'Bioengineering And Economics': ["School of Chemistry, Chemical Engineering and Biotechnology", 'School of Social Sciences'],
  'Chemical & Biomolecular Engineering And Economics': ["School of Chemistry, Chemical Engineering and Biotechnology", 'School of Social Sciences'],
  'Computer Engineering And Economics': ['School of Computer Science and Engineering', 'School of Social Sciences'],
  'Computer Science And Economics': ['School of Computer Science and Engineering', 'School of Social Sciences'],
  'Civil Engineering And Economics': ['School of Civil and Environmental Engineering', 'School of Social Sciences'],
  'Electrical & Electronic Engineering And Economics': ['School of Electrical and Electronic Engineering', 'School of Social Sciences'],
  'Environmental Engineering And Economics': ['School of Civil and Environmental Engineering', 'School of Social Sciences'],
  'Information Engineering & Media And Economics': ['School of Electrical and Electronic Engineering', 'School of Social Sciences'],
  'Mechanical Engineering And Economics': ['School of Mechanical and Aerospace Engineering', 'School of Social Sciences'],
  'Materials Engineering And Economics': ['School of Materials Science and Engineering', 'School of Social Sciences']
}