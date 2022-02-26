import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faLock, faMicrophone } from '@fortawesome/free-solid-svg-icons'

const EventsAbout = () => {
	return (
		<VerticalTimeline>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: '#9035eb', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  #9035eb' }}
				date="2011 - present"
				iconStyle={{ background: '#9035eb', color: '#fff' }}
				icon={<FontAwesomeIcon icon={faGamepad} />}
			>
				<h3 className="vertical-timeline-element-title">
					Level Up: An Introduction to Game Development!{' '}
				</h3>
				<p>
					Students learned the basics of Game Design and Development! Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Nam sit maxime sequi. Sapiente deserunt
					inventore deleniti at aperiam animi, laudantium natus cum similique delectus
					corporis vero, illum ut enim? Delectus?
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: '#00b9cb', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  #00b9cb' }}
				iconStyle={{ background: '#00b9cb', color: '#fff' }}
				icon={<FontAwesomeIcon icon={faLock} />}
			>
				<h3 className="vertical-timeline-element-title">
					The Future of Cyberspace: Information Security & Digital Forensics
				</h3>
				<p>
					This program combined interactive online workshops, speaker events, and
					modern-day challenges to immerse participants in the basics of information
					security and digital forensic techniques. Through a series of 3-4 interactive
					workshops, participants learned about online safety and ethics, became
					familiar with cybersecurity concepts, basic digital forensic techniques such
					as steganography techniques and analyzing files, and gained better
					understanding of how the Internet works. After growing their skills and
					engaging in the online workshops, participants were able to hear from experts
					in the field of cybersecurity, including the founder of Iot Village and
					ex-Microsoft CTO of security. The program concluded with a CTF style
					competition where students applied the knowledge they gained from workshops
					and speaker events to solve a multitude of forensics challenges and the
					winners received cash prizes!
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: '#0dd3a4', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  #0dd3a4' }}
				iconStyle={{ background: '#0dd3a4', color: '#fff' }}
				icon={<FontAwesomeIcon icon={faMicrophone} />}
			>
				<h3 className="vertical-timeline-element-title">
					Global Entrepreneurship & Emerging Tech conference
				</h3>
				<p>
					Students learned directly from speakers including leaders from Qualcomm,
					Northrop Grumman, and successful co-founders and CFOs on the newest and up and
					coming industries in a half-day, free-of-cost conference. Speakers presented
					on topics of their expertise in 30 minute talks followed by audience Q&As.
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	)
}

export default EventsAbout
