import React from 'react';
import Headr from '../components/Headr';
import Footr from '../components/Footr';
import ClassRoom1 from '../images/ClassRoom1.jpg';
import '../styles/School.css';

function School({ setCurrentPage }) {
  const handleLoginClick = () => {
    setCurrentPage('login');
  };

  return (
    <div className="page">
      <Headr />

      <div className="page-content">
        <div className="image-container">
          <h1 className="image-text">
            Welcome to Hogwarts School of Witchcraft and Wizardry!
          </h1>
          <img
            className="hogwarts-image"
            src={ClassRoom1}
            alt="HogwartsClassRoom"
          />
        </div>
        <button className="btn" onClick={handleLoginClick}>
          Portal
        </button>
      </div>

      <div className="about-us">
        <h2>About Hogwarts University</h2>
        <p>
        Hogwarts School of Witchcraft and Wizardry is a prestigious magical institution that has been educating and nurturing young witches and wizards for over a thousand years. Founded by Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin, the school is dedicated to providing a well-rounded education in magical arts while fostering a strong sense of community and personal growth among its students.

        Located in a magnificent castle nestled in the Scottish Highlands, Hogwarts offers a truly unique learning environment. Students are sorted into one of four houses upon arrival – Gryffindor, Hufflepuff, Ravenclaw, or Slytherin – where they will make lifelong friendships, engage in friendly competition, and learn important values such as courage, loyalty, wisdom, and ambition.

        Hogwarts provides a comprehensive curriculum that covers a wide range of magical subjects. Core classes include Charms, Transfiguration, Potions, Herbology, Defence Against the Dark Arts, Astronomy, and History of Magic. As students progress, they have the opportunity to specialize in more advanced subjects like Arithmancy, Ancient Runes, Divination, Muggle Studies, and Care of Magical Creatures. These courses are taught by a dedicated and knowledgeable faculty, many of whom are experts in their respective fields.

        In addition to academic pursuits, Hogwarts encourages students to develop their skills and interests outside of the classroom. The school boasts numerous clubs and extracurricular activities such as Quidditch, the most popular wizarding sport, which is played on broomsticks with each house fielding a team. Other clubs include the Dueling Club, where students can hone their spellcasting prowess in friendly competition, and the Hogwarts Choir, which showcases the musical talents of its members.

        Hogwarts places great importance on personal development and offers various resources to help students cope with the challenges of adolescence. The school employs a skilled mediwitch or wizard to attend to students' health, and a guidance counselor is available for those who need support with their emotional well-being. Additionally, Hogwarts fosters a culture of mutual respect and tolerance, promoting inclusivity and diversity within the magical community.

        The school is also committed to ensuring the safety and security of its students. Magical enchantments protect the castle from intruders, and a dedicated team of professors and staff work together to maintain a safe and nurturing environment. Students are encouraged to explore the vast grounds of the Hogwarts estate, which include lush gardens, magical creatures, and a magnificent lake – all while being supervised by experienced staff.

        Hogwarts School of Witchcraft and Wizardry offers an unparalleled magical education, where young witches and wizards can develop their skills, forge lifelong friendships, and embark on a journey of self-discovery. With its rich history, diverse curriculum, and vibrant community, Hogwarts is the ideal place for aspiring wizards to begin their magical journey.
        </p>
      </div>

      <Footr />
    </div>
  );
}

export default School;
