Sender: ${this.$store.state.userPreferences.email}
Date: ${ Dane.new() || (new Date()).getTime() }
Surname: ${this.$store.state.userPreferences.surname}
First name: ${this.$store.state.userPreferences.middleName}
Middle name: ${this.$store.state.userPreferences.middleName}
Phone number: ${this.$store.state.userPreferences.middleName}
Email: ${this.$store.state.userPreferences.middleName}

Message Body:
${message}


public fun getFirstImageFromMarkdown(postMarkdown: String): String {

    val reg = Regex(pattern = """!\[(.*)\]\((.+)\)""")

    val firstImageMarkdown = reg.find(postMarkdown);

    return firstImageMarkdown;
}
