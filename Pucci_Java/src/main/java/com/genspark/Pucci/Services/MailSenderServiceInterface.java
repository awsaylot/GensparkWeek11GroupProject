package com.genspark.Pucci.Services;

public interface MailSenderServiceInterface {

    void sendMail(String toEmail, String subject, String body);

}
