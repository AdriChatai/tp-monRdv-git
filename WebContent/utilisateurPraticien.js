$(document).ready(function() {
	
	var self = this;

	this.utilisateur = {
		"id" : 1,
		"mail":"adri.chataigneau@gmail.com",
		"password":"AdriBG",
		"nom" : "Chataigneau",
		"prenom" : "Adrien",
		"specialite": ["Proctologue","Gynécologue","Spécialiste des adducteurs"],
		"tel":"06 47 13 40 45",
		"duree":"30 min"
	};
	
	this.mode = "";

	this.edit = function(id) {
		this.mode = "edit";
		var utilisateur = this.utilisateur;
		$("#nom").val(utilisateur.nom);
		$("#prenom").val(utilisateur.prenom);
		$("#specialites").val(utilisateur.birthday);
		$("#mail").val(utilisateur.mail);
		$("#tel").val(utilisateur.tel);
		$("#numeroCarte").val(utilisateur.numeroCarte);
	};

	this.save = function() {
		
		this.utilisateur.nom = $("#nom").val();
		this.utilisateur.prenom = $("#prenom").val();
//		
		this.utilisateur.specialites = $("#birthday").val();
		this.utilisateur.mail = $("#mail").val();
		this.utilisateur.tel = $("#tel").val();
		this.utilisateur.duree = $("#duree").val();
		
		self.reload();
		
		self.cancel();
	};

	this.cancel = function() {
		this.mode = "";
		var utilisateur = this.utilisateur;
		$("#id").prop("readonly",false);
		$("#nom").val(utilisateur.nom);
		$("#prenom").val(utilisateur.prenom);
		$("#specialite").val(utilisateur.birthday);
		$("#mail").val(utilisateur.mail);
		$("#tel").val(utilisateur.tel);
		$("#numeroCarte").val(utilisateur.numeroCarte);
	};

	
	this.reload = function() {
		var utilisateur = this.utilisateur;
		$("#nom").val(utilisateur.nom);
		$("#prenom").val(utilisateur.prenom);
		$("#birthday").val(utilisateur.birthday);
		$("#mail").val(utilisateur.mail);
		$("#tel").val(utilisateur.tel);
		$("#numeroCarte").val(utilisateur.numeroCarte);
	};
	
	this.reload();
});
