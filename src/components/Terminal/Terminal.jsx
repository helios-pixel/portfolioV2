import { useEffect , useState} from 'react'; // Add this at the top if not already imported
import styles from './Terminal.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bsodImage from '../../assets/bsod.jpg';
import memeImage from '../../assets/meme.jpg';


function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [prankActive, setPrankActive] = useState(false); 

    useEffect(() => {
        if (prankActive) {
            window.scrollTo(0, 0); // Scroll to top
    
            document.documentElement.requestFullscreen().catch((err) => {
                console.warn("Failed to enter fullscreen mode:", err);
            });
    
            const appElement = document.getElementById('app');
            if (appElement) {
                appElement.style.visibility = 'hidden';
            }
    
            document.body.style.overflow = 'hidden';
            document.body.style.backgroundColor = 'black';
            document.body.style.transition = 'background-color 0.5s ease-in-out';
            document.body.style.height = '100vh';
            document.body.style.width = '100vw';
           
    
            const setBackgroundImage = (image) => {
                document.body.style.backgroundImage = `url(${image})`;
                document.body.style.backgroundSize = 'contain';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
            };
    
            setTimeout(() => {
                setBackgroundImage(bsodImage);
            }, 2000);
    
            setTimeout(() => {
                setBackgroundImage(memeImage);
            }, 5000);
    
            setTimeout(() => {
                document.body.style.backgroundImage = 'none';
                document.body.style.backgroundColor = '';
                document.body.style.overflow = '';
                document.body.style.height = '';
                document.body.style.width = '';
                document.body.style.position = 'static'; // Reset to default
    
                document.exitFullscreen().catch((err) => {
                    console.warn("Failed to exit fullscreen mode:", err);
                });
    
                if (appElement) {
                    appElement.style.visibility = 'visible';
                }
    
                setPrankActive(false);
            }, 8000);
        }
    }, [prankActive]);
    
    
    
    

    const handleCommand = () => {
        let tOutput = "";

        if (input === "sudo -rm rf") {
            tOutput = "Gotcha LOL!";
            setHistory([...history, { command: input, output: tOutput }]);
            setInput("");
            setPrankActive(true); // Trigger the prank
            return;
        }

        if (input.startsWith("cd ")) {
            const section = input.split(" ")[1];
            const targetElement = document.getElementById(section);

            if (targetElement) {
                tOutput = `Navigating to ${section}`;
                setHistory([...history, { command: input, output: tOutput }]);
                setInput("");
                // Scroll smoothly to the target section
                targetElement.scrollIntoView({ behavior: 'smooth' });
                return;
            } else {
                tOutput = `Section not found: ${section}`;
            }
        }

        if (input === "ls" || input === "cd") {
            tOutput = "/about \t /academics \t /experience \t /skills \t /projects \t /contact \t ";
        } else if (input === "cd about_me" || input === "cd /about_me") {
            tOutput = "You are already here";
        } else if (input === "cd projects" || input === "cd /projects") {
            // scroll to projects section
        } else if (input === "cd contact" || input === "cd /contact") {
            // scroll to contact section
        } else if (input === "clear") {
            setHistory([]);
            setInput("");
            return;
        } else {
            tOutput = `Command not found: ${input}`;
        }
        setHistory([...history, { command: input, output: tOutput }]);
        setInput("");
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className={styles.terminal}>
                        <div className={styles['terminal-container']}>
                            <div className={styles['terminal-toolbar']}>
                                <span className={styles['terminal-tools']}>
                                    <span className={styles['red-circle']}></span>
                                    <span className={styles['green-circle']}></span>
                                    <span className={styles['yellow-circle']}></span>
                                </span>
                                <span className={styles['terminal-name']}>Pravin Tiwade</span>
                                <span className={styles['terminal-placeholder']}></span>
                            </div>
                            <div className={styles['terminal-classTerm']}>
                                {history.map((entry, index) => (
                                    <div className={styles['terminal-cmdHistory']} key={index}>
                                        <div className={styles['terminal-command']}>
                                            $ ~ <span>{entry.command}</span>
                                        </div>
                                        <div className={styles['terminal-output']}> {entry.output}</div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles['terminal-search']}>
                                &#36; ~ <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter') {
                                            handleCommand();
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Terminal;
