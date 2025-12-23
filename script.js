// Lessons Data - دروس شاملة لبايثون
const lessons = [
    // Beginner Level - المستوى المبتدئ
    {
        id: 1,
        title: "مقدمة في بايثون",
        description: "تعرف على لغة بايثون، تاريخها، استخداماتها، وكيفية تثبيتها وإعداد بيئة العمل",
        level: "beginner",
        duration: "15 دقيقة",
        icon: "fas fa-play-circle",
        content: `
            <h3>ما هي لغة بايثون؟</h3>
            <p>بايثون هي لغة برمجة عالية المستوى، سهلة التعلم وقوية في نفس الوقت. تم إنشاؤها بواسطة Guido van Rossum وتم إصدارها لأول مرة في عام 1991.</p>
            
            <h3>لماذا بايثون؟</h3>
            <ul>
                <li><strong>سهولة التعلم:</strong> صياغة بسيطة وواضحة تشبه اللغة الإنجليزية</li>
                <li><strong>متعددة الاستخدامات:</strong> تطوير الويب، الذكاء الاصطناعي، تحليل البيانات، الأتمتة</li>
                <li><strong>مجتمع كبير:</strong> دعم واسع ومكتبات كثيرة</li>
                <li><strong>مفتوحة المصدر:</strong> مجانية ومتاحة للجميع</li>
            </ul>
            
            <h3>تثبيت بايثون</h3>
            <p>لبدء استخدام بايثون، تحتاج إلى تثبيتها على جهازك:</p>
            <ol>
                <li>اذهب إلى <a href="https://www.python.org/downloads/" target="_blank">python.org</a></li>
                <li>حمّل أحدث إصدار من بايثون</li>
                <li>شغّل المثبت واتبع التعليمات</li>
                <li>تأكد من تحديد خيار "Add Python to PATH"</li>
            </ol>
            
            <h3>أول برنامج في بايثون</h3>
            <p>بعد التثبيت، افتح Terminal أو Command Prompt واكتب:</p>
            <pre><code>python --version</code></pre>
            <p>لإنشاء أول برنامج، أنشئ ملف hello.py واكتب:</p>
            <pre><code>print("مرحباً بك في عالم بايثون!")</code></pre>
        `,
        videoUrl: "rfscVS0vtbw",
        codeExample: `# أول برنامج في بايثون
print("مرحباً بك في عالم بايثون!")
print("Python هو رائع!")`
    },
    {
        id: 2,
        title: "المتغيرات وأنواع البيانات",
        description: "تعلم كيفية تعريف المتغيرات واستخدام أنواع البيانات المختلفة في بايثون",
        level: "beginner",
        duration: "20 دقيقة",
        icon: "fas fa-code",
        content: `
            <h3>المتغيرات في بايثون</h3>
            <p>المتغير هو مكان في الذاكرة لتخزين البيانات. في بايثون، لا تحتاج إلى تعريف نوع المتغير مسبقاً.</p>
            
            <h3>أنواع البيانات الأساسية</h3>
            <ul>
                <li><strong>int (أعداد صحيحة):</strong> مثل 5, 10, -3</li>
                <li><strong>float (أعداد عشرية):</strong> مثل 3.14, 2.5, -0.5</li>
                <li><strong>str (نصوص):</strong> مثل "مرحباً", 'Python'</li>
                <li><strong>bool (منطقية):</strong> True أو False</li>
                <li><strong>None:</strong> تمثل عدم وجود قيمة</li>
            </ul>
            
            <h3>أمثلة عملية</h3>
            <pre><code># أعداد صحيحة
age = 25
count = 100

# أعداد عشرية
price = 99.99
temperature = -5.5

# نصوص
name = "أحمد"
message = 'مرحباً بك'

# منطقية
is_student = True
is_working = False

# طباعة المتغيرات
print(f"الاسم: {name}, العمر: {age}")
print(f"السعر: {price} ريال")</code></pre>
            
            <h3>التحويل بين الأنواع</h3>
            <pre><code># تحويل نص إلى عدد
number_str = "123"
number = int(number_str)

# تحويل عدد إلى نص
age = 25
age_str = str(age)

# تحويل إلى float
price = float("99.99")</code></pre>
        `,
        videoUrl: "kqtD5dpn9C8",
        codeExample: `# تعريف المتغيرات
name = "أحمد"
age = 25
height = 175.5
is_student = True

# طباعة المتغيرات
print(f"الاسم: {name}")
print(f"العمر: {age}")
print(f"الطول: {height} سم")
print(f"طالب: {is_student}")

# العمليات الحسابية
x = 10
y = 5
print(f"الجمع: {x + y}")
print(f"الطرح: {x - y}")
print(f"الضرب: {x * y}")
print(f"القسمة: {x / y}")`
    },
    {
        id: 3,
        title: "القوائم (Lists)",
        description: "تعلم كيفية استخدام القوائم لتخزين مجموعات من البيانات",
        level: "beginner",
        duration: "25 دقيقة",
        icon: "fas fa-list",
        content: `
            <h3>ما هي القوائم؟</h3>
            <p>القائمة (List) هي مجموعة مرتبة من العناصر. يمكن أن تحتوي على أنواع بيانات مختلفة ويمكن تعديلها.</p>
            
            <h3>إنشاء قائمة</h3>
            <pre><code># قائمة أرقام
numbers = [1, 2, 3, 4, 5]

# قائمة نصوص
names = ["أحمد", "محمد", "فاطمة"]

# قائمة مختلطة
mixed = [1, "نص", 3.14, True]

# قائمة فارغة
empty_list = []</code></pre>
            
            <h3>الوصول للعناصر</h3>
            <pre><code>fruits = ["تفاح", "موز", "برتقال"]

# الوصول للعنصر الأول (الفهرس يبدأ من 0)
print(fruits[0])  # تفاح

# الوصول للعنصر الأخير
print(fruits[-1])  # برتقال

# الوصول لمدى من العناصر
print(fruits[0:2])  # ['تفاح', 'موز']</code></pre>
            
            <h3>تعديل القوائم</h3>
            <pre><code>fruits = ["تفاح", "موز"]

# إضافة عنصر
fruits.append("برتقال")

# إدراج عنصر في موضع محدد
fruits.insert(1, "عنب")

# حذف عنصر
fruits.remove("موز")

# حذف آخر عنصر
last = fruits.pop()</code></pre>
            
            <h3>طرق مفيدة</h3>
            <pre><code>numbers = [3, 1, 4, 1, 5]

# طول القائمة
print(len(numbers))  # 5

# الترتيب
numbers.sort()  # [1, 1, 3, 4, 5]

# عكس الترتيب
numbers.reverse()

# عدد مرات ظهور عنصر
print(numbers.count(1))  # 2</code></pre>
        `,
        videoUrl: "rfscVS0vtbw",
        codeExample: `# إنشاء قائمة
students = ["أحمد", "محمد", "فاطمة", "علي"]

# طباعة القائمة
print("الطلاب:", students)

# الوصول للعناصر
print(f"الطالب الأول: {students[0]}")
print(f"الطالب الأخير: {students[-1]}")

# إضافة طالب جديد
students.append("سارة")
print("بعد الإضافة:", students)

# حذف طالب
students.remove("محمد")
print("بعد الحذف:", students)

# عدد الطلاب
print(f"عدد الطلاب: {len(students)}")

# تكرار القائمة
numbers = [1, 2, 3] * 3
print("أرقام مكررة:", numbers)`
    },
    {
        id: 4,
        title: "القواميس (Dictionaries)",
        description: "تعلم كيفية استخدام القواميس لتخزين البيانات بشكل زوجي (مفتاح-قيمة)",
        level: "beginner",
        duration: "25 دقيقة",
        icon: "fas fa-book",
        content: `
            <h3>ما هي القواميس؟</h3>
            <p>القاموس (Dictionary) هو مجموعة غير مرتبة من العناصر على شكل أزواج (مفتاح: قيمة).</p>
            
            <h3>إنشاء قاموس</h3>
            <pre><code># قاموس بسيط
student = {
    "name": "أحمد",
    "age": 20,
    "grade": "A"
}

# قاموس فارغ
empty_dict = {}

# استخدام dict()
person = dict(name="محمد", age=25)</code></pre>
            
            <h3>الوصول للقيم</h3>
            <pre><code>student = {"name": "أحمد", "age": 20}

# الوصول باستخدام المفتاح
print(student["name"])  # أحمد

# الوصول باستخدام get (أكثر أماناً)
print(student.get("age"))  # 20
print(student.get("grade", "غير محدد"))  # قيمة افتراضية</code></pre>
            
            <h3>تعديل القواميس</h3>
            <pre><code>student = {"name": "أحمد"}

# إضافة/تعديل عنصر
student["age"] = 20
student["grade"] = "A"

# حذف عنصر
del student["grade"]

# أو استخدام pop
age = student.pop("age")</code></pre>
            
            <h3>طرق مفيدة</h3>
            <pre><code>student = {"name": "أحمد", "age": 20, "grade": "A"}

# الحصول على جميع المفاتيح
keys = student.keys()

# الحصول على جميع القيم
values = student.values()

# الحصول على جميع الأزواج
items = student.items()

# التحقق من وجود مفتاح
if "name" in student:
    print("المفتاح موجود")

# نسخ قاموس
new_student = student.copy()</code></pre>
        `,
        videoUrl: "daefaLgNkw0",
        codeExample: `# إنشاء قاموس
student = {
    "name": "أحمد",
    "age": 20,
    "grades": [95, 87, 92],
    "is_active": True
}

# الوصول للقيم
print(f"الاسم: {student['name']}")
print(f"العمر: {student.get('age')}")

# إضافة معلومات جديدة
student["email"] = "ahmed@example.com"
student["city"] = "الرياض"

# طباعة جميع المعلومات
for key, value in student.items():
    print(f"{key}: {value}")

# حساب المعدل
grades = student["grades"]
average = sum(grades) / len(grades)
print(f"المعدل: {average}")`
    },
    {
        id: 5,
        title: "الشروط (Conditionals)",
        description: "تعلم استخدام if, elif, else لاتخاذ القرارات في البرنامج",
        level: "beginner",
        duration: "20 دقيقة",
        icon: "fas fa-code-branch",
        content: `
            <h3>الشروط في بايثون</h3>
            <p>تسمح الشروط للبرنامج باتخاذ قرارات بناءً على شروط معينة.</p>
            
            <h3>if Statement</h3>
            <pre><code>age = 18

if age >= 18:
    print("أنت بالغ")
    print("يمكنك التصويت")</code></pre>
            
            <h3>if-else</h3>
            <pre><code>temperature = 25

if temperature > 30:
    print("الجو حار")
else:
    print("الجو معتدل")</code></pre>
            
            <h3>if-elif-else</h3>
            <pre><code>score = 85

if score >= 90:
    grade = "ممتاز"
elif score >= 80:
    grade = "جيد جداً"
elif score >= 70:
    grade = "جيد"
else:
    grade = "مقبول"

print(f"الدرجة: {grade}")</code></pre>
            
            <h3>الشروط المتداخلة</h3>
            <pre><code>age = 20
has_license = True

if age >= 18:
    if has_license:
        print("يمكنك القيادة")
    else:
        print("تحتاج رخصة قيادة")
else:
    print("عمرك غير كافٍ")</code></pre>
            
            <h3>المشغلات المنطقية</h3>
            <pre><code># and (و)
if age >= 18 and has_license:
    print("يمكنك القيادة")

# or (أو)
if age < 18 or age > 65:
    print("تأمين خاص")

# not (ليس)
if not is_student:
    print("ليس طالب")</code></pre>
        `,
        videoUrl: "DZwmZ8Usvnk",
        codeExample: `# مثال شامل على الشروط
age = 20
has_license = True
is_student = True

# فحص العمر
if age >= 18:
    print("أنت بالغ")
    if has_license:
        print("يمكنك القيادة")
    else:
        print("تحتاج رخصة قيادة")
else:
    print("عمرك غير كافٍ")

# فحص الطالب
if is_student and age < 25:
    print("طالب جامعي")
elif is_student:
    print("طالب دراسات عليا")
else:
    print("ليس طالب")

# نظام الدرجات
score = 87
if score >= 90:
    grade = "A+"
elif score >= 85:
    grade = "A"
elif score >= 80:
    grade = "B+"
elif score >= 75:
    grade = "B"
else:
    grade = "C"

print(f"الدرجة: {grade}")`
    },
    {
        id: 6,
        title: "الحلقات (Loops)",
        description: "تعلم استخدام for و while لتكرار تنفيذ الأوامر",
        level: "beginner",
        duration: "30 دقيقة",
        icon: "fas fa-redo",
        content: `
            <h3>الحلقات في بايثون</h3>
            <p>الحلقات تسمح بتنفيذ كود معين عدة مرات.</p>
            
            <h3>حلقة for</h3>
            <pre><code># التكرار على قائمة
fruits = ["تفاح", "موز", "برتقال"]
for fruit in fruits:
    print(fruit)

# التكرار على نطاق
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# التكرار مع الفهرس
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")</code></pre>
            
            <h3>حلقة while</h3>
            <pre><code># حلقة بسيطة
count = 0
while count < 5:
    print(count)
    count += 1

# حلقة مع شرط
password = ""
while password != "secret":
    password = input("أدخل كلمة المرور: ")
print("تم الدخول!")</code></pre>
            
            <h3>break و continue</h3>
            <pre><code># break - إيقاف الحلقة
for i in range(10):
    if i == 5:
        break
    print(i)  # يطبع 0-4 فقط

# continue - تخطي التكرار الحالي
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # يطبع الأرقام الفردية فقط</code></pre>
            
            <h3>حلقات متداخلة</h3>
            <pre><code># جدول الضرب
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i} × {j} = {i * j}")
    print()  # سطر فارغ</code></pre>
        `,
        videoUrl: "OnDr4J2UXSA",
        codeExample: `# حلقة for على قائمة
students = ["أحمد", "محمد", "فاطمة", "علي"]
for student in students:
    print(f"مرحباً {student}")

# حلقة for مع range
print("\\nالأرقام من 1 إلى 10:")
for i in range(1, 11):
    print(i, end=" ")

# حلقة while
print("\\n\\nالعد التنازلي:")
count = 10
while count > 0:
    print(count)
    count -= 1
print("انطلق!")

# حلقة مع break
print("\\nالبحث عن رقم 7:")
for i in range(1, 11):
    if i == 7:
        print(f"وجدت {i}!")
        break
    print(i)

# حلقة مع continue
print("\\nالأرقام الفردية:")
for i in range(1, 11):
    if i % 2 == 0:
        continue
    print(i)`
    },
    // Intermediate Level - المستوى المتوسط
    {
        id: 7,
        title: "الدوال (Functions)",
        description: "تعلم كيفية إنشاء واستخدام الدوال لتنظيم الكود وإعادة استخدامه",
        level: "intermediate",
        duration: "35 دقيقة",
        icon: "fas fa-cogs",
        content: `
            <h3>ما هي الدوال؟</h3>
            <p>الدالة (Function) هي كتلة من الكود قابلة لإعادة الاستخدام تؤدي مهمة محددة.</p>
            
            <h3>إنشاء دالة بسيطة</h3>
            <pre><code>def greet():
    print("مرحباً!")

# استدعاء الدالة
greet()</code></pre>
            
            <h3>دالة مع معاملات</h3>
            <pre><code>def greet(name):
    print(f"مرحباً {name}!")

greet("أحمد")

# دالة مع معاملات متعددة
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8</code></pre>
            
            <h3>معاملات افتراضية</h3>
            <pre><code>def greet(name, greeting="مرحباً"):
    print(f"{greeting} {name}!")

greet("أحمد")  # مرحباً أحمد!
greet("محمد", "أهلاً")  # أهلاً محمد!</code></pre>
            
            <h3>معاملات متعددة (*args و **kwargs)</h3>
            <pre><code># *args - معاملات متعددة
def sum_numbers(*args):
    return sum(args)

print(sum_numbers(1, 2, 3, 4, 5))  # 15

# **kwargs - معاملات مسماة
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="أحمد", age=25, city="الرياض")</code></pre>
            
            <h3>Lambda Functions</h3>
            <pre><code># دالة lambda بسيطة
square = lambda x: x ** 2
print(square(5))  # 25

# استخدام مع map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]</code></pre>
        `,
        videoUrl: "9Os0o3wzS_I",
        codeExample: `# دالة بسيطة
def greet(name):
    return f"مرحباً {name}!"

print(greet("أحمد"))

# دالة مع معاملات متعددة
def calculate_area(length, width):
    area = length * width
    return area

rectangle_area = calculate_area(5, 3)
print(f"مساحة المستطيل: {rectangle_area}")

# دالة مع معاملات افتراضية
def introduce(name, age=18, city="غير محدد"):
    return f"الاسم: {name}, العمر: {age}, المدينة: {city}"

print(introduce("محمد"))
print(introduce("فاطمة", 22, "جدة"))

# دالة مع *args
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(f"المجموع: {sum_all(1, 2, 3, 4, 5)}")

# Lambda function
square = lambda x: x ** 2
print(f"مربع 7: {square(7)}")`
    },
    {
        id: 8,
        title: "الكلاسات والكائنات (OOP)",
        description: "تعلم البرمجة الكائنية باستخدام الكلاسات والكائنات",
        level: "intermediate",
        duration: "40 دقيقة",
        icon: "fas fa-cube",
        content: `
            <h3>البرمجة الكائنية (OOP)</h3>
            <p>البرمجة الكائنية تسمح بتنظيم الكود في كائنات تحتوي على بيانات ووظائف.</p>
            
            <h3>إنشاء كلاس بسيط</h3>
            <pre><code>class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"أنا {self.name} وعمري {self.age}"

# إنشاء كائن
person1 = Person("أحمد", 25)
print(person1.introduce())</code></pre>
            
            <h3>الخصائص والطرق</h3>
            <pre><code>class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        self.speed = 0
    
    def accelerate(self, amount):
        self.speed += amount
    
    def brake(self, amount):
        self.speed = max(0, self.speed - amount)
    
    def get_info(self):
        return f"{self.brand} {self.model} - السرعة: {self.speed}"

car = Car("تويوتا", "كامري")
car.accelerate(50)
print(car.get_info())</code></pre>
            
            <h3>الوراثة (Inheritance)</h3>
            <pre><code>class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "صوت حيوان"

class Dog(Animal):
    def speak(self):
        return "نباح!"

class Cat(Animal):
    def speak(self):
        return "مواء!"

dog = Dog("ريكس")
print(dog.speak())  # نباح!</code></pre>
            
            <h3>Encapsulation</h3>
            <pre><code>class BankAccount:
    def __init__(self, balance):
        self._balance = balance  # protected
        self.__pin = "1234"      # private
    
    def deposit(self, amount):
        self._balance += amount
    
    def get_balance(self):
        return self._balance</code></pre>
        `,
        videoUrl: "JeznW_7DlB0",
        codeExample: `# كلاس Person
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"الاسم: {self.name}, العمر: {self.age}"
    
    def have_birthday(self):
        self.age += 1
        return f"عيد ميلاد سعيد! الآن عمرك {self.age}"

# إنشاء كائنات
person1 = Person("أحمد", 25)
person2 = Person("فاطمة", 22)

print(person1.introduce())
print(person2.introduce())
print(person1.have_birthday())

# كلاس Student يرث من Person
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        if self.grades:
            return sum(self.grades) / len(self.grades)
        return 0

student = Student("محمد", 20, "S12345")
student.add_grade(95)
student.add_grade(87)
student.add_grade(92)
print(f"{student.name} - المعدل: {student.get_average()}")`
    },
    {
        id: 9,
        title: "معالجة الملفات",
        description: "تعلم كيفية قراءة وكتابة الملفات في بايثون",
        level: "intermediate",
        duration: "30 دقيقة",
        icon: "fas fa-file",
        content: `
            <h3>قراءة الملفات</h3>
            <pre><code># قراءة ملف نصي
with open("file.txt", "r", encoding="utf-8") as file:
    content = file.read()
    print(content)

# قراءة سطر بسطر
with open("file.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())

# قراءة جميع الأسطر
with open("file.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()</code></pre>
            
            <h3>كتابة الملفات</h3>
            <pre><code># كتابة ملف جديد
with open("output.txt", "w", encoding="utf-8") as file:
    file.write("مرحباً بالعالم!")
    file.write("\\nهذا سطر جديد")

# إضافة للملف
with open("output.txt", "a", encoding="utf-8") as file:
    file.write("\\nسطر إضافي")</code></pre>
            
            <h3>معالجة JSON</h3>
            <pre><code>import json

# قراءة JSON
with open("data.json", "r", encoding="utf-8") as file:
    data = json.load(file)

# كتابة JSON
data = {"name": "أحمد", "age": 25}
with open("data.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=2)</code></pre>
        `,
        videoUrl: "rfscVS0vtbw",
        codeExample: `# محاكاة قراءة وكتابة الملفات
# في بيئة المتصفح، سنستخدم console.log بدلاً من الملفات

# محاكاة قراءة ملف
file_content = """مرحباً بك في بايثون
هذا مثال على قراءة الملفات
بايثون رائع!"""

print("محتوى الملف:")
print(file_content)

# محاكاة معالجة البيانات
lines = file_content.split("\\n")
print(f"\\nعدد الأسطر: {len(lines)}")

# محاكاة كتابة ملف
output_content = "\\n".join([f"السطر {i+1}: {line}" for i, line in enumerate(lines)])
print("\\nالمحتوى المعالج:")
print(output_content)

# مثال على JSON
import json

# بيانات
student_data = {
    "name": "أحمد",
    "age": 25,
    "grades": [95, 87, 92],
    "is_active": True
}

# تحويل إلى JSON
json_string = json.dumps(student_data, ensure_ascii=False, indent=2)
print("\\nJSON:")
print(json_string)

# تحويل من JSON
parsed_data = json.loads(json_string)
print(f"\\nالاسم: {parsed_data['name']}")`
    },
    {
        id: 10,
        title: "معالجة الأخطاء (Exception Handling)",
        description: "تعلم كيفية التعامل مع الأخطاء باستخدام try-except",
        level: "intermediate",
        duration: "25 دقيقة",
        icon: "fas fa-exclamation-triangle",
        content: `
            <h3>معالجة الأخطاء</h3>
            <p>في بايثون، نستخدم try-except للتعامل مع الأخطاء بشكل آمن.</p>
            
            <h3>try-except بسيط</h3>
            <pre><code>try:
    number = int(input("أدخل رقماً: "))
    result = 10 / number
    print(f"النتيجة: {result}")
except ValueError:
    print("خطأ: يجب إدخال رقم صحيح")
except ZeroDivisionError:
    print("خطأ: لا يمكن القسمة على صفر")</code></pre>
            
            <h3>معالجة أخطاء متعددة</h3>
            <pre><code>try:
    # كود قد يسبب أخطاء
    pass
except (ValueError, TypeError) as e:
    print(f"خطأ في القيمة أو النوع: {e}")
except Exception as e:
    print(f"خطأ عام: {e}")</code></pre>
            
            <h3>else و finally</h3>
            <pre><code>try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("الملف غير موجود")
else:
    print("تم قراءة الملف بنجاح")
finally:
    print("تنظيف الموارد")
    # file.close() إذا كان مفتوحاً</code></pre>
            
            <h3>رفع أخطاء مخصصة</h3>
            <pre><code>def check_age(age):
    if age < 0:
        raise ValueError("العمر لا يمكن أن يكون سالباً")
    if age > 150:
        raise ValueError("العمر غير منطقي")
    return age

try:
    check_age(-5)
except ValueError as e:
    print(f"خطأ: {e}")</code></pre>
        `,
        videoUrl: "NIWwJbo-9_8",
        codeExample: `# مثال شامل على معالجة الأخطاء

# مثال 1: القسمة
def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "خطأ: لا يمكن القسمة على صفر"
    except TypeError:
        return "خطأ: يجب إدخال أرقام"

print(safe_divide(10, 2))
print(safe_divide(10, 0))
print(safe_divide(10, "2"))

# مثال 2: تحويل النص إلى رقم
def convert_to_int(text):
    try:
        number = int(text)
        return f"الرقم: {number}"
    except ValueError:
        return f"خطأ: '{text}' ليس رقماً صحيحاً"

print(convert_to_int("123"))
print(convert_to_int("abc"))

# مثال 3: الوصول لعنصر في قائمة
def get_item(items, index):
    try:
        return items[index]
    except IndexError:
        return f"خطأ: الفهرس {index} غير موجود"
    except TypeError:
        return "خطأ: يجب إدخال قائمة"

numbers = [1, 2, 3, 4, 5]
print(get_item(numbers, 2))
print(get_item(numbers, 10))

# مثال 4: رفع خطأ مخصص
def check_positive(number):
    if number < 0:
        raise ValueError("الرقم يجب أن يكون موجباً")
    return number

try:
    print(check_positive(5))
    print(check_positive(-3))
except ValueError as e:
    print(f"خطأ: {e}")`
    },
    // Advanced Level - المستوى المتقدم
    {
        id: 11,
        title: "المولدات (Generators)",
        description: "تعلم استخدام المولدات لإنشاء متواليات فعالة في الذاكرة",
        level: "advanced",
        duration: "30 دقيقة",
        icon: "fas fa-magic",
        content: `
            <h3>ما هي المولدات؟</h3>
            <p>المولدات (Generators) هي دوال خاصة تُرجع مولداً بدلاً من قيمة واحدة. فهي فعالة في الذاكرة.</p>
            
            <h3>إنشاء مولد بسيط</h3>
            <pre><code>def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

counter = count_up_to(5)
for num in counter:
    print(num)  # 1, 2, 3, 4, 5</code></pre>
            
            <h3>Generator Expressions</h3>
            <pre><code># قائمة
squares_list = [x**2 for x in range(10)]

# مولد
squares_gen = (x**2 for x in range(10))

# المولد أكثر فعالية في الذاكرة
for square in squares_gen:
    print(square)</code></pre>
            
            <h3>مولدات متقدمة</h3>
            <pre><code>def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
for i in range(10):
    print(next(fib))</code></pre>
        `,
        videoUrl: "bD05uGo_sVI",
        codeExample: `# مولد بسيط
def count_down(n):
    while n > 0:
        yield n
        n -= 1

print("العد التنازلي:")
for num in count_down(5):
    print(num)

# مولد للأرقام الزوجية
def even_numbers(max_num):
    num = 0
    while num < max_num:
        yield num
        num += 2

print("\\nالأرقام الزوجية:")
for even in even_numbers(20):
    print(even, end=" ")

# Generator Expression
print("\\n\\nمربعات الأرقام:")
squares = (x**2 for x in range(1, 11))
for square in squares:
    print(square, end=" ")

# مولد فيبوناتشي
def fibonacci(limit):
    a, b = 0, 1
    count = 0
    while count < limit:
        yield a
        a, b = b, a + b
        count += 1

print("\\n\\nأول 10 أرقام فيبوناتشي:")
for fib in fibonacci(10):
    print(fib, end=" ")`
    },
    {
        id: 12,
        title: "الديكورات (Decorators)",
        description: "تعلم استخدام الديكورات لتعديل سلوك الدوال",
        level: "advanced",
        duration: "35 دقيقة",
        icon: "fas fa-paint-brush",
        content: `
            <h3>ما هي الديكورات؟</h3>
            <p>الديكورات (Decorators) هي دوال تأخذ دالة كمعامل وتعيد دالة معدلة.</p>
            
            <h3>ديكور بسيط</h3>
            <pre><code>def my_decorator(func):
    def wrapper():
        print("قبل استدعاء الدالة")
        func()
        print("بعد استدعاء الدالة")
    return wrapper

@my_decorator
def say_hello():
    print("مرحباً!")

say_hello()</code></pre>
            
            <h3>ديكور مع معاملات</h3>
            <pre><code>def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"الوقت المستغرق: {end - start:.2f} ثانية")
        return result
    return wrapper

@timer_decorator
def slow_function():
    time.sleep(1)
    return "تم التنفيذ"

slow_function()</code></pre>
            
            <h3>ديكورات متعددة</h3>
            <pre><code>def bold(func):
    def wrapper():
        return f"<b>{func()}</b>"
    return wrapper

def italic(func):
    def wrapper():
        return f"<i>{func()}</i>"
    return wrapper

@bold
@italic
def hello():
    return "مرحباً"

print(hello())  # <b><i>مرحباً</i></b></code></pre>
        `,
        videoUrl: "FsAPt_9Bf3U",
        codeExample: `# ديكور بسيط
def uppercase_decorator(func):
    def wrapper(text):
        result = func(text)
        return result.upper()
    return wrapper

@uppercase_decorator
def greet(name):
    return f"مرحباً {name}"

print(greet("أحمد"))

# ديكور لقياس الوقت
import time

def measure_time(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"الوقت: {end - start:.4f} ثانية")
        return result
    return wrapper

@measure_time
def calculate_sum(n):
    total = 0
    for i in range(n):
        total += i
    return total

result = calculate_sum(1000000)
print(f"المجموع: {result}")

# ديكور للتحقق من المعاملات
def check_positive(func):
    def wrapper(x):
        if x < 0:
            raise ValueError("الرقم يجب أن يكون موجباً")
        return func(x)
    return wrapper

@check_positive
def square(x):
    return x ** 2

print(f"مربع 5: {square(5)}")
try:
    print(square(-3))
except ValueError as e:
    print(f"خطأ: {e}")`
    }
];

// Achievements Data
const achievements = [
    {
        id: 1,
        title: "البداية",
        description: "أكمل أول درس",
        icon: "fas fa-star",
        requirement: { type: "lessons_completed", value: 1 },
        points: 10
    },
    {
        id: 2,
        title: "المبتدئ",
        description: "أكمل 5 دروس",
        icon: "fas fa-seedling",
        requirement: { type: "lessons_completed", value: 5 },
        points: 50
    },
    {
        id: 3,
        title: "المتقدم",
        description: "أكمل 10 دروس",
        icon: "fas fa-rocket",
        requirement: { type: "lessons_completed", value: 10 },
        points: 100
    },
    {
        id: 4,
        title: "المحترف",
        description: "أكمل 20 درس",
        icon: "fas fa-crown",
        requirement: { type: "lessons_completed", value: 20 },
        points: 200
    },
    {
        id: 5,
        title: "المستكشف",
        description: "جرب جميع المستويات",
        icon: "fas fa-compass",
        requirement: { type: "all_levels", value: true },
        points: 150
    },
    {
        id: 6,
        title: "المبرمج",
        description: "شغّل 10 أكواد بنجاح",
        icon: "fas fa-code",
        requirement: { type: "code_runs", value: 10 },
        points: 100
    },
    {
        id: 7,
        title: "المثابر",
        description: "تعلم لمدة 7 أيام متتالية",
        icon: "fas fa-fire",
        requirement: { type: "streak", value: 7 },
        points: 200
    },
    {
        id: 8,
        title: "الخبير",
        description: "أكمل جميع دروس المستوى المتقدم",
        icon: "fas fa-trophy",
        requirement: { type: "advanced_completed", value: true },
        points: 300
    }
];

// User Progress Storage
let userProgress = {
    completedLessons: [],
    achievements: [],
    codeRuns: 0,
    streakDays: 0,
    lastVisitDate: null,
    totalPoints: 0,
    levelProgress: {
        beginner: 0,
        intermediate: 0,
        advanced: 0
    }
};

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('pythonMasterProgress');
    if (saved) {
        userProgress = JSON.parse(saved);
        // Check streak
        checkStreak();
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('pythonMasterProgress', JSON.stringify(userProgress));
    updateUI();
}

// Check and update streak
function checkStreak() {
    const today = new Date().toDateString();
    const lastVisit = userProgress.lastVisitDate;
    
    if (!lastVisit) {
        userProgress.lastVisitDate = today;
        userProgress.streakDays = 1;
    } else if (lastVisit === today) {
        // Already visited today
    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastVisit === yesterday.toDateString()) {
            userProgress.streakDays++;
        } else {
            userProgress.streakDays = 1;
        }
        userProgress.lastVisitDate = today;
    }
    saveProgress();
}

// Pyodide instance
let pyodide = null;
let pyodideReady = false;
let pyodideLoading = false; // Prevent multiple simultaneous loads

// Initialize Pyodide - renamed to avoid conflicts
async function initializePyodide() {
    if (pyodide) return pyodide;
    if (pyodideLoading) {
        // Wait for ongoing load
        while (pyodideLoading) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        if (pyodide) return pyodide;
    }
    
    pyodideLoading = true;
    
    try {
        
        // Wait for Pyodide script to load
        let attempts = 0;
        const maxAttempts = 150; // 15 seconds total
        
        // First, check if script tag exists
        const pyodideScript = Array.from(document.getElementsByTagName('script')).find(
            s => s.src && s.src.includes('pyodide')
        );
        
        if (!pyodideScript) {
            const isLocal = window.location.protocol === 'file:';
            if (isLocal) {
                throw new Error('Pyodide script tag not found. الموقع يعمل محلياً - يحتاج اتصال بالإنترنت لتحميل Pyodide.');
            } else {
                throw new Error('Pyodide script tag not found. Please refresh the page.');
            }
        }
        
        // Wait for script to load and Pyodide to be available
        let pyodideLoadPyodideFunc = null;
        
        while (attempts < maxAttempts) {
            // Check if script loaded flag is set
            if (window.pyodideScriptLoaded) {
                // Wait a bit for Pyodide to initialize
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            
            // Try to get Pyodide's loadPyodide from different locations
            // Method 1: Direct from window (most common)
            // Store our function references to avoid confusion
            const ourFunctions = [initializePyodide, loadPyodide];
            
            if (typeof window.loadPyodide !== 'undefined') {
                const func = window.loadPyodide;
                // Check if it's a function and not our function
                if (typeof func === 'function' && !ourFunctions.includes(func)) {
                    // It's likely Pyodide's function
                    pyodideLoadPyodideFunc = func;
                    console.log('Found Pyodide loadPyodide function from window');
                    break;
                }
            }
            
            // Method 2: From self (for web workers)
            if (typeof self !== 'undefined' && typeof self.loadPyodide !== 'undefined') {
                const func = self.loadPyodide;
                if (typeof func === 'function' && !ourFunctions.includes(func)) {
                    pyodideLoadPyodideFunc = func;
                    console.log('Found Pyodide loadPyodide from self');
                    break;
                }
            }
            
            // Method 3: Check if script is loaded
            if (pyodideScript.readyState === 'complete' || pyodideScript.readyState === 'loaded' || pyodideScript.readyState === 'interactive') {
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (typeof window.loadPyodide !== 'undefined') {
                    const func = window.loadPyodide;
                    if (typeof func === 'function' && !ourFunctions.includes(func)) {
                        pyodideLoadPyodideFunc = func;
                        console.log('Found Pyodide loadPyodide after script load');
                        break;
                    }
                }
            }
            
            await new Promise(resolve => setTimeout(resolve, 200));
            attempts++;
        }
        
        if (!pyodideLoadPyodideFunc) {
            // Last attempt: wait longer and check again
            console.log('Last attempt to find Pyodide...');
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            // Try all methods again with longer wait
            const ourFunctions = [initializePyodide, loadPyodide];
            if (typeof window.loadPyodide !== 'undefined') {
                const func = window.loadPyodide;
                if (typeof func === 'function' && !ourFunctions.includes(func)) {
                    pyodideLoadPyodideFunc = func;
                    console.log('Found Pyodide in last attempt');
                }
            }
            
            // Also check if script has an onload that might have fired
            if (pyodideScript.onload || window.pyodideScriptLoaded) {
                await new Promise(resolve => setTimeout(resolve, 2000));
                if (typeof window.loadPyodide !== 'undefined') {
                    const func = window.loadPyodide;
                    if (typeof func === 'function' && !ourFunctions.includes(func)) {
                        pyodideLoadPyodideFunc = func;
                        console.log('Found Pyodide after onload');
                    }
                }
            }
        }
        
        if (!pyodideLoadPyodideFunc) {
            const isLocal = window.location.protocol === 'file:';
            if (isLocal) {
                throw new Error('Pyodide library not loaded. الموقع يعمل محلياً - يحتاج اتصال بالإنترنت. استخدم سيرفر محلي أو انشر الموقع.');
            } else {
                throw new Error('Pyodide library not loaded. Please check your internet connection and refresh the page.');
            }
        }
        
        // Load Pyodide
        console.log('Loading Pyodide...');
        pyodide = await pyodideLoadPyodideFunc({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
        });
        console.log('Pyodide loaded successfully!');
        
        // Set up stdout capture
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);
        
        // Override input() function to use prompt
        pyodide.runPython(`
from js import prompt

def input_override(prompt_text=''):
    result = prompt(prompt_text)
    if result is None:
        raise EOFError("EOF when reading a line")
    return result

__builtins__['input'] = input_override
        `);
        
        pyodideReady = true;
        pyodideLoading = false;
        console.log('Pyodide initialized successfully');
        return pyodide;
    } catch (error) {
        console.error('Error loading Pyodide:', error);
        pyodideReady = false;
        pyodideLoading = false;
        throw error; // Re-throw to handle in calling function
    }
}

// Alias for backward compatibility
async function loadPyodide() {
    return initializePyodide();
}

// Initialize
document.addEventListener('DOMContentLoaded', async function() {
    // Load Pyodide in background (don't await, let it load in background)
    // Wait a bit for page to fully load before starting Pyodide
    setTimeout(() => {
        console.log('Starting Pyodide preload...');
        loadPyodide().catch(error => {
            console.warn('Pyodide will be loaded on demand:', error);
        });
    }, 2000); // Wait 2 seconds for page to stabilize
    
    loadProgress();
    
    // Update hero stats with actual numbers
    updateHeroStats();
    
    // Only render lessons/achievements if elements exist (not on index page)
    const lessonsGrid = document.getElementById('lessonsGrid');
    const achievementsGrid = document.getElementById('achievementsGrid');
    
    if (lessonsGrid) {
        renderLessons();
    }
    if (achievementsGrid) {
        renderAchievements();
    }
    
    updateUI();
    setupEventListeners();
    animateNumbers();
    
    // Setup lesson modal close button - use event delegation (global, only add once)
    if (!window.modalCloseHandlerAdded) {
        document.addEventListener('click', function(e) {
            // Close modal when clicking X (close-modal class or × symbol or parent with close-modal)
            const closeBtn = e.target.closest('.close-modal');
            if (closeBtn || e.target.classList.contains('close-modal') || e.target.textContent.trim() === '×') {
                const modal = (closeBtn || e.target).closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    return;
                }
            }
            
            // Close modal when clicking outside (on modal background)
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        window.modalCloseHandlerAdded = true;
    }
});

// Render Lessons
function renderLessons(filter = 'all') {
    const grid = document.getElementById('lessonsGrid');
    grid.innerHTML = '';
    
    const filteredLessons = filter === 'all' 
        ? lessons 
        : lessons.filter(lesson => lesson.level === filter);
    
    filteredLessons.forEach(lesson => {
        const isCompleted = userProgress.completedLessons.includes(lesson.id);
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `
            <div class="lesson-icon">
                <i class="${lesson.icon}"></i>
            </div>
            <h3 class="lesson-title">${lesson.title}</h3>
            <p class="lesson-description">${lesson.description}</p>
            <div class="lesson-meta">
                <span class="lesson-badge badge-${lesson.level}">${getLevelName(lesson.level)}</span>
                <span class="lesson-duration"><i class="fas fa-clock"></i> ${lesson.duration}</span>
            </div>
            <div class="lesson-footer">
                ${isCompleted ? '<span class="lesson-completed"><i class="fas fa-check-circle"></i> مكتمل</span>' : ''}
                <button class="btn-primary" onclick="openLesson(${lesson.id})">ابدأ الدرس</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function getLevelName(level) {
    const names = {
        beginner: 'مبتدئ',
        intermediate: 'متوسط',
        advanced: 'متقدم'
    };
    return names[level] || level;
}

// Filter Lessons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderLessons(this.dataset.level);
    });
});

// Open Lesson Modal
function openLesson(lessonId) {
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    const modal = document.getElementById('lessonModal');
    document.getElementById('modalTitle').textContent = lesson.title;
    document.getElementById('modalLevel').textContent = getLevelName(lesson.level);
    document.getElementById('modalDuration').textContent = lesson.duration;
    
    // Content Tab
    document.getElementById('lessonContent').innerHTML = lesson.content;
    
    // Video Tab - Fixed YouTube embed issue (Error 153)
    const videoContainer = document.getElementById('lessonVideo');
    if (lesson.videoUrl) {
        // Extract video ID (now stored as just the ID)
        let videoId = lesson.videoUrl;
        
        // Handle different URL formats
        if (videoId.includes('/embed/')) {
            videoId = videoId.split('/embed/')[1].split('?')[0];
        } else if (videoId.includes('watch?v=')) {
            videoId = videoId.split('watch?v=')[1].split('&')[0];
        } else if (videoId.includes('youtu.be/')) {
            videoId = videoId.split('youtu.be/')[1].split('?')[0];
        }
        
        // Use YouTube nocookie domain to avoid privacy/embed restrictions
        // Add proper parameters to prevent Error 153
        const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
        
        videoContainer.innerHTML = `
            <div class="video-wrapper" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000; border-radius: 10px; margin-bottom: 1rem;">
                <iframe 
                    class="youtube-iframe"
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
                    src="${embedUrl}" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen
                    loading="lazy"
                    title="فيديو تعليمي">
                </iframe>
            </div>
            <div class="video-fallback" style="text-align: center; padding: 1rem; background: var(--card-bg); border-radius: 10px; border: 2px solid var(--primary-color);">
                <p style="margin-bottom: 1rem; color: var(--text-secondary);">إذا لم يظهر الفيديو، يمكنك مشاهدته مباشرة على YouTube:</p>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer" 
                   class="youtube-link" style="color: var(--primary-color); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; font-weight: 600; padding: 0.8rem 1.5rem; background: var(--darker-bg); border-radius: 25px; transition: all 0.3s;">
                    <i class="fab fa-youtube" style="font-size: 1.5rem; color: #FF0000;"></i>
                    <span>مشاهدة على YouTube</span>
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
    } else {
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <i class="fas fa-video"></i>
                <p>فيديو قريباً...</p>
            </div>
        `;
    }
    
    // Code Tab
    const savedCodes = JSON.parse(localStorage.getItem('savedCodes')) || {};
    document.getElementById('codeEditor').value = savedCodes[lessonId] || lesson.codeExample || '';
    const codeOutput = document.getElementById('codeOutput');
    codeOutput.textContent = '';
    
    // Check if running locally and show warning
    const isLocal = window.location.protocol === 'file:';
    if (isLocal && !pyodideReady) {
        codeOutput.textContent = '⚠️ ملاحظة: الموقع يعمل محلياً\n';
        codeOutput.textContent += 'Pyodide يحتاج اتصال بالإنترنت للعمل.\n';
        codeOutput.textContent += 'تأكد من وجود اتصال بالإنترنت قبل تشغيل الكود.';
        codeOutput.style.color = '#FFA500';
    }
    
    // Set lesson ID for rating and favorite
    document.getElementById('modalTitle').dataset.lessonId = lessonId;
    updateFavoriteButton(lessonId);
    updateRatingDisplay(lessonId);
    
    // Favorite button
    const favoriteBtn = document.getElementById('favoriteLessonBtn');
    if (favoriteBtn) {
        favoriteBtn.onclick = () => toggleFavorite(lessonId);
    }
    
    // Quiz Tab
    if (quizzes[lessonId]) {
        const quizTab = document.querySelector('[data-tab="quiz"]');
        if (quizTab) {
            quizTab.style.display = 'block';
            quizTab.onclick = () => renderQuiz(lessonId);
        }
    } else {
        const quizTab = document.querySelector('[data-tab="quiz"]');
        if (quizTab) {
            quizTab.style.display = 'none';
        }
    }
    
    // Navigation
    const currentIndex = lessons.findIndex(l => l.id === lessonId);
    const prevBtn = document.getElementById('prevLesson');
    const nextBtn = document.getElementById('nextLesson');
    const completeBtn = document.getElementById('completeLesson');
    
    if (prevBtn) {
        prevBtn.onclick = () => {
            if (currentIndex > 0) {
                openLesson(lessons[currentIndex - 1].id);
            }
        };
        prevBtn.disabled = currentIndex === 0;
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
    }
    
    if (nextBtn) {
        nextBtn.onclick = () => {
            if (currentIndex < lessons.length - 1) {
                openLesson(lessons[currentIndex + 1].id);
            }
        };
        nextBtn.disabled = currentIndex === lessons.length - 1;
        nextBtn.style.opacity = currentIndex === lessons.length - 1 ? '0.5' : '1';
        nextBtn.style.cursor = currentIndex === lessons.length - 1 ? 'not-allowed' : 'pointer';
    }
    
    // Complete button
    if (completeBtn) {
        const isCompleted = userProgress.completedLessons.includes(lessonId);
        completeBtn.textContent = isCompleted ? '✓ مكتمل' : 'إكمال الدرس';
        completeBtn.onclick = () => {
            completeLesson(lessonId);
            // Update button after completion
            setTimeout(() => {
                const updated = userProgress.completedLessons.includes(lessonId);
                completeBtn.textContent = updated ? '✓ مكتمل' : 'إكمال الدرس';
            }, 100);
        };
    }
    
    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector('.tab-btn').classList.add('active');
    document.getElementById('contentTab').classList.add('active');
    
    // Setup close button directly when opening lesson (ensure it always works)
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        // Remove any existing listeners by cloning and replacing
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        // Add new click listener
        newCloseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Also setup click outside modal to close
    const modalClickHandler = function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            modal.removeEventListener('click', modalClickHandler);
        }
    };
    modal.addEventListener('click', modalClickHandler);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabName = this.dataset.tab;
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        this.classList.add('active');
        document.getElementById(tabName + 'Tab').classList.add('active');
    });
});

// Close Modal - will be initialized in DOMContentLoaded

// Run Code - Real Python execution
async function runPythonCode() {
    const code = document.getElementById('codeEditor').value;
    const output = document.getElementById('codeOutput');
    
    if (!code.trim()) {
        output.textContent = 'يرجى إدخال كود Python';
        return;
    }
    
    // Show loading message
    output.textContent = 'جاري التنفيذ...\n';
    output.style.color = '#4CAF50';
    
    // Ensure Pyodide is loaded
    if (!pyodideReady || !pyodide) {
        output.textContent = 'جاري تحميل Python...\nيرجى الانتظار (قد يستغرق 10-15 ثانية)...';
        output.style.color = '#FFA500';
        
        try {
            await loadPyodide();
            if (!pyodideReady || !pyodide) {
                output.textContent = 'خطأ: فشل تحميل Python.\n\nالحلول المقترحة:\n1. تحقق من اتصال الإنترنت\n2. تحديث الصفحة (F5)\n3. مسح الكاش (Ctrl+Shift+R)';
                output.style.color = '#f44336';
                return;
            }
        } catch (error) {
            // Check if running locally (file:// protocol)
            const isLocal = window.location.protocol === 'file:';
            let errorMessage = `خطأ: فشل تحميل Python.\n\nالخطأ: ${error.message}\n\n`;
            
            if (isLocal) {
                errorMessage += '⚠️ الموقع يعمل محلياً (file://)\n';
                errorMessage += 'Pyodide يحتاج اتصال بالإنترنت للعمل.\n\n';
                errorMessage += 'الحلول:\n';
                errorMessage += '1. تأكد من وجود اتصال بالإنترنت\n';
                errorMessage += '2. استخدم سيرفر محلي (مثل Live Server في VS Code)\n';
                errorMessage += '3. أو انشر الموقع على سيرفر\n';
                errorMessage += '4. أو استخدم: python -m http.server في مجلد الموقع';
            } else {
                errorMessage += 'الحلول المقترحة:\n';
                errorMessage += '1. تحقق من اتصال الإنترنت\n';
                errorMessage += '2. تحديث الصفحة (F5)\n';
                errorMessage += '3. مسح الكاش (Ctrl+Shift+R)\n';
                errorMessage += '4. جرب متصفح آخر';
            }
            
            output.textContent = errorMessage;
            output.style.color = '#f44336';
            console.error('Pyodide loading error:', error);
            console.log('Protocol:', window.location.protocol);
            console.log('Is local:', isLocal);
            return;
        }
    }
    
    try {
        // Make sure pyodide is still available
        if (!pyodide) {
            throw new Error('Pyodide instance not available. Please refresh the page.');
        }
        
        // Reset stdout for fresh capture
        pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
        `);
        
        // Execute user code
        pyodide.runPython(code);
        
        // Get output
        const stdout = pyodide.runPython('sys.stdout.getvalue()');
        
        // Display result
        if (stdout && stdout.trim()) {
            output.textContent = stdout;
        } else {
            output.textContent = 'تم التنفيذ بنجاح ✓';
        }
        output.style.color = '#4CAF50';
        
        // Update code runs
        userProgress.codeRuns++;
        checkAchievements();
        saveProgress();
        
    } catch (error) {
        // Handle Python errors
        let errorMessage = '';
        
        // Try to get Python error from stdout first
        try {
            const errorOutput = pyodide.runPython('sys.stdout.getvalue()');
            if (errorOutput && errorOutput.trim()) {
                errorMessage = errorOutput;
            }
        } catch (e) {
            // If that fails, use the error message
        }
        
        // If no output from stdout, use error message
        if (!errorMessage) {
            errorMessage = error.message || String(error);
        }
        
        // Format Python traceback - show the actual error
        if (errorMessage.includes('Traceback')) {
            const lines = errorMessage.split('\n');
            // Find the actual error line (usually the last non-empty line that's not "File" or "Traceback")
            const errorLines = lines.filter(line => 
                line.trim() && 
                !line.trim().startsWith('File') && 
                !line.trim().startsWith('Traceback') &&
                !line.includes('line')
            );
            if (errorLines.length > 0) {
                errorMessage = `خطأ في الكود:\n${errorLines[errorLines.length - 1]}`;
            } else {
                errorMessage = `خطأ في الكود:\n${lines[lines.length - 1]}`;
            }
        } else if (!errorMessage.includes('خطأ')) {
            errorMessage = `خطأ: ${errorMessage}`;
        }
        
        output.textContent = errorMessage;
        output.style.color = '#f44336';
    }
}

// Setup run button event listener
document.addEventListener('DOMContentLoaded', function() {
    // Use event delegation for dynamically created buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.run-code-btn')) {
            e.preventDefault();
            runPythonCode();
        }
    });
    
    // Also setup for existing button if it exists
    const runBtn = document.querySelector('.run-code-btn');
    if (runBtn) {
        runBtn.addEventListener('click', function(e) {
            e.preventDefault();
            runPythonCode();
        });
    }
});

// Complete Lesson
function completeLesson(lessonId) {
    // Reload progress to ensure we have latest data
    loadProgress();
    
    if (!userProgress.completedLessons.includes(lessonId)) {
        userProgress.completedLessons.push(lessonId);
        
        // Update level progress
        const lesson = lessons.find(l => l.id === lessonId);
        if (lesson) {
            const levelLessons = lessons.filter(l => l.level === lesson.level);
            const completedLevelLessons = levelLessons.filter(l => 
                userProgress.completedLessons.includes(l.id)
            );
            userProgress.levelProgress[lesson.level] = 
                Math.round((completedLevelLessons.length / levelLessons.length) * 100);
        }
        
        // Award points
        userProgress.totalPoints += 10;
        
        checkAchievements();
        saveProgress();
        
        // Update all UI elements
        updateUI();
        updateLevelProgress();
        updateProfileStats();
        
        // Refresh lessons display if on lessons page
        const lessonsGrid = document.getElementById('lessonsGrid');
        if (lessonsGrid) {
            renderLessons();
        }
        
        // Refresh modal if open
        const modal = document.getElementById('lessonModal');
        if (modal && modal.classList.contains('active')) {
            openLesson(lessonId); // Refresh modal
        }
    }
}

// Check Achievements
function checkAchievements() {
    achievements.forEach(achievement => {
        if (userProgress.achievements.includes(achievement.id)) return;
        
        let unlocked = false;
        const req = achievement.requirement;
        
        switch(req.type) {
            case 'lessons_completed':
                unlocked = userProgress.completedLessons.length >= req.value;
                break;
            case 'all_levels':
                const hasBeginner = lessons.some(l => l.level === 'beginner' && 
                    userProgress.completedLessons.includes(l.id));
                const hasIntermediate = lessons.some(l => l.level === 'intermediate' && 
                    userProgress.completedLessons.includes(l.id));
                const hasAdvanced = lessons.some(l => l.level === 'advanced' && 
                    userProgress.completedLessons.includes(l.id));
                unlocked = hasBeginner && hasIntermediate && hasAdvanced;
                break;
            case 'code_runs':
                unlocked = userProgress.codeRuns >= req.value;
                break;
            case 'streak':
                unlocked = userProgress.streakDays >= req.value;
                break;
            case 'advanced_completed':
                const advancedLessons = lessons.filter(l => l.level === 'advanced');
                unlocked = advancedLessons.every(l => 
                    userProgress.completedLessons.includes(l.id));
                break;
        }
        
        if (unlocked) {
            userProgress.achievements.push(achievement.id);
            userProgress.totalPoints += achievement.points;
            showAchievementNotification(achievement);
        }
    });
}

// Show Achievement Notification
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <i class="${achievement.icon}"></i>
        <div>
            <h4>إنجاز جديد!</h4>
            <p>${achievement.title}</p>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--card-bg);
        padding: 1.5rem;
        border-radius: 15px;
        border: 2px solid var(--secondary-color);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 3000;
        animation: slideInRight 0.5s;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Render Achievements
function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';
    
    achievements.forEach(achievement => {
        const isUnlocked = userProgress.achievements.includes(achievement.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
        card.innerHTML = `
            <i class="achievement-icon ${achievement.icon}"></i>
            <h4 class="achievement-title">${achievement.title}</h4>
            <p class="achievement-description">${achievement.description}</p>
            <div class="achievement-progress">
                <i class="fas fa-star"></i> ${achievement.points} نقطة
            </div>
        `;
        grid.appendChild(card);
    });
}

// Update UI
function updateUI() {
    // Overall Progress
    const totalLessons = lessons.length;
    const completed = userProgress.completedLessons.length;
    const progressPercent = Math.round((completed / totalLessons) * 100);
    
    const overallProgressEl = document.getElementById('overallProgress');
    if (overallProgressEl) {
        overallProgressEl.textContent = progressPercent;
    }
    
    const progressCircle = document.querySelector('.progress-ring-circle');
    if (progressCircle) {
        const circumference = 2 * Math.PI * 54;
        const offset = circumference - (progressPercent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
    
    // Stats - check if elements exist before updating
    const completedLessonsEl = document.getElementById('completedLessons');
    if (completedLessonsEl) {
        completedLessonsEl.textContent = completed;
    }
    
    const streakDaysEl = document.getElementById('streakDays');
    if (streakDaysEl) {
        streakDaysEl.textContent = userProgress.streakDays;
    }
    
    const totalPointsEl = document.getElementById('totalPoints');
    if (totalPointsEl) {
        totalPointsEl.textContent = userProgress.totalPoints;
    }
    
    // Level Progress
    updateLevelProgress();
}

// Update Level Progress
function updateLevelProgress() {
    // Recalculate level progress from actual data
    const levels = ['beginner', 'intermediate', 'advanced'];
    const levelItems = document.querySelectorAll('.level-item');
    
    levels.forEach((level, levelIndex) => {
        const levelLessons = lessons.filter(l => l.level === level);
        const completedLevelLessons = levelLessons.filter(l => 
            userProgress.completedLessons.includes(l.id)
        );
        const progress = levelLessons.length > 0 
            ? Math.round((completedLevelLessons.length / levelLessons.length) * 100)
            : 0;
        
        // Update stored progress
        userProgress.levelProgress[level] = progress;
        
        // Update UI elements - find the correct level item
        if (levelItems[levelIndex]) {
            const fill = levelItems[levelIndex].querySelector('.progress-fill');
            const progressText = levelItems[levelIndex].querySelector('.progress-text');
            
            if (fill) {
                fill.style.width = progress + '%';
                fill.setAttribute('data-progress', progress);
            }
            if (progressText) {
                progressText.textContent = progress + '%';
            }
        }
    });
}

// Update Profile Stats
function updateProfileStats() {
    const profileCompletedLessons = document.getElementById('profileCompletedLessons');
    const profileAchievements = document.getElementById('profileAchievements');
    const profilePoints = document.getElementById('profilePoints');
    const profileStreak = document.getElementById('profileStreak');
    const totalAchievements = document.getElementById('totalAchievements');
    
    if (profileCompletedLessons) {
        profileCompletedLessons.textContent = userProgress.completedLessons.length;
    }
    if (profileAchievements) {
        profileAchievements.textContent = userProgress.achievements.length;
    }
    if (profilePoints) {
        profilePoints.textContent = userProgress.totalPoints;
    }
    if (profileStreak) {
        profileStreak.textContent = userProgress.streakDays;
    }
    if (totalAchievements) {
        totalAchievements.textContent = userProgress.achievements.length;
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Update Hero Stats with actual numbers
function updateHeroStats() {
    // Count total lessons
    const totalLessons = lessons.length;
    
    // Count lessons with videos
    const lessonsWithVideos = lessons.filter(l => l.videoUrl && l.videoUrl.trim() !== '').length;
    
    // Count total achievements
    const totalAchievements = achievements.length;
    
    // Update data-target attributes and text directly
    const lessonsCountEl = document.getElementById('totalLessonsCount');
    const videosCountEl = document.getElementById('totalVideosCount');
    const achievementsCountEl = document.getElementById('totalAchievementsCount');
    
    if (lessonsCountEl) {
        lessonsCountEl.dataset.target = totalLessons;
        lessonsCountEl.textContent = totalLessons; // Set immediately
    }
    if (videosCountEl) {
        videosCountEl.dataset.target = lessonsWithVideos;
        videosCountEl.textContent = lessonsWithVideos; // Set immediately
    }
    if (achievementsCountEl) {
        achievementsCountEl.dataset.target = totalAchievements;
        achievementsCountEl.textContent = totalAchievements; // Set immediately
    }
}

// Animate Numbers
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target) || 0;
        if (target === 0) return;
        
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Check and show certificate
function checkAndShowCertificate() {
    const userProgress = JSON.parse(localStorage.getItem('pythonMasterProgress')) || { completedLessons: [] };
    const completed = userProgress.completedLessons.length;
    const total = lessons.length;
    const percentage = Math.round((completed / total) * 100);
    
    if (percentage >= 80) {
        generateCertificate();
    } else {
        const needed = Math.ceil(total * 0.8) - completed;
        alert(`تحتاج إلى إكمال ${needed} درس إضافي للحصول على الشهادة.\n\nالتقدم الحالي: ${completed}/${total} (${percentage}%)`);
    }
}

// Quiz System
const quizzes = {
    1: {
        questions: [
            {
                question: "ما هي لغة البرمجة بايثون؟",
                options: ["لغة برمجة نصية", "لغة برمجة عالية المستوى", "لغة برمجة منخفضة المستوى", "لغة برمجة للويب فقط"],
                correct: 1
            },
            {
                question: "في أي عام تم إصدار بايثون لأول مرة؟",
                options: ["1989", "1990", "1991", "1992"],
                correct: 2
            }
        ]
    }
};

// Search Functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            searchResults.classList.remove('active');
            return;
        }
        
        const results = lessons.filter(lesson => 
            lesson.title.toLowerCase().includes(query) ||
            lesson.description.toLowerCase().includes(query) ||
            lesson.content.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            searchResults.innerHTML = results.map(lesson => `
                <div class="search-result-item" onclick="openLesson(${lesson.id}); closeSearch();">
                    <h4>${lesson.title}</h4>
                    <p>${lesson.description}</p>
                    <span class="lesson-badge badge-${lesson.level}">${getLevelName(lesson.level)}</span>
                </div>
            `).join('');
            searchResults.classList.add('active');
        } else {
            searchResults.innerHTML = '<div class="search-result-item">لا توجد نتائج</div>';
            searchResults.classList.add('active');
        }
    });
    
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}

function closeSearch() {
    searchInput.value = '';
    searchResults.classList.remove('active');
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        const icon = this.querySelector('i');
        
        if (isLight) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Favorites System
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function updateFavoritesCount() {
    const countEl = document.getElementById('favoritesCount');
    if (countEl) {
        countEl.textContent = favorites.length;
        countEl.style.display = favorites.length > 0 ? 'flex' : 'none';
    }
}

function toggleFavorite(lessonId) {
    const index = favorites.indexOf(lessonId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(lessonId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    updateFavoriteButton(lessonId);
    renderFavoritesList();
}

function isFavorite(lessonId) {
    return favorites.includes(lessonId);
}

function updateFavoriteButton(lessonId) {
    const btn = document.getElementById('favoriteLessonBtn');
    if (!btn) return;
    
    if (isFavorite(lessonId)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-heart"></i><span>إزالة من المفضلة</span>';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i><span>أضف للمفضلة</span>';
    }
}

function renderFavoritesList() {
    const list = document.getElementById('favoritesList');
    if (!list) return;
    
    if (favorites.length === 0) {
        list.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--text-secondary);">لا توجد دروس مفضلة</p>';
        return;
    }
    
    list.innerHTML = favorites.map(lessonId => {
        const lesson = lessons.find(l => l.id === lessonId);
        if (!lesson) return '';
        return `
            <div class="favorite-item">
                <div class="favorite-item-info">
                    <h4>${lesson.title}</h4>
                    <p>${lesson.description}</p>
                    <span class="lesson-badge badge-${lesson.level}">${getLevelName(lesson.level)}</span>
                </div>
                <div class="favorite-item-actions">
                    <button class="btn-primary" onclick="openLesson(${lesson.id}); closeModal('favoritesModal');">فتح</button>
                    <button class="btn-secondary" onclick="toggleFavorite(${lesson.id});">إزالة</button>
                </div>
            </div>
        `;
    }).join('');
}

// Favorites Button
const favoritesBtn = document.getElementById('favoritesBtn');
if (favoritesBtn) {
    favoritesBtn.addEventListener('click', function() {
        renderFavoritesList();
        document.getElementById('favoritesModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Lesson Rating System
let ratings = JSON.parse(localStorage.getItem('lessonRatings')) || {};

function rateLesson(lessonId, rating) {
    ratings[lessonId] = rating;
    localStorage.setItem('lessonRatings', JSON.stringify(ratings));
    updateRatingDisplay(lessonId);
}

function updateRatingDisplay(lessonId) {
    const ratingEl = document.getElementById('lessonRating');
    if (!ratingEl) return;
    
    const currentRating = ratings[lessonId] || 0;
    const stars = ratingEl.querySelectorAll('i');
    
    stars.forEach((star, index) => {
        if (index < currentRating) {
            star.classList.add('active', 'fas');
            star.classList.remove('far');
        } else {
            star.classList.remove('active', 'fas');
            star.classList.add('far');
        }
    });
}

if (document.getElementById('lessonRating')) {
    document.getElementById('lessonRating').addEventListener('click', function(e) {
        if (e.target.tagName === 'I' && e.target.dataset.rating) {
            const lessonId = parseInt(document.getElementById('modalTitle').dataset.lessonId || 0);
            const rating = parseInt(e.target.dataset.rating);
            rateLesson(lessonId, rating);
        }
    });
}

function renderQuiz(lessonId) {
    const quiz = quizzes[lessonId];
    const container = document.getElementById('quizContainer');
    if (!quiz || !container) return;
    
    let currentQuestion = 0;
    let score = 0;
    let selectedAnswers = [];
    
    function showQuestion() {
        if (currentQuestion >= quiz.questions.length) {
            showResults();
            return;
        }
        
        const q = quiz.questions[currentQuestion];
        container.innerHTML = `
            <div class="quiz-question">
                <h3>السؤال ${currentQuestion + 1} من ${quiz.questions.length}</h3>
                <p style="font-size: 1.2rem; margin-bottom: 1.5rem;">${q.question}</p>
                <div class="quiz-options">
                    ${q.options.map((option, index) => `
                        <div class="quiz-option" data-index="${index}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
                <button class="btn-primary" style="margin-top: 1.5rem;" id="nextQuestionBtn" disabled>
                    ${currentQuestion === quiz.questions.length - 1 ? 'إنهاء' : 'التالي'}
                </button>
            </div>
        `;
        
        const options = container.querySelectorAll('.quiz-option');
        const nextBtn = document.getElementById('nextQuestionBtn');
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                options.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                selectedAnswers[currentQuestion] = parseInt(this.dataset.index);
                nextBtn.disabled = false;
            });
        });
        
        nextBtn.addEventListener('click', function() {
            if (selectedAnswers[currentQuestion] === q.correct) {
                score++;
            }
            currentQuestion++;
            showQuestion();
        });
    }
    
    function showResults() {
        const percentage = Math.round((score / quiz.questions.length) * 100);
        container.innerHTML = `
            <div class="quiz-result">
                <h2>انتهى التمرين!</h2>
                <div class="quiz-score">${score} / ${quiz.questions.length}</div>
                <p>نسبة النجاح: ${percentage}%</p>
                ${percentage >= 70 ? 
                    '<p style="color: var(--success-color); margin-top: 1rem;">🎉 ممتاز! لقد نجحت!</p>' :
                    '<p style="color: var(--warning-color); margin-top: 1rem;">حاول مرة أخرى!</p>'
                }
                <button class="btn-primary" style="margin-top: 1.5rem;" onclick="renderQuiz(${lessonId})">
                    إعادة المحاولة
                </button>
            </div>
        `;
    }
    
    showQuestion();
}

// Scroll to Top
const scrollToTopBtn = document.getElementById('scrollToTop');
if (scrollToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Sort Lessons
const sortSelect = document.getElementById('sortSelect');
if (sortSelect) {
    sortSelect.addEventListener('change', function() {
        const sortBy = this.value;
        let sortedLessons = [...lessons];
        
        switch(sortBy) {
            case 'title':
                sortedLessons.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'level':
                const levelOrder = { beginner: 1, intermediate: 2, advanced: 3 };
                sortedLessons.sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);
                break;
            case 'duration':
                sortedLessons.sort((a, b) => {
                    const aDur = parseInt(a.duration);
                    const bDur = parseInt(b.duration);
                    return aDur - bDur;
                });
                break;
        }
        
        const currentFilter = document.querySelector('.filter-btn.active')?.dataset.level || 'all';
        const filtered = currentFilter === 'all' 
            ? sortedLessons 
            : sortedLessons.filter(l => l.level === currentFilter);
        
        renderLessonsFromArray(filtered);
    });
}

function renderLessonsFromArray(lessonsArray) {
    const grid = document.getElementById('lessonsGrid');
    grid.innerHTML = '';
    
    lessonsArray.forEach(lesson => {
        const isCompleted = userProgress.completedLessons.includes(lesson.id);
        const card = document.createElement('div');
        card.className = 'lesson-card';
        card.innerHTML = `
            <div class="lesson-icon">
                <i class="${lesson.icon}"></i>
            </div>
            <h3 class="lesson-title">${lesson.title}</h3>
            <p class="lesson-description">${lesson.description}</p>
            <div class="lesson-meta">
                <span class="lesson-badge badge-${lesson.level}">${getLevelName(lesson.level)}</span>
                <span class="lesson-duration"><i class="fas fa-clock"></i> ${lesson.duration}</span>
            </div>
            <div class="lesson-footer">
                ${isCompleted ? '<span class="lesson-completed"><i class="fas fa-check-circle"></i> مكتمل</span>' : ''}
                ${isFavorite(lesson.id) ? '<span style="color: var(--error-color);"><i class="fas fa-heart"></i></span>' : ''}
                <button class="btn-primary" onclick="openLesson(${lesson.id})">ابدأ الدرس</button>
            </div>
        `;
        grid.appendChild(card);
    });
}


// Certificate System
function generateCertificate() {
    const userProgress = JSON.parse(localStorage.getItem('pythonMasterProgress')) || { completedLessons: [] };
    const completed = userProgress.completedLessons.length;
    const total = lessons.length;
    
    if (completed < total * 0.8) {
        const needed = Math.ceil(total * 0.8) - completed;
        alert(`يجب إكمال 80% من الدروس على الأقل للحصول على الشهادة.\n\nتحتاج إلى إكمال ${needed} درس إضافي.\nالتقدم الحالي: ${completed}/${total} (${Math.round((completed/total)*100)}%)`);
        return;
    }
    
    const modal = document.getElementById('certificateModal');
    if (!modal) return;
    
    // Get current user name
    const currentUser = getCurrentUser();
    const userName = currentUser ? (currentUser.name || currentUser.username) : 'المتعلم المتميز';
    
    document.getElementById('certificateName').textContent = userName;
    document.getElementById('certificateCourse').textContent = 'دورة تعلم بايثون الشاملة من موقع Python Master';
    const platformEl = document.getElementById('certificatePlatform');
    if (platformEl) {
        platformEl.style.display = 'none'; // Hide since it's now in the course name
    }
    document.getElementById('certificateDate').textContent = new Date().toLocaleDateString('ar-SA');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function downloadCertificate() {
    // In a real implementation, this would generate a PDF
    alert('سيتم تحميل الشهادة قريباً!');
}

function shareCertificate() {
    if (navigator.share) {
        navigator.share({
            title: 'شهادة إتمام دورة بايثون',
            text: 'لقد أكملت دورة تعلم بايثون!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('تم نسخ الرابط!');
    }
}

// Code Editor Enhancements
const clearCodeBtn = document.getElementById('clearCode');
const saveCodeBtn = document.getElementById('saveCode');

if (clearCodeBtn) {
    clearCodeBtn.addEventListener('click', function() {
        if (confirm('هل تريد مسح الكود؟')) {
            document.getElementById('codeEditor').value = '';
            document.getElementById('codeOutput').textContent = '';
        }
    });
}

if (saveCodeBtn) {
    saveCodeBtn.addEventListener('click', function() {
        const code = document.getElementById('codeEditor').value;
        const lessonId = document.getElementById('modalTitle').dataset.lessonId;
        if (lessonId) {
            const savedCodes = JSON.parse(localStorage.getItem('savedCodes')) || {};
            savedCodes[lessonId] = code;
            localStorage.setItem('savedCodes', JSON.stringify(savedCodes));
            alert('تم حفظ الكود!');
        }
    });
}


// Close modal helper
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Helper function to close lesson modal
function closeLessonModal() {
    const lessonModal = document.getElementById('lessonModal');
    if (lessonModal) {
        lessonModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize
updateFavoritesCount();
if (document.getElementById('favoritesModal')) {
    document.querySelector('#favoritesModal .close-modal').addEventListener('click', () => closeModal('favoritesModal'));
}
if (document.getElementById('certificateModal')) {
    document.querySelector('#certificateModal .close-modal').addEventListener('click', () => closeModal('certificateModal'));
    document.getElementById('downloadCertificate')?.addEventListener('click', downloadCertificate);
    document.getElementById('shareCertificate')?.addEventListener('click', shareCertificate);
}

// Add certificate button to achievements section
const achievementsSection = document.getElementById('achievements');
if (achievementsSection) {
    const certificateBtn = document.createElement('button');
    certificateBtn.className = 'btn-primary';
    certificateBtn.style.margin = '2rem auto';
    certificateBtn.style.display = 'block';
    certificateBtn.innerHTML = '<i class="fas fa-certificate"></i> احصل على شهادتك';
    certificateBtn.onclick = generateCertificate;
    achievementsSection.querySelector('.container').appendChild(certificateBtn);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
