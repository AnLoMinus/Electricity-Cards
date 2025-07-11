// נתוני הקלפים
const cardsData = {
  1: {
    title: "מהו חשמל?",
    icon: "⚡️",
    description: "יסודות החשמל",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">⚡️</span>
                    <h3>מהו חשמל?</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>חשמל הוא "ריקוד של אלקטרונים"</strong> - חלקיקים קטנים מאוד שזזים יחד בצורה מסודרת, כמו להקת ריקוד שמבצעת כוריאוגרפיה מושלמת.</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>חשבו על זה: כשאתם מדליקים אור, אתם בעצם "מעירים" אלפי אלקטרונים קטנים שרצים לעבוד בשבילכם. אתם מנהלים צוות של עובדים זעירים!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>דמיינו צינור מים:</strong></p>
                        <p>🌊 המים = ⚡ האלקטרונים</p>
                        <p>🔧 הברז = 🔌 המפסק</p>
                        <p>💧 הטיפות = 💡 האור</p>
                        <p><em>בדיוק כמו שמים זורמים בצינור, אלקטרונים זורמים בחוט!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>חשמל הוא כמו אש</strong> - שימושי מאוד אבל יכול להיות מסוכן. לעולם אל תיגעו בחוטים חשופים או תפתחו מכשירים חשמליים!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם רואים חוט חשמל, דמיינו אותו כמו "כביש מהיר" לאלקטרונים. הם נוסעים בו במהירות האור כדי להביא לכם אנרגיה!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"החשמל הוא השפה שבה הטבע מדבר עם המכונות, ואנחנו למדנו לתרגם אותה"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  2: {
    title: "מעגל חשמלי פשוט",
    icon: "🔋",
    description: "מקור, מוליך, צרכן",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">🔋</span>
                    <h3>מעגל חשמלי פשוט</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>מעגל חשמלי הוא "מסלול ריצה"</strong> - כמו מסלול אולימפי שבו האלקטרונים רצים במעגל סגור, עוברים דרך תחנות שונות ומבצעים משימות.</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם בונים מעגל, אתם בעצם מתכננים עיר קטנה עם כבישים, בתים ומפעלים. אתם האדריכלים של עולם החשמל!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="circuit-parts">
                        <div class="part">
                            <span class="part-icon">🔋</span>
                            <strong>המקור</strong>
                            <p>כמו "בנק האנרגיה" - נותן כוח לאלקטרונים</p>
                        </div>
                        <div class="part">
                            <span class="part-icon">🧵</span>
                            <strong>המוליך</strong>
                            <p>כמו "כביש מהיר" - מעביר את האלקטרונים</p>
                        </div>
                        <div class="part">
                            <span class="part-icon">💡</span>
                            <strong>הצרכן</strong>
                            <p>כמו "מפעל" - משתמש באנרגיה לעבודה</p>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>המסלול המלא:</strong></p>
                        <p>🔋 בנק → 🧵 כביש → 💡 מפעל → 🧵 כביש → 🔋 בנק</p>
                        <p><em>זהו מעגל סגור - אין יציאה!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>המעגל חייב להיות סגור!</strong> כמו שעיר בלי כבישים חוזרים לא יכולה לתפקד, מעגל פתוח לא יעבוד. תמיד וודאו שהדרך חזרה קיימת!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם בודקים מעגל, דמיינו שאתם עוקבים אחרי מכונית שמנסה לחזור הביתה. אם יש "גשר שבור" (חיבור רע), המכונית לא תגיע!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"המעגל החשמלי הוא הדרך שבה הטבע מלמד אותנו שכל דבר צריך לחזור למקורו"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  3: {
    title: "סוללות",
    icon: "🔋",
    description: "סוגי סוללות בסיסיים",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">🔋</span>
                    <h3>סוללות</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>סוללה היא "בנק אנרגיה כימי"</strong> - כמו בנק שמחזיק כסף, הסוללה מחזיקה אלקטרונים. כשאתם צריכים, היא "מלווה" לכם אלקטרונים, וכשאתם טוענים, אתם "מחזירים" אותם.</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם משתמשים בסוללה, אתם בעצם "שואלים" אנרגיה מהטבע. זה כמו לקחת ספר מהספרייה - אתם צריכים להחזיר אותו כדי שאחרים יוכלו להשתמש בו!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="battery-types">
                        <div class="battery-type">
                            <span class="battery-icon">🔋</span>
                            <strong>סוללה רגילה</strong>
                            <p>כמו "ספר חד פעמי" - משתמשים פעם אחת</p>
                        </div>
                        <div class="battery-type">
                            <span class="battery-icon">🔌</span>
                            <strong>סוללה נטענת</strong>
                            <p>כמו "ספרייה" - מחזירים ושואלים שוב</p>
                        </div>
                        <div class="battery-type">
                            <span class="battery-icon">📱</span>
                            <strong>סוללת ליתיום</strong>
                            <p>כמו "בנק דיגיטלי" - מתקדם וחכם</p>
                        </div>
                    </div>
                    <div class="example-box">
                        <p><strong>איך זה עובד:</strong></p>
                        <p>⚗️ כימיקלים → ⚡ אלקטרונים → 🔋 אחסון → 📱 שימוש</p>
                        <p><em>הטבע עושה את הקסם הכימי!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>סוללות הן כמו חיות מחמד</strong> - צריך לטפל בהן בזהירות! אל תפתחו אותן, אל תזרקו לאש, ואל תחשפו אותן לחום גבוה. הן יכולות "להתפוצץ"!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם רואים סוללה, דמיינו אותה כמו "כדור אנרגיה" שמכיל אלפי אלקטרונים קטנים שמחכים לצאת לעבודה. אתם המנהלים שלהם!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"הסוללה מלמדת אותנו שהאנרגיה לא נעלמת, היא רק משנה צורה ומחכה לזמן הנכון"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  4: {
    title: "חיבורי סדר",
    icon: "🔗",
    description: "ניתוח חיבור טורי",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">🔗</span>
                    <h3>חיבורי סדר</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>חיבור טורי הוא "שרשרת של ידיים"</strong> - כמו שאנשים עומדים בשורה ומחזיקים ידיים, האלקטרונים עוברים מאחד לשני בסדר מסודר, כמו במשחק "טלפון שבור".</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם מחברים נורות בטור, אתם בעצם יוצרים "שרשרת של אורות" - כל נורה תלויה באחרת. אתם בונים צוות שבו כולם עובדים יחד!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>דמיינו שרשרת של נורות:</strong></p>
                        <p>🔋 סוללה → 💡 נורה 1 → 💡 נורה 2 → 💡 נורה 3</p>
                        <p><em>האלקטרונים עוברים דרך כל נורה בסדר!</em></p>
                        <p><strong>מה קורה אם נורה אחת נשרפת?</strong></p>
                        <p>❌ כל השרשרת נעצרת - כמו שרשרת שבורה!</p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>בחיבור טורי - כולם או אף אחד!</strong> אם נורה אחת נשרפת או נופלת, כל השרשרת נעצרת. זה כמו שרשרת - אם חוליה אחת נשברת, הכל נופל!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם בודקים חיבור טורי, דמיינו שאתם עוקבים אחרי מסר שעובר מיד ליד. אם מישהו באמצע לא מעביר אותו, המסר לא מגיע לסוף!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"החיבור הטורי מלמד אותנושאנחנו עובדים יחד בשרשרת, כולנו חשובים באותה מידה"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  5: {
    title: "חיבורי מקביל",
    icon: "🔌",
    description: "ניתוח חיבור מקבילי",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">🔌</span>
                    <h3>חיבורי מקביל</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>חיבור מקביל הוא "רשת של כבישים"</strong> - כמו שיש כביש ראשי שמתפצל לכבישים צדדיים, האלקטרונים יכולים לבחור איזה דרך ללכת. כל נורה מקבלת "כביש" משלה!</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם מחברים נורות במקביל, אתם בעצם יוצרים "עיר עם רחובות רבים" - כל נורה היא כמו בית עם דלת נפרדת. אתם מתכנני ערים של אור!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>דמיינו רשת של כבישים:</strong></p>
                        <p>🔋 סוללה</p>
                        <p>↗️ 💡 נורה 1</p>
                        <p>↘️ 💡 נורה 2</p>
                        <p>↘️ 💡 נורה 3</p>
                        <p><em>כל נורה מקבלת דרך נפרדת!</em></p>
                        <p><strong>מה קורה אם נורה אחת נשרפת?</strong></p>
                        <p>✅ השאר ממשיכות לעבוד - כמו כביש שנסגר אבל יש דרכים אחרות!</p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>בחיבור מקביל - כל אחד עצמאי!</strong> אם נורה אחת נשרפת, השאר ממשיכות לעבוד. זה כמו משפחה - אם אחד חולה, השאר ממשיכים לחיות!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם בודקים חיבור מקביל, דמיינו שאתם מתכננים עיר עם רחובות רבים. כל בית צריך להיות מחובר לכביש הראשי, אבל יש לו דרך משלו!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"החיבור המקביל מלמד אותנושאנחנו נותנים לכל אחד דרך משלו, כולם יכולים להצליח"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  6: {
    title: "מוליכים",
    icon: "🧰",
    description: "חומרים מעבירים חשמל",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">🧰</span>
                    <h3>מוליכים</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>מוליכים הם "כבישים מהירים" לאלקטרונים</strong> - חומרים שהאלקטרונים אוהבים לנסוע בהם, כמו שיש כבישים חלקים ומהירים למכוניות. האלקטרונים "שמחים" לעבור דרכם!</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם רואים חוט נחושת, דמיינו אותו כמו "מנהרה חלקה" שהאלקטרונים אוהבים לעבור בה. אתם בונים דרכים שהאלקטרונים "אוהבים" לנסוע בהן!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>מוליכים נפוצים:</strong></p>
                        <p>🥉 נחושת - כמו "כביש מהיר" - הכי טוב!</p>
                        <p>🥈 כסף - כמו "כביש זהב" - מעולה אבל יקר</p>
                        <p>🥉 אלומיניום - כמו "כביש טוב" - קל וזול</p>
                        <p>🔧 ברזל - כמו "כביש רגיל" - עובד אבל לא הכי טוב</p>
                        <p><em>האלקטרונים אוהבים נחושת יותר מכל!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>לא כל המתכות זהות!</strong> נחושת היא המוליך הכי טוב, אבל היא יקרה. אלומיניום זול יותר אבל פחות טוב. תמיד בחרו את המתכת המתאימה למטרה!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם רואים חוט חשמל, דמיינו אותו כמו "מנהרה" שהאלקטרונים אוהבים לעבור בה. ככל שהמנהרה חלקה יותר (נחושת), האלקטרונים "שמחים" יותר!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"המוליכים מלמדים אותנושאנחנו בונים דרכים טובות, כולם רוצים לעבור בהן"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  7: {
    title: "מבודדים",
    icon: "🚧",
    description: "חומרים שאינם מוליכים",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">🚧</span>
                    <h3>מבודדים</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>מבודדים הם "חומות מגן" לאלקטרונים</strong> - חומרים שהאלקטרונים לא יכולים לעבור דרכם, כמו חומה גבוהה שמונעת ממכוניות לעבור. הם מגנים עלינו מפני חשמל!</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם לובשים כפפות גומי או משתמשים במברג עם ידית פלסטיק, אתם בעצם "לובשים שריון" נגד האלקטרונים. אתם מגנים על עצמכם!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>מבודדים נפוצים:</strong></p>
                        <p>🟦 פלסטיק - כמו "חומה חזקה" - הכי נפוץ!</p>
                        <p>🟫 עץ - כמו "חומה טבעית" - טוב אבל לא מושלם</p>
                        <p>🟨 גומי - כמו "חומה גמישה" - מעולה לכפפות</p>
                        <p>🟪 זכוכית - כמו "חומה שקופה" - יפה אבל שבירה</p>
                        <p>🟩 קרמיקה - כמו "חומה קשה" - עמידה בחום</p>
                        <p><em>הפלסטיק הוא המבודד הכי נפוץ!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>מבודדים הם המגנים שלנו!</strong> לעולם אל תסירו את הפלסטיק מחוטי החשמל או תשתמשו במברגים בלי ידיות מבודדות. המבודדים שומרים על החיים שלכם!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם רואים חוט חשמל, דמיינו שהפלסטיק שמסביב הוא "שריון" שמגן עליכם. ככל שהשריון עבה יותר, אתם בטוחים יותר!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"המבודדים מלמדים אותנו שלפעמים הדרך הכי טובה לעזור היא למנוע נזק"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  8: {
    title: "סמל וולט",
    icon: "⚡️V",
    description: "מהו מתח חשמלי",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">⚡️V</span>
                    <h3>סמל וולט</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>וולט הוא "הלחץ" של החשמל</strong> - כמו שיש לחץ מים בצינור, יש לחץ חשמלי בחוט. ככל שהלחץ גבוה יותר, האלקטרונים "דוחפים" חזק יותר!</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם רואים מספר וולט, דמיינו אותו כמו "כוח הדחיפה" של האלקטרונים. אתם בעצם בודקים כמה "חזקים" האלקטרונים שלכם!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>דוגמאות מתח:</strong></p>
                        <p>🔋 סוללה 1.5V - כמו "דחיפה חלשה" - לנורות קטנות</p>
                        <p>🔌 שקע 220V - כמו "דחיפה חזקה" - למכשירים גדולים</p>
                        <p>⚡ ברק 100,000V - כמו "דחיפה ענקית" - מאוד מסוכן!</p>
                        <p>📱 טלפון 5V - כמו "דחיפה בינונית" - לטעינה</p>
                        <p><em>ככל שהמספר גדול יותר, הדחיפה חזקה יותר!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>מתח גבוה = סכנה גבוהה!</strong> 220 וולט מהשקע יכול להיות קטלני! לעולם אל תיגעו בחוטים חשופים או תפתחו מכשירים מחוברים לחשמל. המתח הוא כמו "נחש רעיל"!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם רואים מספר וולט, דמיינו אותו כמו "כוח של דחיפה". 1.5V זה כמו דחיפה עדינה, 220V זה כמו דחיפה חזקה מאוד!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"הוולט מלמד אותנו שכוח צריך להיות מדוד ומבוקר כדי להיות שימושי"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  9: {
    title: "סמל אמפר",
    icon: "⚡️A",
    description: "מהו זרם חשמלי",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">⚡️A</span>
                    <h3>סמל אמפר</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>אמפר הוא "כמות האלקטרונים" שעוברים</strong> - כמו שיש זרימה של מים בצינור (ליטרים לדקה), יש זרימה של אלקטרונים בחוט (אלקטרונים לשנייה). ככל שיש יותר אלקטרונים, הזרם חזק יותר!</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם רואים מספר אמפר, דמיינו אותו כמו "כמות העובדים" שעוברים בחוט. אתם בודקים כמה "עובדים אלקטרונים" עובדים בשבילכם!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>דוגמאות זרם:</strong></p>
                        <p>💡 נורה קטנה 0.1A - כמו "עובד אחד" - מעט אלקטרונים</p>
                        <p>📱 טלפון 1A - כמו "עשרה עובדים" - זרם בינוני</p>
                        <p>🔌 מחשב 5A - כמו "חמישים עובדים" - זרם חזק</p>
                        <p>⚡ מכשיר גדול 10A - כמו "מאה עובדים" - זרם מאוד חזק</p>
                        <p><em>ככל שהמספר גדול יותר, יש יותר אלקטרונים שעוברים!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>זרם גבוה = חום גבוה!</strong> ככל שיש יותר אלקטרונים שעוברים, החוט מתחמם יותר. זרם של 10 אמפר יכול לחמם חוט עד שהוא נמס! תמיד השתמשו בחוטים מתאימים!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם רואים מספר אמפר, דמיינו אותו כמו "כמות המכוניות" שעוברות בכביש. 1A זה כמו מכונית אחת, 10A זה כמו עשר מכוניות - יותר תנועה!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"האמפר מלמד אותנו שכמות העבודה תלויה בכמות העובדים"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
  10: {
    title: "סמל אום",
    icon: "Ω",
    description: "התנגדות בסיסית",
    level: "רמה 1: יסודות החשמל",
    content: `
            <div class="card-content">
                <div class="main-title">
                    <span class="title-icon">Ω</span>
                    <h3>סמל אום</h3>
                </div>
                
                <div class="innovative-idea">
                    <h4>🧠 רעיון חדשני</h4>
                    <p><strong>אום הוא "החיכוך" של החשמל</strong> - כמו שיש חיכוך כשאתם דוחפים משהו על הרצפה, יש חיכוך כשהאלקטרונים עוברים בחומר. ככל שהחיכוך גדול יותר, האלקטרונים מתקשים יותר לעבור!</p>
                </div>

                <div class="self-reflection">
                    <h4>👁️ זווית להתבוננות עצמית</h4>
                    <p>כשאתם רואים מספר אום, דמיינו אותו כמו "הקושי" שהאלקטרונים מרגישים כשהם עוברים. אתם בודקים כמה "קשה" הדרך עבור האלקטרונים!</p>
                </div>

                <div class="concrete-example">
                    <h4>🧩 דוגמה מוחשית</h4>
                    <div class="example-box">
                        <p><strong>דוגמאות התנגדות:</strong></p>
                        <p>🥉 נחושת 0.01Ω - כמו "כביש חלק" - קל לעבור</p>
                        <p>🥈 ברזל 0.1Ω - כמו "כביש רגיל" - קצת קשה</p>
                        <p>🥉 ניקל 0.2Ω - כמו "כביש מחוספס" - יותר קשה</p>
                        <p>🚧 פלסטיק 1,000,000Ω - כמו "חומה" - בלתי אפשרי!</p>
                        <p><em>ככל שהמספר גדול יותר, קשה יותר לעבור!</em></p>
                    </div>
                </div>

                <div class="warning-section">
                    <h4>⚠️ כלל זהב</h4>
                    <p><strong>התנגדות גבוהה = חום גבוה!</strong> כשהאלקטרונים מתקשים לעבור, הם יוצרים חום. נגד של 1000 אום יכול להתחמם מאוד! תמיד השתמשו בנגדים מתאימים!</p>
                </div>

                <div class="practical-tip">
                    <h4>🌟 טיפ פרקטי</h4>
                    <p>כשאתם רואים מספר אום, דמיינו אותו כמו "רמת הקושי" של הדרך. 1Ω זה כמו הליכה רגילה, 1000Ω זה כמו הליכה בחול, 1,000,000Ω זה כמו ניסיון לעבור דרך קיר!</p>
                </div>

                <div class="inspiration-quote">
                    <h4>✨ משפט השראה</h4>
                    <div class="quote-box">
                        <p><em>"האום מלמד אותנו שלפעמים הקושי בדרך הוא מה שהופך את המסע למעניין"</em></p>
                    </div>
                </div>
            </div>
        `,
  },
};

// יצירת המודל
function createModal() {
  const modalHTML = `
        <div id="cardModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close">&times;</span>
                    <div class="modal-title">
                        <span id="modalIcon" class="modal-icon"></span>
                        <h2 id="modalTitle"></h2>
                    </div>
                    <div class="modal-level" id="modalLevel"></div>
                </div>
                <div class="modal-body" id="modalBody">
                </div>
            </div>
        </div>
    `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// פתיחת המודל
function openModal(cardNumber) {
  // בדיקה שכל הסקריפטים נטענו
  if (
    !window.level1Cards ||
    !window.level2Cards ||
    !window.level3Cards ||
    !window.level4Cards ||
    !window.level5Cards
  ) {
    console.log("הסקריפטים עדיין נטענים...");
    setTimeout(() => openModal(cardNumber), 500);
    return;
  }

  // איחוד כל הקלפים מכל הרמות
  const allCards = {
    ...cardsData,
    ...window.level1Cards,
    ...window.level2Cards,
    ...window.level3Cards,
    ...window.level4Cards,
    ...window.level5Cards,
  };

  const card = allCards[cardNumber];
  if (!card) {
    console.log(`קלף מספר ${cardNumber} לא נמצא`);
    console.log("קלפים זמינים:", Object.keys(allCards));
    return;
  }

  const modal = document.getElementById("cardModal");
  const modalIcon = document.getElementById("modalIcon");
  const modalTitle = document.getElementById("modalTitle");
  const modalLevel = document.getElementById("modalLevel");
  const modalBody = document.getElementById("modalBody");

  modalIcon.textContent = card.icon;
  modalTitle.textContent = card.title;
  modalLevel.textContent = card.level;
  modalBody.innerHTML = card.content;

  modal.style.display = "block";

  // אפקט פתיחה
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

// סגירת המודל
function closeModal() {
  const modal = document.getElementById("cardModal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

// הוספת מאזיני אירועים
function addEventListeners() {
  // סגירה בלחיצה על X
  document.querySelector(".close").addEventListener("click", closeModal);

  // סגירה בלחיצה מחוץ למודל
  document.getElementById("cardModal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // סגירה עם מקש Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

// הוספת מאזיני אירועים לשורות הטבלה
function addCardClickListeners() {
  // בדיקה שכל הסקריפטים נטענו
  if (
    !window.level1Cards ||
    !window.level2Cards ||
    !window.level3Cards ||
    !window.level4Cards ||
    !window.level5Cards
  ) {
    console.log("הסקריפטים עדיין נטענים, מנסה שוב...");
    setTimeout(addCardClickListeners, 1000);
    return;
  }

  const rows = document.querySelectorAll("table tr");

  rows.forEach((row, index) => {
    if (index === 0) return; // דילוג על שורת הכותרות

    row.addEventListener("click", function () {
      const cardNumber = parseInt(this.cells[0].textContent);
      console.log(`לחיצה על קלף מספר ${cardNumber}`);
      openModal(cardNumber);
    });

    // הוספת סגנון cursor pointer
    row.style.cursor = "pointer";
  });

  console.log("מאזיני לחיצה נוספו לכל השורות");
}

// אתחול המודל
function initModal() {
  createModal();
  addEventListeners();

  // המתנה לטעינת כל הסקריפטים
  setTimeout(() => {
    addCardClickListeners();
  }, 2000);
}

// הפעלת המודל כשהדף נטען
document.addEventListener("DOMContentLoaded", initModal);

// הודעת דיבאג
console.log("cards-modal.js נטען בהצלחה");
